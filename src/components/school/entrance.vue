<template lang="jade">
    div
        mu-paper.page.title
            mu-content-block
                mu-flat-button(label="Entrance Exam 入学考试",class="demo-flat-button",icon="dashboard",primary,style='font-weight:bold')
        mu-paper
            mu-content-block.para

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