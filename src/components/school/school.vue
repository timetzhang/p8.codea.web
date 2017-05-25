<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校 School
                        mu-list-item.item(title="愿景", @click="redirect('vision','愿景')")
                        mu-list-item.item(title="目标", @click="redirect('mission','目标')")
                        mu-list-item.item(title="革新", @click="redirect('revolution','革新')")
                        mu-list-item.item(title="Geek文化", @click="redirect('geek','Geek文化')")
                        mu-list-item.item(title="学习环境", @click="redirect('study_space','学习环境')")
                        mu-list-item.item(title="居住环境", @click="redirect('dorm_space','居住环境')")
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程 Courses 
                        mu-list-item.item(title="集训营", @click="redirect('parkathon','集训营')")
                        mu-list-item.item(title="两年课程", @click="redirect('course','两年课程')")
                        mu-list-item.item(title="项目组", @click="redirect('team','项目组')")
                        mu-list-item.item(title="就业", @click="redirect('career','就业')")
                        mu-divider
                        mu-sub-header 
                            i.icon.laptop
                            span &nbsp; 项目 Projects
                        mu-list-item.item(title="课程项目", @click="redirect('project_lecture','课程项目')")
                        mu-list-item.item(title="商业项目", @click="redirect('project_bus','商业项目')")
                        mu-divider
                        mu-sub-header 
                            i.icon.add.user
                            span &nbsp; 报名 Register
                        mu-list-item.item(title="注册", @click="redirect('register','注册')")
                        mu-list-item.item(title="登录", to='/login')
                        mu-list-item.item(title="入学考试", @click="redirect('entrance','入学考试')")
                        mu-list-item.item(title="联系我们", @click="redirect('contact','联系我们')")
            mu-col(desktop="80", width="100")
                mu-appbar(:title="title", v-if='isMobile')
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
            title: '愿景'
        }
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
        },
        redirect(path, title) {
            this.title = title;
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