<template lang="jade">
    mu-paper.content
        mu-row(gutter)
            mu-sub-header 原生App
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Android')
                    mu-card-media
                        img(src='/static/img/course/android.png')
                    mu-card-text.card-text C语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Swift')
                    mu-card-media
                        img(src='/static/img/course/Swift.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='ObjectiveC')
                    mu-card-media
                        img(src='/static/img/course/ObjectiveC.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-sub-header 跨平台
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Ionic')
                    mu-card-media
                        img(src='/static/img/course/ionic.png')
                    mu-card-text.card-text C语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Cordova')
                    mu-card-media
                        img(src='/static/img/course/Cordova.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Weex')
                    mu-card-media
                        img(src='/static/img/course/weex.png')
                    mu-card-text.card-text JavaScript 是 Web 的编程语言。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
</template>

<script>
export default {
    name: 'course-mobile',
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