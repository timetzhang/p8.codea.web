<template lang="jade">
    div
        mu-paper.center.aligned
            img(src="/static/img/home/home.png",style="padding: 60px 20px; width:100%;")
            mu-row
                mu-col(desktop="33")
                    mu-raised-button(label="Primary",backgroundColor="grey700",:fullWidth="true")
                mu-col(desktop="33")
                    mu-raised-button(label="Primary",backgroundColor="grey600",:fullWidth="true")
                mu-col(desktop="33")
                    mu-raised-button(label="Primary",backgroundColor="grey500",:fullWidth="true")
            div(style="padding: 80px 0")
                mu-icon(value="people",:size="50")
                div Co-Learning
                div.huge.title(style="margin-top:40px") 没有老师 没有教室
                p 我们的核心是Co-Learning，大家聚在一起学习与交流. 可以通过网络获取知识，解决知识更新过快的问题
                p
                    a.red(href="/#/school/revolution") 查看我们的教学模式
                p
                    mu-raised-button(label="注册成我们的学生",secondary,style="margin-top:40px")
            hr
            mu-row
                mu-col.right.aligned(desktop="50", style="padding:30px")
                    h1 教和学是一体的
                    p 老师就是你身边的任何一个人
                    p 他可以是学校聘任的编程大师，也可以是刚入学的同学
                    p 也不要吝啬你的知识，分享给你身边的人
                    p 求知若饥 虚心若愚
                mu-col.left.aligned(desktop="50")
                    img(src="/static/img/home/teach_learn.png")
            hr
            mu-row
                mu-col.right.aligned(desktop="50")
                    img(src="/static/img/home/rhythm.png")
                mu-col.left.aligned(desktop="50", style="padding:30px")
                    h1 自己的节奏
                    p 如果所有人都要用同样的时间，学同一样的东西，这会合理吗？
                    p 你将按照自己的节奏学习
                    p 你生来就不一样，不需要同进退
            hr
            div(style="padding: 80px 0")
                mu-icon(value="group_work",:size="50")
                div Group-Work
                div.huge.title(style="margin-top:40px") 没有课程 只有项目
                p 了解项目需求后便开始与团队合作
                p 你可以选择项目中感兴趣的部分：UI设计或者数据库管理
                p 你完成的项目越多，级别越高，每到达7级或7的倍数时，可进入实习与培训项目
                p 每个人完成的培训都不同
                p
                    mu-raised-button(label="尝试一下入学考试",secondary,style="margin-top:40px")
                mu-row
                    mu-col.right.aligned(desktop="50")
                        img(src="/static/img/home/rhythm.png")
                    mu-col.left.aligned(desktop="50", style="padding:30px")
                        h1 自己的节奏
                        p 如果所有人都要用同样的时间，学同一样的东西，这会合理吗？
                        p 你将按照自己的节奏学习
                        p 你生来就不一样，不需要同进退`
            hr
</template>

<script>
export default {
    name: 'school-home',
    data() {
        return {

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