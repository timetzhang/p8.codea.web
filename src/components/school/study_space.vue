<template lang="jade">
    div
        mu-paper
            mu-content-block
                .center.aligned
                    h2 学习开放空间
                    h3 Open Space
                    mu-icon(value="bubble_chart", :size='64')
                p 我们提供能够很好互动的空间，来吸引更多的像你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花。
                p 空间准则：不用提高声音，就可以同时和7位同学进行交流
                mu-row(gutter)
                    mu-col(width='100', desktop='50',v-for='pic in pics', :key='pic.filename', style='margin-bottom:10px')
                        mu-grid-tile(rows='2')
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
                    title: '学习空间', subTitle: '2016-9-3', filename: 'study_space01.jpg'
                },
                {
                    title: '学习空间', subTitle: '2016-9-3', filename: 'study_space02.jpg'
                },
                {
                    title: '学习空间', subTitle: '2016-9-3', filename: 'study_space03.jpg'
                },
                {
                    title: '学习空间', subTitle: '2016-9-3', filename: 'study_space04.jpg'
                },
                {
                    title: '学习空间', subTitle: '2016-9-3', filename: 'study_space05.jpg'
                },
                {
                    title: '学习空间', subTitle: '2016-9-3', filename: 'study_space06.jpg'
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