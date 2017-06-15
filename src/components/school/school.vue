<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校 School
                        a(href='/school/vision')
                            mu-list-item.item(title="愿景与目标", :class='currentPage == "vision" ? "router-link-active" : ""')
                        a(href='/school/revolution')
                            mu-list-item.item(title="革新", :class='currentPage == "revolution" ? "router-link-active" : ""')
                        a(href='/school/geek')
                            mu-list-item.item(title="Geek文化", :class='currentPage == "geek" ? "router-link-active" : ""')
                        a(href='/school/study_space')
                            mu-list-item.item(title="学习环境", :class='currentPage == "study_space" ? "router-link-active" : ""')
                        a(href='/school/dorm_space')
                            mu-list-item.item(title="居住环境", :class='currentPage == "dorm_space" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程 Courses 
                        a(href='/school/parkathon')
                            mu-list-item.item(title="集训营", :class='currentPage == "parkathon" ? "router-link-active" : ""')
                        a(href='/school/course')
                            mu-list-item.item(title="两年课程", :class='currentPage == "course" ? "router-link-active" : ""')
                        a(href='/school/team')
                            mu-list-item.item(title="项目组", :class='currentPage == "team" ? "router-link-active" : ""')
                        a(href='/school/career')
                            mu-list-item.item(title="就业", :class='currentPage == "career" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.laptop
                            span &nbsp; 项目 Projects
                        a(href='/school/project')
                            mu-list-item.item(title="项目", :class='currentPage == "project" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.add.user
                            span &nbsp; 报名 Register
                        a(href='/register')
                            mu-list-item.item(title="注册")
                        a(href='/login')
                            mu-list-item.item(title="登录")
                        a(href='/school/entrance')
                            mu-list-item.item(title="入学考试", :class='currentPage == "entrance" ? "router-link-active" : ""')
                        a(href='/school/contact')
                            mu-list-item.item(title="联系我们", :class='currentPage == "contact" ? "router-link-active" : ""')
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
        document.title = '学校 - CodeA - Sky College';
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            this.contentWidth = this.contentWidth == 100 ? 80 : 100;
        }
    }
}
</script>

<style scoped>

</style>