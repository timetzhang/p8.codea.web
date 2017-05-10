<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-flat-button(label="Space 学习环境",class="demo-flat-button",icon="dashboard",primary,style='font-weight:bold')
        br
        mu-paper
            mu-content-block
                .center.aligned
                    h1 开放空间
                    h3 Open Space
                    mu-icon(value="bubble_chart", :size='64')
                p 我们提供能够很好互动的空间，来吸引更多的像你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花。
                p 空间准则：不用提高声音，就可以同时和7位同学进行交流
                img(src='/static/img/school/study_space01.png', style='width:100%')
                img(src='/static/img/school/study_space02.png', style='width:100%')
                img(src='/static/img/school/study_space03.png', style='width:100%')
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