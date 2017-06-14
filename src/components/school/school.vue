<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校 School
                        mu-list-item.item(title="愿景与目标", @click='redirect($event, "vision")', :class='currentPage == "vision" ? "router-link-active" : ""')
                        mu-list-item.item(title="革新", @click='redirect($event, "revolution")', :class='currentPage == "revolution" ? "router-link-active" : ""')
                        mu-list-item.item(title="Geek文化", @click='redirect($event, "geek")', :class='currentPage == "geek" ? "router-link-active" : ""')
                        mu-list-item.item(title="学习环境", @click='redirect($event, "study_space")', :class='currentPage == "study_space" ? "router-link-active" : ""')
                        mu-list-item.item(title="居住环境", @click='redirect($event, "dorm_space")', :class='currentPage == "dorm_space" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程 Courses 
                        mu-list-item.item(title="集训营", @click='redirect($event, "parkathon")', :class='currentPage == "parkathon" ? "router-link-active" : ""')
                        mu-list-item.item(title="两年课程", @click='redirect($event, "course")', :class='currentPage == "course" ? "router-link-active" : ""')
                        mu-list-item.item(title="项目组", @click='redirect($event, "team")', :class='currentPage == "team" ? "router-link-active" : ""')
                        mu-list-item.item(title="就业", @click='redirect($event, "career")', :class='currentPage == "career" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.laptop
                            span &nbsp; 项目 Projects
                        mu-list-item.item(title="项目", @click='redirect($event, "project")', :class='currentPage == "project" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.add.user
                            span &nbsp; 报名 Register
                        mu-list-item.item(title="注册", to='/register')
                        mu-list-item.item(title="登录", to='/login')
                        mu-list-item.item(title="入学考试", @click='redirect($event, "entrance")', :class='currentPage == "entrance" ? "router-link-active" : ""')
                        mu-list-item.item(title="联系我们", @click='redirect($event, "contact")', :class='currentPage == "contact" ? "router-link-active" : ""')
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
            title: '愿景与目标',
            currentPage: 'vision',
            contentWidth: 80
        }
    },
    mounted: function () {
        //判断是否为Mobile
        if (this.isMobile) {
            this.showMenu = false;
        }
        document.title = this.title + ' - CodeA - Sky College';
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            this.contentWidth = this.contentWidth == 100 ? 80 : 100;
        },
        redirect(e, path) {
            this.title = e.srcElement.innerText;
            document.title = this.title + ' - CodeA - Sky College';
            this.currentPage = path;
            this.$router.push('/school/' + path);
            if (this.isMobile) {
                this.showMenu = false;
            }
        }
    }
}
</script>

<style scoped>

</style>