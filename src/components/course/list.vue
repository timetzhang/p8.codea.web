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
                        mu-raised-button(label='开始课程', :fullWidth='true')
</template>

<script>
export default {
    name: 'course-list',
    data() {
        return {
            items: []
        }
    },
    mounted: function () {
        this.getCourse();
    },
    beforeUpdate: function () {
        this.getCourse();
    },
    methods: {
        getCourse() {
            var _this = this;
            this.dbUrl = this.$config.dbBaseUrl + '/getCourse?type_id=' + this.$route.params.id;
            this.$http({
                url: this.dbUrl,
                method: 'GET'
            }).then(res => {
                if (res.data.length) {
                    _this.items = res.data;
                }
                else {
                    _this.items = [];
                }
            });
            console.log(this.items);
        }
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