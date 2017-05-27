<template lang="jade">
    div
        mu-paper
            mu-content-block.level
                p.center.aligned(style='padding:40px 0') 
                    span.label Lv.
                    span.num {{level}}
                mu-divider
                mu-list(style='overflow: hidden;')
                    mu-list-item(:disableRipple='true',title="总经验值")
                        i.icon.user.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="10",color="red", mode="determinate", :value='50', style='margin-top:10px')
                        p.right.aligned (50/100)
                    mu-list-item(:disableRipple='true',title="前端能力")
                        i.icon.desktop.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="10",color="red", mode="determinate", :value='12', style='margin-top:10px')
                        p.right.aligned 12
                    mu-list-item(:disableRipple='true',title="服务器端能力")
                        i.icon.server.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="10",color="red", mode="determinate", :value='23', style='margin-top:10px')
                        p.right.aligned 23
                    mu-list-item(:disableRipple='true',title="数据库能力")
                        i.icon.database.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="10",color="red", mode="determinate", :value='11', style='margin-top:10px')
                        p.right.aligned 11
                    mu-list-item(:disableRipple='true',title="数据分析能力")
                        i.icon.pie.chart.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="10",color="red", mode="determinate", :value='52', style='margin-top:10px')
                        p.right.aligned 52
                    mu-list-item(:disableRipple='true',title="移动端能力")
                        i.icon.mobile.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="10",color="red", mode="determinate", :value='98', style='margin-top:10px')
                        p.right.aligned 98
                    mu-list-item(:disableRipple='true',title="图形开发能力")
                        i.icon.image.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="10",color="red", mode="determinate", :value='11', style='margin-top:10px')
                        p.right.aligned 11
</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {
            level: 1
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    methods: {

    }
}
</script>

<style scoped>
.level .label {
    font-size: 18px;
    color: #aaa;
}

.level .num {
    font-size: 30px;
    font-weight: bold;
}
</style>
