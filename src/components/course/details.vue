<template lang="jade">
    div.padded
        mu-paper(style="padding:10px")
            mu-content-block.para
                mu-row(gutter)
                    mu-col.center.aligned(desktop="35",table="50",width="100")
                        img(:src="item.logo_url", style='border:1px solid #eee')
                    mu-col(desktop="65",table="50",width="100")
                        h2(style="margin-top:10px;") {{item.name}}
                        p(v-html="item.intro")
                        p.right.aligned
                            mu-raised-button(label='收藏',icon='favorite', :secondary='faved', @click='favCourse')
            mu-divider
            mu-content-block.para(v-html='item.details')
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
            faved: false,
            course_id: this.$route.params.course_id,
            isMobile: Browser.mobile,
        }
    },
    mounted: function () {
        this.loadCourseDetails();
        if (this.$cookie.getCookie('sid')) {
            this.isStudentFavCourse();
        }
    },
    methods: {
        loadCourseDetails() {
            var _this = this;
            this.$db.getCourseDetails(this, { course_id: this.course_id }).then(res => {
                _this.item = res[0];
            });
        },
        favCourse() {
            if (this.$cookie.getCookie('sid')) {
                var _this = this;
                if (this.faved) { //如果已经收藏了课程，删除收藏的课程
                    this.$db.delStudentFavCourse(this, { student_id: this.$cookie.getCookie('sid'), course_id: this.course_id }).then(res => {
                        if (res.affectedRows > 0) {
                            _this.faved = false;
                        };
                    });
                }
                else { //如果没有收藏，加入收藏
                    this.$db.newStudentFavCourse(this, { student_id: this.$cookie.getCookie('sid'), course_id: this.course_id }).then(res => {
                        if (res.affectedRows > 0) {
                            _this.faved = true;
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
            this.$db.isStudentFavCourse(this, { student_id: this.$cookie.getCookie('sid'), course_id: this.course_id }).then(res => {
                if (res == '1')
                    _this.faved = true;
                else
                    _this.faved = false;
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
</style>