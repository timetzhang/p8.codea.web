<template lang="jade">
div.padded
    mu-paper(style='padding:10px 30px; margin-bottom: 15px')
        mu-text-field(label="搜索文档",style='width:100%')
    mu-paper
        mu-list(v-for="item in documents",:key="item.id")
            mu-list-item(:title="item.name+'    '+item.time",:describeText="item.breif",:afterText="'发布者：'+item.student",:href="'/doc/id='+item.id")
                mu-avatar(:icon="item.type",slot="leftAvatar")
                
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
    name: 'doc',
    components: {
        VueEditor
    },
    data() {
        return {
            documents:[
                {
                    id : 0,
                    name : "团队整体介绍资料",
                    time : "2016-6-3",
                    type : "note",
                    student : "秀逗",
                    breif: '这个是关于我们团队的介绍',
                    headimg : "/static/img/team/404.png"
                },
                {
                    id : 1,
                    name : "404项目介绍资料",
                    time : "2016-6-3",
                    type : "note",
                    student : "秀逗",
                    breif: '这个是关于我们团队项目的介绍',
                    headimg : "/static/img/team/404.png"
                },
                {
                    id : 2,
                    name : "团队整体介绍资料",
                    time : "2016-6-3",
                    type : "note",
                    student : "秀逗",
                    breif: '一条简单的介绍',
                    headimg : "/static/img/team/404.png"
                }
            ]
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