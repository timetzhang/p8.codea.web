<template lang="jade">
    mu-row(gutter)
        mu-col(:desktop="15")
            mu-paper(height="100")
                mu-list
                    mu-list-item(title="首页")
                        mu-icon(slot="left",value="home",href="/#/home")
                    mu-list-item(v-for="item in classify",:title="item.title",:toggleNested="true",:key="item")
                        mu-icon(slot="left",value="dns")
                        mu-list-item(v-for="list in item.list",slot="nested",:title="list",:key="list",value="list",href="/#/sdk/list" )
                            mu-icon(slot="left")
        mu-col(:desktop="85")
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
            classify : [
                {
                    title : '语音控制',
                    list : ['科大讯飞','百度语音'],
                },
                {
                    title : '语音控制',
                    list : ['科大讯飞','百度语音'],
                },
                {
                    title : '语音控制',
                    list : ['科大讯飞','百度语音'],
                }
            ],
            
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