<template lang="jade">
    div
</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {
        }
    },
    mounted: function () {
        this.$cookie.delCookie('sid');
        this.$cookie.delCookie('name');
        window.location.href = '/'
    },
    methods: {

    }
}
</script>

<style scoped>

</style>