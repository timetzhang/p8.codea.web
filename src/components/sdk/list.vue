<template lang="jade">
    mu-paper.content
        mu-row(gutter)
            mu-col(desktop='33', tablet='50', width='100', v-for="item in items", key='item.id')
                mu-card.card
                    mu-card-header(:title='item.name')
                    mu-card-media
                        img(:src='item.logo_url')
                    mu-card-text.card-text {{item.brief}}
                    mu-card-actions
                        mu-raised-button(label='开始课程', :fullWidth='true',:to='"/sdk/"+ item.id +"/course"')
</template>

<script>
export default {
    name: 'course-list',
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: '科大讯飞',
                },
                {
                    id: 2,
                    name: '百度语音',
                }

            ]
        }
    },
    mounted: function () {
    },
    beforeUpdate: function () {
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