<template lang="jade">
    div.padded
        mu-paper(style="padding:10px")
            mu-content-block.para
                mu-row(gutter)
                    mu-col(desktop="35",table="50",width="100")
                        img(:src="logo_url", style='border:1px solid #eee')
                    mu-col(desktop="65",table="50",width="100")
                        h2(style="margin-top:10px;") {{name}}
                        p(v-html="intro")
            mu-divider
            mu-content-block.para(v-html='details')
</template>

<script>
import DateTime from '@/common/datetime.js'
import Browser from '@/common/browser'

export default {
    name: 'course',
    data() {
        return {
            menu: [],
            name: '',
            logo_url: '',
            details: '',
            intro: '',
            course_id: this.$route.params.course_id,
            isMobile: Browser.mobile,
        }
    },
    mounted: function () {
        this.loadCourseDetails();
    },
    methods: {
        loadCourseDetails() {
            var _this = this;
            this.$db.getCourseDetails(this, { course_id: this.course_id }).then(res => {
                _this.logo_url = res[0].logo_url;
                _this.intro = res[0].intro;
                _this.name = res[0].name;
                _this.details = res[0].details;
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
</style>