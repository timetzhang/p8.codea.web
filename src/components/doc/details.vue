<template lang="jade">
div.padded
    mu-paper(style="padding:10px")
        mu-content-block.para
            div.center.aligned(gutter)
                mu-raised-button(label="前往文档中心",href="/doc",style="float:left")
                br
                h1 {{document.name}}
                span {{document.student_name}} 建立于 {{document.time}}
            p(v-html="document.details")
</template>

<script>
import DateTime from '@/common/datetime'

export default {
    name: 'details',
    data() {
        return {
            document:{}
        }
    },
    mounted: function () {
        this.loadDocument();
    },
    methods: {
        loadDocument(){
            var _this = this;
            this.$db.getDocumentDetails(this,{id: this.$route.params.id}).then(res=>{
                _this.document = res[0];
                _this.document.time = DateTime.dateFormat(_this.document.time);
            });
        }
    }
}
</script>

<style scoped>

</style>