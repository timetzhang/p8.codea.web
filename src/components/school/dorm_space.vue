<template lang="jade">
    div.padded
        mu-paper
            mu-content-block
                p 我们提供能够很好互动的空间，来吸引更多的像你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花。
                p 空间准则：不用提高声音，就可以同时和7位同学进行交流
                mu-row(gutter)
                    mu-col(width='100', desktop='50',v-for='pic in pics', :key='pic.filename', style='margin-bottom:10px')
                        mu-grid-tile(:rows='2')
                            img(:src='"/static/img/school/"+pic.filename')
                            span(slot="title") {{pic.title}}
                            span(slot="subTitle") {{pic.subTitle}}
                            mu-icon-button(icon="star_border",slot="action")

</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {
            pics: [
                {
                    title: '生活区健身设备', subTitle: '2016-9-3', filename: 'dorm01.jpg'
                },
                {
                    title: '生活区', subTitle: '2016-9-3', filename: 'dorm02.jpg'
                },
                {
                    title: '卫生间', subTitle: '2016-9-3', filename: 'dorm03.jpg'
                },
                {
                    title: '寝室', subTitle: '2016-9-3', filename: 'dorm04.jpg'
                },
                {
                    title: '厨房', subTitle: '2016-9-3', filename: 'dorm05.jpg'
                },
                {
                    title: '咖啡厅', subTitle: '2016-9-3', filename: 'dorm06.jpg'
                }
            ]
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

</style>