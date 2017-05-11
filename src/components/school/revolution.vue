<template lang="jade">
    div
        mu-paper.page.title
            mu-content-block
                mu-flat-button(label="Revolution 革新",class="demo-flat-button",icon="dashboard",primary,style='font-weight:bold')
        mu-paper.para
            mu-content-block
                .center.aligned
                    h1 合作学习
                    h3 Co-Learning
                    mu-icon(value="bubble_chart", :size='64')
                p 我们的核心是Co-Learning，大家聚在一起学习与交流. 可以通过网络获取知识，解决知识更新过快的问题
                p 学生之间相互合作，互相学习，能培育出最具创新能力和学习能力的计算机专业人才。
                p 他们工作热情主动，他们有最好的学习能力，面临新的障碍有解决方案。
                mu-divider
                .center.aligned
                    h1 教和学是一体的
                    h3 New Way to Teach
                    mu-icon(value="cloud", :size='64')
                p 老师就是你身边的任何一个人,他可以是学校聘任的编程大师，也可以是刚入学的同学
                p 也不要吝啬你的知识，分享给你身边的人
                p 求知若饥 虚心若愚
                mu-divider
                .center.aligned
                    h1 团队协作 项目主导
                    h3 Group Work
                    mu-icon(value="group_work", :size='64')
                p 入学后不久，就开始加入项目组，了解项目需求后便开始与团队合作
                p 你可以选择项目中感兴趣的部分：UI设计或者数据库管理
                p 你完成的项目越多，级别越高，每到达7级或7的倍数时，可进入实习与培训项目
                p 每个人完成的培训都不同
                mu-divider
                .center.aligned
                    h1 根据学生自己的节奏前进
                    h3 Tempo
                    mu-icon(value="show_chart", :size='64')
                p 每个学生都有自己的节奏，每个学生都按照自己的节奏前进。在CodeA，每个人都是一个独特的个体，都根据自己学习的进展，根据自己的私人化课程来学习。

</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {

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
.content {
    padding: 20px;
}
</style>