<template lang="jade">
    div
        mu-paper(style='padding:10px 30px; margin-bottom: 15px;')
            div.center.aligned
                h1 css文档
            mu-card(v-for="item in items",:key="item.id")
                mu-card-header(:title="item.name")
                    mu-row
                        mu-col.center.aligned(desktop="25",v-for="list in item.docs",:key="list.id")
                            a(:href="'/doc/id='+list.id") {{list.name}} 
</template>

<script>
export default {
    name: 'sdk',
    data() {
        return {
            items:[
                {
                    id:0,
                    name:'CSS基础文档',
                    docs:[
                        {
                            id:0,
                            name:'css参考手册',
                        },
                        {
                            id:1,
                            name:'css选择器',
                        },
                        {
                            id:2,
                            name:'css语音参考',
                        },
                        {
                            id:3,
                            name:'css动画',
                        }
                    ],
                },
                {
                    id:1,
                    name:'CSS进阶手册之Sass',
                    docs:[
                        {
                            id:0,
                            name:'Sass基础用法'
                        },
                        {
                            id:1,
                            name:'Sass高级用法'
                        }
                    ]
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
.card {
    margin: 8px 0;
}

.card-text {
    height: 75px;
}
</style>