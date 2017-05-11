<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="100")
            mu-paper(style='padding:10px 30px')
                mu-text-field(label="搜索SDK",style='width:100%', icon='search')
            br
            mu-paper.sdk-page
                router-view 
</template>

<script>
export default {
    name: 'sdk',
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
.sdk-page {
    padding: 20px !important;
}

</style>