<template lang="jade">
    mu-paper.content
        mu-row(gutter)
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='C')
                    mu-card-media
                        img(src='/static/img/course/c.png')
                    mu-card-text.card-text C语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='C++')
                    mu-card-media
                        img(src='/static/img/course/cpp.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Python')
                    mu-card-media
                        img(src='/static/img/course/python.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Java')
                    mu-card-media
                        img(src='/static/img/course/java.png')
                    mu-card-text.card-text Document Object Model(文档对象模型)
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='C#')
                    mu-card-media
                        img(src='/static/img/course/csharp.png')
                    mu-card-text.card-text Canvas 元素用于在网页上绘制图形
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Node.js')
                    mu-card-media
                        img(src='/static/img/course/nodejs.png')
                    mu-card-text.card-text 异步的 JavaScript 和 XML
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Go')
                    mu-card-media
                        img(src='/static/img/course/go.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Ruby')
                    mu-card-media
                        img(src='/static/img/course/ruby.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Lua')
                    mu-card-media
                        img(src='/static/img/course/lua.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Servlet')
                    mu-card-media
                        img(src='/static/img/course/servlet.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Powershell')
                    mu-card-media
                        img(src='/static/img/course/powershell.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Matlab')
                    mu-card-media
                        img(src='/static/img/course/matlab.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Scala')
                    mu-card-media
                        img(src='/static/img/course/scala.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
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
.content {
    padding: 20px;
}

.card {
    margin: 8px 0;
}

.card-text {
    height: 75px;
}
</style>