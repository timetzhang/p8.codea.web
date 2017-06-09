<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="50", width="100",style='padding: 0 20px;', v-for='subject in data',:key="subject.name")  
            h3 {{subject.name}}
            mu-menu
                mu-menu-item(v-for="type in subject.type",:title="type.name",:to='"/sdk/type_id="+type.id',:key="type.id")
</template>

<script>
export default {
    name: 'sdk',
    data() {
        return {
            data: [{ name: '应用和数据', type: [] }, { name: 'DevOps', type: [] }, { name: '实用工具', type: [] }, { name: '商业工具', type: [] }]
        }
    },
    mounted: function () {
        this.loadType();
    },
    methods: {
        loadType() {
            var _this = this;
            this.$db.getSDKType(this, { subject_id: 1 }).then(res => {
                _this.data[0].type = res;
            });
            this.$db.getSDKType(this, { subject_id: 2 }).then(res => {
                _this.data[1].type = res;
            });
            this.$db.getSDKType(this, { subject_id: 3 }).then(res => {
                _this.data[2].type = res;
            });
            this.$db.getSDKType(this, { subject_id: 4 }).then(res => {
                _this.data[3].type = res;
            });
        }
    }
}
</script>

<style scoped>

</style>