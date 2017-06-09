<template lang="jade">
    div
        mu-row
            mu-col.center.aligned(desktop="25",table="50",width="100")
                mu-paper.sdkimg(:z-Depth="5")
                    img(:src="item.logo_url")
            mu-col(desktop="75",table="50",width="100",style="padding-left:10px;")
                h2(style="margin-top:0;") {{item.name}}
                p {{item.brief}}
            div
                mu-chip(v-for='tag in tags', :key='tag') {{tag}}
        br
        mu-divider
        h2 官方入口
        a(:href="item.official_website", target='_blank') {{item.official_website}}
        p
        mu-divider
        p(v-html='item.details')




</template>

<script>
export default {
    name: 'course',
    data() {
        return {
            item: {},
            tags: []
        }
    },
    mounted: function () {
        this.loadSDKDetails();
    },
    methods: {
        loadSDKDetails() {
            var _this = this;
            this.$db.getSDKDetails(this, { id: this.$route.params.id }).then(res => {
                _this.item = res[0];
                _this.tags = res[0].tags.split(',');
            });
        }
    }
}
</script>

<style scoped>
.sdkimg {
    display: inline-block;
    width: 150px;
    height: 150px;
    padding: 4px;
    margin-bottom: 10px;
}

.sdkimg img {
    width: 142px;
    height: 142px;
}

.mu-chip {
    margin: 4px;
}
</style>