<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程与项目
                        a(href='/my/course')
                            mu-list-item.item(title="我的课程", :class='currentPage == "course" ? "router-link-active" : ""')
                        a(href='/my/fav_course')
                            mu-list-item.item(title="收藏的课程", :class='currentPage == "fav_course" ? "router-link-active" : ""')
                        a(href='/my/team')
                            mu-list-item.item(title="我的项目组", :class='currentPage == "team" ? "router-link-active" : ""')
                        a(href='/my/follow_team')
                            mu-list-item.item(title="我关注的项目组", :class='currentPage == "follow_team" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 讨论与文档
                        a(href='/my/doc')
                            mu-list-item.item(title="我的文档", :class='currentPage == "doc" ? "router-link-active" : ""')
                        a(href='/my/fav_doc')
                            mu-list-item.item(title="我收藏的文档", :class='currentPage == "fav_doc" ? "router-link-active" : ""')
                        a(href='/my/joined_talk')
                            mu-list-item.item(title="我参与的讨论", :class='currentPage == "joined_talk" ? "router-link-active" : ""')  
                        mu-divider
                        mu-sub-header 
                            i.icon.user
                            span &nbsp; 学生
                        a(href='/my/profile')
                            mu-list-item.item(title="我的资料", :class='currentPage == "profile" ? "router-link-active" : ""')
                        a(href='/my/dev_level')
                            mu-list-item.item(title="我的研发能力", :class='currentPage == "dev_level" ? "router-link-active" : ""')
                        a(href='/my/op_level')
                            mu-list-item.item(title="我的运营能力", :class='currentPage == "op_level" ? "router-link-active" : ""')
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