<template lang="jade">
div.padded
    mu-paper
        mu-content-block.para
            h2 合作学习
            p 我们的核心是Co-Learning，大家聚在一起学习与交流. 在自我探索和与群体分享的过程中，获取全面、最新的知识，解决知识更新过快的问题。
            p 学生之间相互合作，互相学习，能培育出最具创新能力和学习能力的计算机专业人才。
            p 他们工作热情主动，他们有最好的学习能力，面临新的障碍有解决方案。
            p
            mu-divider
            h2 基于项目的实战教学模式 - 团队协作 项目主导
            p 一旦进入学校，便开始了项目合作。你可以选择项目中感兴趣的部分，所有获取的知识都来自于实际的项目。
            p CodeA会为你提供可选择的项目，了解项目需求后，你可以自行组建自己的项目组，你可以选择UI设计，逻辑开发或者数据库管理等。你完成的项目越多，级别越高，每到达7级或7的倍数时，可进入实习与商业项目开发组。
            p 在CodeA，每个人都是一个独特的个体，都根据自己学习的进展，根据自己的私人化课程来学习。
            p 
            mu-divider
            h2 教和学是一体的
            p 老师就是你身边的任何一个人,他可以是学校聘任的编程大师，也可以是刚入学的同学。同时，你也会成为其他人的老师，也不要吝啬你的知识，分享给你身边的人
            p 求知若饥 虚心若愚
            mu-row(gutter)
                mu-col(width='50', desktop='50',style='margin-bottom:10px')
                    mu-grid-tile(rows='2')
                        img(src="/static/img/school/revolution01.jpg")
                        span(slot="title") Scrum
                mu-col(width='50', desktop='50',style='margin-bottom:10px')
                    mu-grid-tile(rows='2')
                        img(src="/static/img/school/revolution02.jpg")
                        span(slot="title") 404 项目组
            p
            mu-divider
            h2 按照你自己的节奏
            p 如果能用一天的时间学习完课表上五天的内容，为什么不呢？在大多数学校里，所有人都要用同样的时间，学同一样的东西，但在CodeA，你可以自由地按照自己的节奏学习。
            p 你生来就不一样，不需要同进退
            p
            mu-divider
            h2 开放空间
            p 我们提供能够很好互动的空间，来吸引更多的像你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花。
            p 空间准则：不用提高声音，就可以同时和7位同学进行交流
            mu-row(gutter)
                mu-col(width='50', desktop='50',style='margin-bottom:10px')
                    mu-grid-tile(rows='2')
                        img(src="/static/img/school/revolution03.jpg")
                        span(slot="title") 6楼开放空间某处
                mu-col(width='50', desktop='50',style='margin-bottom:10px')
                    mu-grid-tile(rows='2')
                        img(src="/static/img/school/revolution04.jpg")
                        span(slot="title") 6楼开放空间某处
            p
            mu-divider
            h2 激情 多元创作 
            p 在CodeA，你可能还会学习创作音乐和画作，并与你的同伴一起参与户外运动。创造总是充满着激情。
            p 睡觉和休闲的地方就在工作空间旁，如果一天需要学习15个小时，就可以节省跑来跑去的时间。
            p
            mu-divider
            h2 自我管理系统
            p 从课程到教务，学校用最好的学生帮助内部运转。因为你---程序员，是一个聪明而不听话的人。没有任何教条来框住你。
            p
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