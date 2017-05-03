<template lang="jade">
    mu-row(gutter)
        mu-col(:desktop="15")
            mu-paper(height="100")
                mu-list
                    mu-list-item(title="首页",href="/#/school/home")
                        mu-icon(slot="left",value="home")
                    mu-list-item(title="学校",:toggleNested="true")
                        mu-icon(slot="left",value="dns")
                        mu-list-item(slot="nested",title="愿景", href='/#/school/vision')
                            mu-icon(slot="left",value="grade")
                        mu-list-item(slot="nested",title="目标", href='/#/school/mission')
                            mu-icon(slot="left",value="my_location")
                        mu-list-item(slot="nested",title="革新", href='/#/school/revolution')
                            mu-icon(slot="left",value="extension")
                        mu-list-item(slot="nested",title="学习环境", href='/#/school/study')
                            mu-icon(slot="left",value="event_seat")
                        mu-list-item(slot="nested",title="居住环境", href='/#/school/dorm')
                            mu-icon(slot="left",value="nature_people")
                    mu-list-item(title="课程",:toggleNested="true")
                        mu-icon(slot="left",value="school")
                        mu-list-item(slot="nested",title="集训", href='/#/school/parkathon')
                            mu-icon(slot="left",value="looks_one")
                        mu-list-item(slot="nested",title="两年课程", href='/#/school/course')
                            mu-icon(slot="left",value="looks_two")
                        mu-list-item(slot="nested",title="项目组", href='/#/school/team')
                            mu-icon(slot="left",value="looks_3")
                        mu-list-item(slot="nested",title="就业", href='/#/school/career')
                            mu-icon(slot="left",value="looks_4")
                    mu-list-item(title="项目",:toggleNested="true")
                        mu-icon(slot="left",value="assessment")
                        mu-list-item(slot="nested",title="课程项目", href='/#/school/project_lecture')
                            mu-icon(slot="left",value="looks_4")
                        mu-list-item(slot="nested",title="商业项目", href='/#/school/project_bus')
                            mu-icon(slot="left",value="looks_4")
                    mu-list-item(title="报名",:toggleNested="true")
                        mu-icon(slot="left",value="inbox")
                        mu-list-item(slot="nested",title="入学考试", href='/#/school/entrance')
                            mu-icon(slot="left",value="create")
                        mu-list-item(slot="nested",title="注册", href='/#/school/register')
                            mu-icon(slot="left",value="account_box")
                    mu-list-item(title="联系我们", href='/#/school/contact')
                        mu-icon(slot="left",value="phone")
        mu-col(:desktop="85")
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