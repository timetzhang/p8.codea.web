<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="20")
            mu-paper(height="100")
                mu-list
                    mu-list-item(title="首页")
                        mu-icon(slot="left",value="home",to="/course/home")
                    mu-divider
                    mu-sub-header 软件开发
                    mu-list-item(v-for='item in items_soft', :key='item.id', :title='item.name', :to='"/course/" + item.id')
                        mu-icon(slot="left",value="code")
                    mu-divider
                    mu-sub-header 硬件开发
                    mu-list-item(title='MCU/STM32', to="/course/mcu")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='基础理论', to="/course/hard_basic")
                        mu-icon(slot="left",value="code")
        mu-col(desktop="80")
            router-view
</template>

<script>
export default {
    name: 'school',
    data() {
        return {
            items_soft: [],
            items_hard: []
        }
    },
    mounted: function () {
        this.getCourseType(1);
    },
    methods: {
        getCourseType(id) {
            var _this = this;
            this.dbUrl = this.$config.dbBaseUrl + '/getCourseType?id=' + id;
            this.$http({
                url: this.dbUrl,
                method: 'GET'
            }).then(res => {
                if (res.data.length) {
                    _this.items_soft = res.data;
                }
                else {
                    _this.items_soft = [];
                }
            });
        }
    }
}
</script>

<style>
.mu-card-header {
    font-weight: bold !important;
}

.mu-sub-header {
    font-weight: bold !important;
}

.card {
    margin: 8px 0;
}

.card-text {
    height: 75px;
}

.content {
    padding: 20px;
}
</style>