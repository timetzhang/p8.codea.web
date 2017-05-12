<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="20")
            mu-paper(height="100")
                mu-list.column
                    mu-sub-header 
                        i.icon.university
                        span &nbsp; 学校 School
                    mu-list-item.item(title="愿景", to='/school/vision')
                    mu-list-item.item(title="目标", to='/school/mission')
                    mu-list-item.item(title="革新", to='/school/revolution')
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
                    mu-list-item.item(title="课程项目", to='/school/project_lecture')
                    mu-list-item.item(title="商业项目", to='/school/project_bus')
                    mu-divider
                    mu-sub-header 
                        i.icon.add.user
                        span &nbsp; 报名 Register
                    mu-list-item.item(title="注册", to='/school/register')
                    mu-list-item.item(title="入学考试", to='/school/entrance')
                    mu-list-item.item(title="联系我们", to='/school/contact')
        mu-col(desktop="80")
            router-view
</template>

<script>
export default {
    name: 'school',
    data() {
        return {

        }
    },
    mounted: function () {

    },
    methods: {

    }
}
</script>

<style scoped>

</style>