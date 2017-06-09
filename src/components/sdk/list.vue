<template lang="jade">
    mu-row(gutter)
        mu-col(desktop='33', tablet='50', width='100', v-for="item in items", key='item.id')
            mu-card.card
                mu-card-header {{item.name}} 
                mu-card-media
                    img(:src='item.logo_url')
                mu-card-text.card-text {{item.brief}}
                mu-card-actions
                    mu-raised-button(label='开始课程', :fullWidth='true',:to='"/sdk/id="+ item.id')
</template>

<script>
export default {
    name: 'sdk',
    data() {
        return {
            items: []
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