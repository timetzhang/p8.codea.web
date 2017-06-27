<template lang="jade">
    div.padded
        mu-paper(style="padding:10px")
            mu-content-block.para
                mu-row(gutter)
                    mu-col.center.aligned(desktop="35",table="50",width="100")
                        img(:src="item.logo", style='border:1px solid #eee')
                    mu-col(desktop="65",table="50",width="100")
                        h2(style="margin-top:10px;") {{item.name}}
                        p(v-html="item.intro")
                        p.right.aligned
                            mu-raised-button(label='收藏',icon='favorite', :secondary='isFav', @click='favCourse')
            mu-divider
            mu-content-block.para(v-html='item.details')
        mu-dialog(:open="isDialogDeleteFavDisplay",title="请确认",@close="closeDeleteFavConfirmDialog") 是否取消收藏
            mu-flat-button(slot="actions",@click="closeDeleteFavConfirmDialog",primary,label="取消")
            mu-flat-button(slot="actions",secondary,@click="deleteFav",label="确定")
</template>

<script>
import DateTime from '@/common/datetime.js'
import Browser from '@/common/browser'
import 'highlightjs/styles/androidstudio.css'

export default {
    name: 'course',
    data() {
        return {
            item: {},
            isFav: false,
            courseId: this.$route.params.course_id,
            isMobile: Browser.mobile,
            isDialogDeleteFavDisplay: false
        }
    },
    beforeMount: function () {
        this.loadCourseDetails();
        if (this.$cookie.getCookie('sid')) {
            this.isStudentFavCourse();
        }
    },
    methods: {
        loadCourseDetails() {
            var _this = this;
            this.$db.getCourseDetails(this, { course_id: this.courseId }).then(res => {
                _this.item = res[0];
                document.title = _this.item.name + this.$config.title;
            });
        },
        favCourse() {
            if (this.$cookie.getCookie('sid')) {
                var _this = this;
                if (this.isFav) { //如果已经收藏了课程，删除收藏的课程
                    this.isDialogDeleteFavDisplay = true;
                }
                else { //如果没有收藏，加入收藏
                    this.$db.newStudentFavCourse(this, { student_id: this.$cookie.getCookie('sid'), course_id: this.courseId }).then(res => {
                        if (res.affectedRows > 0) {
                            _this.isFav = true;
                        };
                    });
                }
            }
            else {
                this.$router.push('/login');
            }

        },
        isStudentFavCourse() {
            var _this = this;
            this.$db.isStudentFavCourse(this, { student_id: this.$cookie.getCookie('sid'), course_id: this.courseId }).then(res => {
                if (res == '1')
                    _this.isFav = true;
                else
                    _this.isFav = false;
            });
        },
        closeDeleteFavConfirmDialog(){
            this.isDialogDeleteFavDisplay = false;
        },
        deleteFav(){
            var _this = this;
            this.$db.delStudentFavCourse(this, { student_id: this.$cookie.getCookie('sid'), course_id: this.courseId }).then(res => {     
                if (res.affectedRows > 0) {
                    _this.isFav = false;
                    _this.closeDeleteFavConfirmDialog();
                };
            });
        }
    }
}
</script>

<style>
.time {
    font-size: 12px;
    color: #aaa;
}

.details-btns {
    padding: 10px 0;
}

blockquote {
    background: #eee;
    padding: 15px;
    border-left: 5px solid #444;
}

.list {
    width: 100%;
}

.list .item {
    padding: 10px;
    border: 1px solid #eee;
    border-collapse: collapse;
    margin-left: -5px;
}

.list .item.col-25 {
    display: inline-block;
    width: 25%;
}

.list .item.col-50 {
    display: inline-block;
    width: 50%;
}

.list .item.col-33 {
    display: inline-block;
    width: 33.333%;
}

@media screen and (max-width:600px) {
    .list .item.col-25 {
        display: block;
        width: 100%;
    }

    .list .item.col-50 {
        display: block;
        width: 100%;
    }

    .list .item.col-33 {
        display: block;
        width: 100%;
    }
}

.list .item:hover {
    background-color: #eee;
    cursor: pointer;
}

.list .item .title {
    font-size: 17px;
    font-weight: bold;
}

.list .item .desc {
    font-size: 12px;
}
</style>