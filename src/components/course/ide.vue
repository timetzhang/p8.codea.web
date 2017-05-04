<template lang="jade">
    mu-paper.content
        mu-row(gutter)
            mu-sub-header 开发环境
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='VSCode')
                    mu-card-media
                        img(src='/static/img/course/vscode.png')
                    mu-card-text.card-text C语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Visual Studio')
                    mu-card-media
                        img(src='/static/img/course/vs.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Sublime Text')
                    mu-card-media
                        img(src='/static/img/course/SublimeText.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='WebStorm')
                    mu-card-media
                        img(src='/static/img/course/WebStorm.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Eclipse')
                    mu-card-media
                        img(src='/static/img/course/Eclipse.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Firebug')
                    mu-card-media
                        img(src='/static/img/course/Firebug.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-sub-header 工具
            mu-divider
            br
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-media
                        img(src='/static/img/course/git.png')
                    mu-card-title(title='Git')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
</template>

<script>
export default {
    name: 'course-ide',
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