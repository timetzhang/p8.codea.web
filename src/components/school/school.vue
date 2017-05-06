<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="20")
            mu-paper(height="100")
                mu-list.column
                    mu-list-item(title="学校",:toggleNested="true")
                        mu-icon(slot="left",value="dns")
                        mu-list-item(slot="nested",title="愿景", to='/school/vision')
                            mu-icon(slot="left",value="grade")
                        mu-list-item(slot="nested",title="目标", to='/school/mission')
                            mu-icon(slot="left",value="my_location")
                        mu-list-item(slot="nested",title="革新", to='/school/revolution')
                            mu-icon(slot="left",value="extension")
                        mu-list-item(slot="nested",title="学习环境", to='/school/study')
                            mu-icon(slot="left",value="event_seat")
                        mu-list-item(slot="nested",title="居住环境", to='/school/dorm')
                            mu-icon(slot="left",value="nature_people")
                    mu-list-item(title="课程",:toggleNested="true")
                        mu-icon(slot="left",value="school")
                        mu-list-item(slot="nested",title="集训", to='/school/parkathon')
                            mu-icon(slot="left",value="looks_one")
                        mu-list-item(slot="nested",title="两年课程", to='/school/course')
                            mu-icon(slot="left",value="looks_two")
                        mu-list-item(slot="nested",title="项目组", to='/school/team')
                            mu-icon(slot="left",value="looks_3")
                        mu-list-item(slot="nested",title="就业", to='/school/career')
                            mu-icon(slot="left",value="looks_4")
                    mu-list-item(title="项目",:toggleNested="true")
                        mu-icon(slot="left",value="assessment")
                        mu-list-item(slot="nested",title="课程项目", to='/school/project_lecture')
                            mu-icon(slot="left",value="looks_4")
                        mu-list-item(slot="nested",title="商业项目", to='/school/project_bus')
                            mu-icon(slot="left",value="looks_4")
                    mu-list-item(title="报名",:toggleNested="true")
                        mu-icon(slot="left",value="inbox")
                        mu-list-item(slot="nested",title="入学考试", to='/school/entrance')
                            mu-icon(slot="left",value="create")
                        mu-list-item(slot="nested",title="注册", to='/school/register')
                            mu-icon(slot="left",value="account_box")
                    mu-list-item(title="联系我们", href='/#/school/contact')
                        mu-icon(slot="left",value="phone")
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