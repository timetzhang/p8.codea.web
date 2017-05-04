<template lang="jade">
    mu-row(gutter)
        mu-col(:desktop="20")
            mu-paper(height="100")
                mu-list
                    mu-list-item(title="首页")
                        mu-icon(slot="left",value="home",href="/#/home")
                    mu-divider
                    mu-list-item(v-for="(item,index) in classify",:title="item",:key="item.id",:to='"/sdk/" + index')
                        mu-icon(slot="left",value="list")
        mu-col(:desktop="80")
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
            classify: ["语音控制", "通讯协议", "数据解析"],
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