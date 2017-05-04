<template lang="jade">
    mu-paper.content
        mu-row(gutter)
            mu-col(desktop='33', tablet='50', width='100')
                mu-card.card
                    mu-card-header(title='Linux')
                    mu-card-media
                        img(src='/static/img/course/linux.png')
                    mu-card-text.card-text C语言
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true')
</template>

<script>
export default {
    name: 'course-os',
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