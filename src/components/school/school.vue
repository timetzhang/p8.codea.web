<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校 School
                        mu-list-item.item(title="愿景与目标", to='/school/vision', @click='redirect("vision", $event)')
                        mu-list-item.item(title="革新", to='/school/revolution')
                        mu-list-item.item(title="Geek文化", to='/school/geek')
                        mu-list-item.item(title="学习环境", to='/school/study_space')
                        mu-list-item.item(title="居住环境", to='/school/dorm_space')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程 Courses 
                        mu-list-item.item(title="集训营", to='/school/parkathon')
                        mu-list-item.item(title="两年课程", to='/school/course')
                        mu-list-item.item(title="项目组", to='/school/team')
                        mu-list-item.item(title="就业", to='/school/career')
                        mu-divider
                        mu-sub-header 
                            i.icon.laptop
                            span &nbsp; 项目 Projects
                        mu-list-item.item(title="课程项目", to='/school/course')
                        mu-list-item.item(title="商业项目", to='/school/course')
                        mu-divider
                        mu-sub-header 
                            i.icon.add.user
                            span &nbsp; 报名 Register
                        mu-list-item.item(title="注册", to='/school/register')
                        mu-list-item.item(title="登录", to='/login')
                        mu-list-item.item(title="入学考试", to='/school/entrance')
                        mu-list-item.item(title="联系我们", to='/school/contact')
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
            contentWidth: 80,
            currentPage: this.$route.path.split('/')[2]
        }
    },
    updated: function () {
        this.title = this.$route.path.split('/')[2]
    },
    mounted: function () {
        //判断是否为Mobile
        if (this.isMobile) {
            this.showMenu = false;
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            this.contentWidth = this.contentWidth == 100 ? 80 : 100;
        },
        redirect(e) {
            alert(e);
        }
    }
}
</script>

<style scoped>

</style>