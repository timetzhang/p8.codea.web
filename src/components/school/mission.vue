<template lang="jade">
    div.padded
        mu-paper.center.aligned(style='padding:70px 10px;') 
            mu-content-block
                i.icon.users.big
            p 每年持续
            p 为国家
            p 为行业提供300位以上的优质程序员
        p
        mu-paper.center.aligned(style='padding:100px 10px;') 
            mu-content-block
                i.icon.tasks.big
            p 每年至少培训6位全栈工程师
        p
        mu-paper.center.aligned(style='padding:100px 10px;') 
            mu-content-block
                i.icon.diamond.big
            p 争取每年培训1位首席科学家
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