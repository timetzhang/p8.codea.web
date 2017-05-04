<template lang="jade">
    mu-paper.content
        mu-row(gutter)
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Cocos2D')
                    mu-card-media
                        img(src='/static/img/course/Cocos2D.png')
                    mu-card-text.card-text C语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Unity3D')
                    mu-card-media
                        img(src='/static/img/course/Unity3D.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='DirectX')
                    mu-card-media
                        img(src='/static/img/course/DirectX.png')
                    mu-card-text.card-text 使用CSS控制多重网页的样式和布局。
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
</template>

<script>
export default {
    name: 'course-graphics',
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