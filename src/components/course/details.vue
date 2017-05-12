<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="20", v-if='lecture_count > 1')
            mu-paper(height="100")
                mu-list
                    mu-list-item(v-for='item in menu',:key='item.id',:title='item.name', :class='this.$route.params.lecture_id == item.id ? "router-link-active" : ""')
                        mu-icon(slot="left",value="code")
                    mu-divider
        mu-col(:desktop="lecture_count > 1 ? 80 : 100")
            mu-paper
                mu-content-block
                    div.center.aligned
                        h2 {{name}}
                        .time 最后更新 {{time}}
                        .details-btns 
                            mu-icon-button(tooltip="分享",icon="share")
                            mu-icon-button(tooltip="收藏",icon="favorite")
                    div(v-html='details')
</template>

<script>
import DateTime from '@/common/datetime.js'
export default {
    name: 'course',
    data() {
        return {
            menu: [],
            name: '',
            details: '',
            time: '',
            lecture_count: 0
        }
    },
    created: function () {
        this.loadLectureList();
        this.loadLecture();
    },
    methods: {
        loadLectureList() {
            var _this = this;
            //获取Subject
            this.$db.getCourseLectureList(this, { course_id: this.$route.params.course_id }).then(res => {
                _this.menu = res;
                _this.lecture_count = res.length;
            });
        },
        loadLecture() {
            var _this = this;
            this.$db.getCourseLecture(this, { lecture_id: this.$route.params.lecture_id }).then(res => {
                _this.name = res[0].name;
                _this.time = DateTime.dateFormat(res[0].time);
                _this.details = res[0].details;
            });
            this.goTop();
        },
        goTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
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
</style>