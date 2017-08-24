<template lang="jade">
    div.container
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='isMenuDisplay')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校
                        mu-list-item.item(title="通知", to='/my/notify')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程与项目
                        mu-list-item.item(title="我的课程", to='/my/course')
                        mu-list-item.item(title="收藏的课程", to='/my/fav_course')
                        mu-list-item.item(title="我的项目组", to='/my/team')
                        mu-list-item.item(title="我关注的项目组",to='/my/follow_team')
                        mu-divider
                        mu-sub-header 
                            i.icon.file.text
                            span &nbsp; 讨论与文档
                        mu-list-item.item(title="我的文档",to='/my/doc')
                        mu-list-item.item(title="我收藏的文档",to='/my/fav_doc')
                        mu-divider
                        mu-sub-header 
                            i.icon.user
                            span &nbsp; 学生
                        mu-list-item.item(title="我的资料",to='/my/profile')
                        mu-list-item.item(title="我的研发能力",to='/my/dev_level')
                        mu-list-item.item(title="我的运营能力",to='/my/op_level')
                        mu-divider
                        mu-list-item.item(title="退出登录",to='/logoff')
            mu-col(:desktop="contentWidth", width="100")
                mu-appbar(:title="title")
                    mu-icon-button(icon="menu",slot="right",@click='toggleMenu')
                router-view
</template>

<script>
import Browser from '@/common/browser'

export default {
    name: 'my',
    data() {
        return {
            isMobile: Browser.mobile,
            isMenuDisplay: true,
            currentPage: window.location.pathname.split('/')[2].toLowerCase(),
            contentWidth: '80',
            title: ''
        }
    },
    beforeUpdate: function() {
        this.currentPage = window.location.pathname.split('/')[2].toLowerCase();
    },
    mounted: function() {
        //判断是否为Mobile
        if (this.isMobile) {
            this.isMenuDisplay = false;
        }
        if (!this.$cookie.getCookie('sid')) {
            this.$router.push('/login');
        }
        this.setTitle(this.currentPage);
    },
    methods: {
        toggleMenu() {
            this.isMenuDisplay = !this.isMenuDisplay;
            this.contentWidth = this.contentWidth == '100' ? '80' : '100';
        },
        setTitle(value) {
            switch (value) {
                case "notify":
                    this.title = "通知";
                    break;
                case "course":
                    this.title = "我的课程";
                    break;
                case "fav_course":
                    this.title = "收藏的课程";
                    break;
                case "team":
                    this.title = "我的项目组";
                    break;
                case "follow_team":
                    this.title = "我关注的项目组";
                    break;
                case "doc":
                    this.title = "我的文档";
                    break;
                case "fav_doc":
                    this.title = "我收藏的文档";
                    break;
                case "profile":
                    this.title = "我的资料";
                    break;
                case "dev_level":
                    this.title = "我的研发能力";
                    break;
                case "op_level":
                    this.title = "我的运营能力";
                    break;
            }
            document.title = this.title + ' - 我的 - ' + this.$config.title;
        }
    },
    watch: {
        currentPage: function() {
            this.setTitle(this.currentPage);
            if (this.isMobile) {
                this.isMenuDisplay = false;
            }
        },
        isMenuDisplay: function() {
            this.contentWidth = this.isMenuDisplay ? '80' : '100'
        }
    }
}
</script>

<style scoped>

</style>