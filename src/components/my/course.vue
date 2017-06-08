<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-list(style='overflow: hidden;')
                    mu-list-item(:disableRipple='true',title="C#")
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='50', style='margin-top:10px', slot='describe')
                        p.right.aligned 11%
                    mu-list-item(:disableRipple='true',title="Java")
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='12', style='margin-top:10px')
                        p.right.aligned 23%
</template>

<script>
export default {
    name: 'my-course',
    data() {
        return {
            logo_img: '/static/img/course/csharp.png'
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
