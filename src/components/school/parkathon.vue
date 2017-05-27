<template lang="jade">
    div.padded
        mu-paper
            mu-content-block.para
                h3 天空大本营之 Park-a-thon™ 黑客营
                p 通过在线测试后，你将获得2-4周的 Park-a-thon™ 的参与资格。这将是你开始 P8 CodeA 学院生活的第一个亮点
                p
                p.center.aligned
                    mu-flat-button(label='点击此处注册报名',to='/school/register', style='color:red!important')
                p.center.aligned - OR -
                p.center.aligned
                    mu-flat-button(label='已经注册？还没有通过在线测试？点击此处。',to='/school/entrance', style='color:red!important')
                mu-grid-tile(rows='2')
                    img(src="/static/img/school/parkathon01.jpg")
                    span(slot="title") 啪客松集训营场地
                p
                mu-divider
                h3 你的第一行代码
                p 我们只要求你知道如何使用鼠标和键盘，哪怕你以前没有任何的编程经验，我们将从基础知识开始，教你使用计算机来编写程序。
                p 你将在金字塔里，写出你的第一行代码
                br
                p.center.aligned
                    mu-raised-button(label='JS', secondary)
                p.center.aligned
                    mu-raised-button(label='C', secondary)
                p.center.aligned
                    mu-raised-button(label='Python', secondary)
                br
                br
                mu-grid-tile(rows='2')
                    img(src="/static/img/school/parkathon02.jpg")
                    span(slot="title") 某次 Park-a-thon 现场
                p
                mu-divider
                h3 你的第一个项目原型
                p 集训的第一天，依据你感兴趣的方向，将与你的同学或老师来组成项目小组，并开始设计项目原型。
                p
                mu-divider
                h3 P8 社区生活
                p 在这2-4周的生活里，你会体验到P8社区生活的方方面面，也会与P8内各样拥有不同技能的，有趣的人成为朋友。
                p 晚餐后与瑜伽老师一起来一次烛光冥想，与大家一起做一次素食派对与美食分享，或者来一次晨行中的野生程序员体验。通过Open Space来创作你的第一个APP原型或机器人原型，通过Scrum来推进原型制作。
                p 每个夜晚的小型‘谈天说地’，或者来次你的个人音乐会。
                p
                mu-divider
                h3 我们在金字塔等你
                p 通过 Park-a-thon™ 黑客营, 你将决定继续或者放弃挑战成为 P8 CodeA 的成员
                p
                mu-grid-tile(rows='2')
                    img(src="/static/img/school/parkathon03.jpg")
                    span(slot="title") 某次 Park-a-thon 现场
                p
                mu-divider
                h3 报名规则
                p 你必须完全献身于 P8 CodeA，你需要准备一个完整的时间段参与到集训的课程中，如果有缺席的课程，需要用课外的时间赶上。
                p 每年会有四次 Park-a-thon™ 的申请机会，如果你选择的时间人数已经饱和，你将会被放到下次课程的候选名单内，当一个位置被空出来，你才能进入该月的 Park-a-thon。
                p.center.aligned
                    mu-flat-button(label='点击此处注册报名',to='/school/register', style='color:red!important')
                mu-divider
                h3 住宿
                p 为了更好的参与 Park-a-thon™ 黑客营，更大程度得与和你同期学习的学员建立友好的关系，在位于学院附近的K7社区，我们也提供可供1-2人共住的青年居住空间，配套齐全的生活用品（床垫、被单、衣柜……），节省你往来交通的时间。
                p.center.aligned
                    mu-flat-button(label='查看居住环境',to='/school/dorm_space', style='color:red!important')
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

</style>