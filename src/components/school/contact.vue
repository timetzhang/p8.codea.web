<template lang="jade">
    div
        mu-paper.page.title
            mu-content-block
                mu-flat-button(label="Contact 联系我们",icon="dashboard",primary,style='font-weight:bold')
        mu-paper
            mu-content-block
                p Email: 12232121223
                p 电话: 1230123123
                p 微信
</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {

        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    methods: {

    }
}
</script>

<style scoped>

</style>