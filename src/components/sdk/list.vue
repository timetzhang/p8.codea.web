<template lang="jade">
    mu-row(gutter)
        mu-col(desktop='33', tablet='50', width='100', v-for="item in items", key='item.id')
            mu-card.card
                mu-card-header(:title='item.item')
                mu-card-media
                    img(:src='item.logoUrl')
                mu-card-text.card-text {{item.detail}}
                mu-card-actions
                    mu-raised-button(label='开始课程', :fullWidth='true',:to='"/sdk/"+ item.id +"/course"')
</template>

<script>
export default {
    name: 'sdk',
    data() {
        return {
            items: [
                {
                    title : "聚合数据",
                    logoUrl : "../../../static/img/sdk/juhe.jpg",
                    detail : "聚合数据免费向开发者提供基站数据，移动联通基站、电信基站，覆盖国内外1000多个主要城市公..."
                },
                {
                    title : "又拍云",
                    logoUrl : "../../../static/img/sdk/upgun.jpg",
                    detail : "又拍云是一家云 CDN 服务商，为用户提供动、静态文件的一站式CDN 加速、云存储、云处理..."
                },
                {
                    title : "亚马逊AWS",
                    logoUrl : "../../../static/img/sdk/aws.jpg",
                    detail : "亚马逊提供的专业云计算服务。提供服务包括：亚马逊弹性计算网云（Amazon EC2）、亚马..."
                },
                {
                    title : "星云测试",
                    logoUrl : "../../../static/img/sdk/star.jpg",
                    detail : "星云测试旗下的系列数字化测试产品与服务，为开发者提供一个非常专业化的软件测试平台， 与心怀..."
                },
                {
                    title : "Data.qov",
                    logoUrl : "../../../static/img/sdk/dataQov.jpg",
                    detail : "Data.gov是美国政府官方建立了一个开放的数据平台，包含了NASA、农业、商业、气候..."
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