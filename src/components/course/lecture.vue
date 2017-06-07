<template lang="jade">
    mu-paper
        mu-row(gutter)
            mu-col.center.aligned(desktop="25",table="50",width="100")
                mu-paper.sdkimg(:z-Depth="5")
                    img(src="../../assets/logo.png")
            mu-col(desktop="75",table="50",width="100",style="padding-left:10px;")
                h2(style="margin-top:0;") 科大讯飞
                p 讯飞开放平台是科大讯飞旗下人工智能开放平台，全面开放业界领先的语音合成、语音识别、语音唤醒、人脸识别、麦克风阵列等10多项核心能力，支持“云+端”全环境应用，提供一站式人工智能解决方案。目前，讯飞开放平台主要应用场景包括：移动应用、智能家居、可穿戴设备、机器人等领域，同时已吸引QQ、高德、滴滴打车、新浪微博、优必选、暴风魔镜等在内15万多合作伙伴加盟，覆盖终端用户超过8亿。
            div
                mu-chip 语音合成
                mu-chip 语音听写
                mu-chip 语义理解
                mu-chip 个性化识别
                mu-chip 语法识别
        br
        hr
        mu-row
            mu-col
                h2 官方入口
                a(href="http://doc.xfyun.cn/msc_ios/302720") http://doc.xfyun.cn/msc_ios/302720
        hr
        mu-row
            mu-col
                h2 语音合成
                p 本示例对应Demo的TTSUIController文件，为在线合成的代码示例。
        hr
        mu-row
            mu-col
                h2 项目实例
                p 本示例对应Demo的TTSUIController文件，为在线合成的代码示例。
        hr
        mu-row
            mu-col
                h2 在线运行
                mu-raised-button(backgroundColor="#a4c639") 立即运行
                mu-icon-button(tooltip="分享",icon="share")
                mu-icon-button(tooltip="收藏",icon="favorite")
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
            details: '',
            time: '',
            lecture_count: 0,
            course_id: this.$route.params.course_id,
            lecture_id: this.$route.params.lecture_id,
            isMobile: Browser.mobile,
            showMenu: false,
            showMenuButton: false
        }
    },
    mounted: function () {
        if (this.isMobile) {
            this.showMenu = false;
        }
    },
    created: function () {
        this.loadLectureList();
        this.loadLecture();
    },
    methods: {
        redirect(id) {
            this.course_id = this.$route.params.course_id;
            this.loadLectureList();
            this.loadLecture();
            if (this.isMobile) {
                this.showMenu = false;
            }
        },
        back() {
            this.$router.go(-1);
        },
        loadLectureList() {
            var _this = this;
            //获取Subject
            this.$db.getCourseLectureList(this, { course_id: this.course_id }).then(res => {
                _this.menu = res;
                _this.lecture_count = res.length;
                if (this.lecture_count > 1) {
                    if (!this.isMobile) {
                        this.showMenu = true;
                    }
                    else {
                        this.showMenuButton = true;
                    }
                }
            });
        },
        loadLecture() {
            var _this = this;
            this.$db.getCourseLecture(this, { lecture_id: this.lecture_id }).then(res => {
                _this.name = res[0].name;
                _this.time = DateTime.dateFormat(res[0].time);
                _this.details = res[0].details;
            });
            this.goTop();
        },
        goTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    },
    watch: {
        lecture_id() {
            console.log('asdsad');
            this.loadLectureList();
            this.loadLecture();
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