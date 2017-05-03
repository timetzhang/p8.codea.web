<template lang="jade">
    mu-row(gutter)
        mu-col(:desktop="15")
            mu-paper(height="100")
                mu-list
                    mu-list-item(title="首页")
                        mu-icon(slot="left",value="home",href="/#/home")
                    mu-list-item(title="学校",:toggleNested="true")
                        mu-icon(slot="left",value="dns")
                        mu-list-item(slot="nested",title="愿景")
                            mu-icon(slot="left",value="grade")
                        mu-list-item(slot="nested",title="目标")
                            mu-icon(slot="left",value="my_location")
                        mu-list-item(slot="nested",title="革新")
                            mu-icon(slot="left",value="extension")
                        mu-list-item(slot="nested",title="学习环境")
                            mu-icon(slot="left",value="event_seat")
                        mu-list-item(slot="nested",title="居住环境")
                            mu-icon(slot="left",value="nature_people")
                    mu-list-item(title="课程",:toggleNested="true")
                        mu-icon(slot="left",value="school")
                        mu-list-item(slot="nested",title="集训")
                            mu-icon(slot="left",value="looks_one")
                        mu-list-item(slot="nested",title="两年课程")
                            mu-icon(slot="left",value="looks_two")
                        mu-list-item(slot="nested",title="项目组")
                            mu-icon(slot="left",value="looks_3")
                        mu-list-item(slot="nested",title="就业")
                            mu-icon(slot="left",value="looks_4")
                    mu-list-item(title="项目",:toggleNested="true")
                        mu-icon(slot="left",value="assessment")
                        mu-list-item(slot="nested",title="课程项目")
                            mu-icon(slot="left",value="looks_4")
                        mu-list-item(slot="nested",title="商业项目")
                            mu-icon(slot="left",value="looks_4")
                    mu-list-item(title="报名",:toggleNested="true")
                        mu-icon(slot="left",value="inbox")
                        mu-list-item(slot="nested",title="入学考试")
                            mu-icon(slot="left",value="create")
                        mu-list-item(slot="nested",title="注册")
                            mu-icon(slot="left",value="account_box")
                    mu-list-item(title="联系我们")
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