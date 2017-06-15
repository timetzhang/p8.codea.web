<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.user
                            span &nbsp; 学生 Student
                        a(href='/my/profile')
                            mu-list-item.item(title="我的资料", :class='currentPage == "profile" ? "router-link-active" : ""')
                        a(href='/my/level')
                            mu-list-item.item(title="我的级别", :class='currentPage == "level" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程 Courses 
                        a(href='/my/course')
                            mu-list-item.item(title="我的课程", :class='currentPage == "course" ? "router-link-active" : ""')
                        a(href='/my/fav_course')
                            mu-list-item.item(title="收藏的课程", :class='currentPage == "fav_course" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 项目 Projects 
                        a(href='/my/project')
                            mu-list-item.item(title="我的项目", :class='currentPage == "project" ? "router-link-active" : ""')
                        a(href='/my/team')
                            mu-list-item.item(title="我的项目组", :class='currentPage == "team" ? "router-link-active" : ""')
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
            contentWidth: 80
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
        document.title = '我的 - CodeA - Sky College';
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