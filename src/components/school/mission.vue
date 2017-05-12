<template lang="jade">
    div.padded
        mu-paper.center.aligned(style='padding:100px 10px; font-size:19px') 
            mu-content-block
                i.icon.users.big
            p 每年持续
            p 为国家
            p 为行业提供300位以上的优质程序员
</template>

<script>
export default {
    name: 'school-mission',
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