<template lang="jade">
    div.container
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校 School
                        mu-list-item.item(title="愿景与目标", to='/school/vision')
                        mu-list-item.item(title="革新",  to='/school/revolution')
                        mu-list-item.item(title="Geek文化", to='/school/geek')
                        mu-list-item.item(title="学习环境", to='/school/study_space')
                        mu-list-item.item(title="居住环境", to='/school/dorm_space')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程 Courses 
                        mu-list-item.item(title="集训营", to='/school/parkathon')
                        mu-list-item.item(title="1+1年课程", to='/school/course')
                        mu-list-item.item(title="项目组", to='/school/team')
                        mu-divider
                        mu-sub-header 
                            i.icon.laptop
                            span &nbsp; 项目 Projects
                        mu-list-item.item(title="项目", to='/school/project')
                        mu-divider
                        mu-sub-header 
                            i.icon.add.user
                            span &nbsp; 报名 Register
                        mu-list-item.item(title="注册",to='/register')
                        mu-list-item.item(title="登录",to='/login')
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
            this.showMenu = false;
        }  
        this.setTitle(this.currentPage);     
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            this.contentWidth = this.contentWidth == '100' ? '80' : '100';
        },
        setTitle(value) {
            switch (value) {
                case "vision":
                    this.title = "愿景与目标";
                    break;
                case "revolution":
                    this.title = "革新";
                    break;
                case "geek":
                    this.title = "Geek文化";
                    break;
                case "study_space":
                    this.title = "学习空间";
                    break;
                case "dorm_space":
                    this.title = "居住空间";
                    break;
                case "parkathon":
                    this.title = "集训营";
                    break;
                case "course":
                    this.title = "1+1年课程";
                    break;
                case "team":
                    this.title = "项目组";
                    break;
                case "career":
                    this.title = "就业";
                    break;
                case "project":
                    this.title = "项目";
                    break;
                case "entrance":
                    this.title = "入学考试";
                    break;
                case "contact":
                    this.title = "联系我们";
                    break;
            }
            document.title = this.title + ' - 学校 - ' + this.$config.title;
        }
    },
    watch: {
        currentPage: function() {
            this.setTitle(this.currentPage);
            if(this.isMobile) {
                this.showMenu = false;
            }
        }
    }
}
</script>

<style scoped>

</style>