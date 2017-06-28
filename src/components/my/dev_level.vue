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
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='exp', style='margin-top:10px')
                        p.right.aligned ({{exp}}/100)
                    mu-list-item(:disableRipple='true',title="前端能力")
                        i.icon.desktop.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='web', style='margin-top:10px')
                        p.right.aligned {{web}}
                    mu-list-item(:disableRipple='true',title="服务器端能力")
                        i.icon.server.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='server', style='margin-top:10px')
                        p.right.aligned {{server}}
                    mu-list-item(:disableRipple='true',title="数据库能力")
                        i.icon.database.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='database', style='margin-top:10px')
                        p.right.aligned {{database}}
                    mu-list-item(:disableRipple='true',title="数据分析能力")
                        i.icon.pie.chart.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='data_analyse', style='margin-top:10px')
                        p.right.aligned {{data_analyse}}
                    mu-list-item(:disableRipple='true',title="移动端能力")
                        i.icon.mobile.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='mobile', style='margin-top:10px')
                        p.right.aligned {{mobile}}
                    mu-list-item(:disableRipple='true',title="图形开发能力")
                        i.icon.image.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='cg', style='margin-top:10px')
                        p.right.aligned {{cg}}
                     mu-list-item(:disableRipple='true',title="算法")
                        i.icon.percent.big(slot='left', style='margin-top:30px')
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='algorithm', style='margin-top:10px')
                        p.right.aligned {{algorithm}}
</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {
            level: 1,
            exp: 0,
            web: 0,
            server: 0,
            database: 0,
            data_analyse: 0,
            mobile: 0,
            cg: 0,
            algorithm: 0
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
