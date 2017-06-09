<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop='33', tablet='50', width='100', v-for="item in items", key='item.id')
                mu-card.card
                    mu-card-header {{item.name}} 
                    mu-card-media
                        img(:src='item.logo_url')
                    mu-card-text.card-text {{item.brief}}
                    mu-card-actions
                        mu-raised-button(label='查看详情', :fullWidth='true',:to='"/sdk/id="+ item.id')
        div.center.aligned(v-if="showNone") 还没有相关SDK项目
</template>

<script>
export default {
    name: 'sdk',
    data() {
        return {
            items: [],
            showNone: false
        }
    },
    mounted: function () {
        this.loadSDK();
    },
    methods: {
        loadSDK() {
            var _this = this;
            this.$db.getSDK(this, { type_id: this.$route.params.type_id }).then(res => {
                _this.items = res;
                _this.showNone = (_this.items.length <= 0);
            });
        }
    }
}
</script>

<style scoped>
.card {
    margin: 8px 0;
}

.card-text {
    height: 75px;
}
</style>