<template lang="jade">
    div.padded
        mu-paper
            mu-content-block.para
                h2 Geek文化
                p 你所处的P8就是一个Geek文化的中心，你在这会成为一个程序员，同时也会是个艺术家，或许是个音乐家，画家，建筑师。
                p 这些，只会让你成为一个更加优秀的程序员，学习更多的知识，是为了更好的体验世界的精彩。
                mu-row(gutter)
                    mu-col(width='100', desktop='50',v-for='pic in pics', :key='pic.filename', style='margin-bottom:10px')
                        mu-grid-tile(rows='2')
                            img(:src='"/static/img/school/"+pic.filename')
                            span(slot="title") {{pic.title}}
                            span(slot="subTitle") {{pic.subTitle}}
                            mu-icon-button(icon="star_border",slot="action")
        p
        mu-paper
            mu-content-block.para
                h2 好的程序员标准是什么？
                p 通常，程序员的学习需要很快地适应快速变化的世界，因为编程语言过三个月就会变，那些学习能力强，适应能力强，团队合作力强的人将会存活。
                p 而你，将会拥有这些

</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {
            pics: [
                {
                    title: '搭建穹顶帐篷', subTitle: '2016-9-3', filename: 'geek01.jpg'
                },
                {
                    title: '音乐演出', subTitle: '2016-9-3', filename: 'geek02.jpg'
                },
                {
                    title: '木工坊工具', subTitle: '2016-9-3', filename: 'geek03.jpg'
                },
                {
                    title: '雅典学院前的音乐表演', subTitle: '2016-9-3', filename: 'geek04.jpg'
                },
                {
                    title: '硬件工作室', subTitle: '2016-9-3', filename: 'geek05.jpg'
                },
                {
                    title: '木工坊', subTitle: '2016-9-3', filename: 'geek06.jpg'
                },
                {
                    title: '设计', subTitle: '2016-9-3', filename: 'geek07.jpg'
                },
                {
                    title: '音乐工作室', subTitle: '2016-9-3', filename: 'geek08.jpg'
                },
                {
                    title: '机器人大赛', subTitle: '2016-9-3', filename: 'geek09.jpg'
                }
            ]
        }
    },
    mounted: function () {
        //Init Pics names
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    methods: {

    }
}
</script>

<style scoped>
.content {
    padding: 20px;
}
</style>