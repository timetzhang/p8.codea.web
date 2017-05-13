<template lang="jade">
    div.padded
        mu-paper
            mu-content-block.para
                h3 金字塔 Park-a-thon™ 啪客松集训
                p 通过在线测试后，你将获得4周的 金字塔 Park-a-thon™ 集训的参与资格。这将是你开始 P8 CodeA 学院生活的第一个亮点
                p.center.aligned
                    mu-flat-button(label='还没有通过在线测试？点击此处。',to='/school/entrance', style='color:red!important')
                mu-grid-tile(rows='2')
                    img(src="/static/img/school/parkathon01.jpg")
                    span(slot="title") 啪客松集训营场地
                p
        p
        mu-paper
            mu-content-block.para
                h3 你的第一行代码
                p 我们只要求你知道如何使用鼠标和键盘，哪怕你以前没有任何的编程经验，我们将从基础知识开始，教你使用计算机来编写程序。
                p 你将在金字塔里，写出你的第一行代码
                br
                p.center.aligned
                    mu-raised-button(label='Javascript', secondary)
                    &nbsp; &nbsp; OR &nbsp; &nbsp;
                    mu-raised-button(label='C', secondary)
                    &nbsp; &nbsp; OR &nbsp;
                    mu-raised-button(label='C#', secondary)
                br
                br
                mu-grid-tile(rows='2')
                    img(src="/static/img/school/parkathon02.jpg")
                    span(slot="title") 某次啪客松集训营现场
                p
        p
        mu-paper
            mu-content-block.para
                h3 你的第一个项目原型
                p 集训的第一天，依据你感兴趣的方向，将与你的同学或老师来组成项目小组，并开始设计项目原型。
                p
        p
        mu-paper
            mu-content-block.para
                h3 我们在金字塔等你
                p 通过 Pyramid Park-a-thon 集训营, 你将决定继续或者放弃挑战成为 P8 CodeA 的成员
                p
                mu-grid-tile(rows='2')
                    img(src="/static/img/school/parkathon03.jpg")
                    span(slot="title") 某次啪客松集训营现场
                p
        p
        mu-paper
            mu-content-block.para
                h3 报名规则
                p 你必须完全献身于 P8 CodeA，你需要准备一个完整的时间段参与到集训的课程中，如果有缺席的课程，需要用课外的时间赶上。
                p 每年会有四次Pyramid Park-a-thon的申请机会，如果你选择的时间人数已经饱和，你将会被放到下次课程的候选名单内，当一个位置被空出来，你才能进入该月的Pyramid Park-a-thon。
                p.center.aligned
                    mu-flat-button(label='点击此处注册报名',to='/school/register', style='color:red!important')
        p
        mu-paper
            mu-content-block.para
                h3 住宿
                p 为了更好的参与 Pyramid Park-a-thon 集训营，更大程度得与和你同期学习的学员建立友好的关系，在位于学院附近的K7社区，我们也提供可供1-2人共住的青年居住空间，配套齐全的生活用品（床垫、被单、衣柜……），节省你往来交通的时间。
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