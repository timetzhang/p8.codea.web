<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="15")
            mu-paper(height="100")
                mu-list
                    mu-list-item(title="首页")
                        mu-icon(slot="left",value="home",href="/#/home")
                    mu-list-item(title='语音',:toggleNested="true")
                        mu-icon(slot="left",value="dns")
                        mu-list-item(slot="nested",title="HTML")
                        mu-list-item(slot="nested",title="HTML5")
                        mu-list-item(slot="nested",title="CSS")
                        mu-list-item(slot="nested",title="CSS3")
                        mu-list-item(slot="nested",title="Bootstrap")
                        mu-list-item(slot="nested",title="Semantic")
                    mu-list-item(title='Javascript',:toggleNested="true")
                        mu-icon(slot="left",value="dns")
                        mu-list-item(slot="nested",title="JS")
                        mu-list-item(slot="nested",title="HTML DOM")
                        mu-list-item(slot="nested",title="jQuery")
        mu-col(desktop="85")
            mu-paper(style='padding:10px 30px')
                mu-text-field(label="搜索SDK",style='width:100%', icon='search')
            br
            router-view
</template>

<script>
export default {
    name: 'sdk',
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