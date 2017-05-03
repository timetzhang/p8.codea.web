<template lang="jade">
    mu-paper.content
        mu-row(gutter)
            mu-sub-header 前端基础
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='HTML')
                        img(src='/static/img/course/h5.png')
                    mu-card-text.card-text HTML, 超文本标记语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='CSS 3')
                        img(src='/static/img/course/css3.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='JavaScript')
                        img(src='/static/img/course/js.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='HTML DOM')
                        img(src='/static/img/course/html_dom.png')
                    mu-card-text.card-text Document Object Model(文档对象模型)
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='HTML Canvas')
                        img(src='/static/img/course/html_canvas.png')
                    mu-card-text.card-text Canvas 元素用于在网页上绘制图形
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='AJAX')
                        img(src='/static/img/course/ajax.png')
                    mu-card-text.card-text 异步的 JavaScript 和 XML
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-sub-header MVC / MVVM
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='Vue.js')
                        img(src='/static/img/course/vue.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='Angular')
                        img(src='/static/img/course/angular.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='React')
                        img(src='/static/img/course/react.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-sub-header UI 框架
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='Bootstrap')
                        img(src='/static/img/course/bootstrap.png')
                    mu-card-text.card-text HTML, 超文本标记语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='Foundation')
                        img(src='/static/img/course/foundation.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='Semantic')
                        img(src='/static/img/course/semantic.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-sub-header jQuery
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='jQuery')
                        img(src='/static/img/course/jquery.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='jQuery UI')
                        img(src='/static/img/course/jqueryui.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media(title='jQuery Mobile')
                        img(src='/static/img/course/jquerymobile.png')
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
    .content{
        padding:20px;
    }

.card{
    margin: 8px 0;
}

    .card-text{
        height: 75px;
    }
</style>