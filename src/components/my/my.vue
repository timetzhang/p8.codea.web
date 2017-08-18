<template lang="jade">
    div.container
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校
                        mu-list-item.item(title="通知", to="/my/notify")
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程与项目
                        mu-list-item.item(title="我的课程", to="/my/course")
                        mu-list-item.item(title="收藏的课程", to="/my/fav_course")
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
            mu-col(:desktop="contentWidth", width="100")
                mu-appbar(:title="title")
                    mu-icon-button(icon="menu",slot="right",@click='toggleMenu')
                router-view
</template>

<script>
import Browser from '@/common/browser'

export default {
    name: 'school',
    data() {
        return {
            isMobile: Browser.mobile,
            showMenu: true,
            currentPage: window.location.pathname.split('/')[2],
            contentWidth: '80'
        }
    },
    mounted: function () {
        //判断是否为Mobile
        if (this.isMobile) {
            this.showMenu = false;
        }
        if (!this.$cookie.getCookie('sid')) {
            this.$router.push('/login');
        }
        document.title = '我的 - ' + this.$config.title;
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            this.contentWidth = this.contentWidth == 100 ? 80 : 100;
        },
        redirect(e, path) {
            this.title = e.srcElement.innerText;
            this.currentPage = path;
            this.$router.push('/my/' + path);
            if (this.isMobile) {
                this.showMenu = false;
            }
        }
    }
}
</script>

<style scoped>

</style>