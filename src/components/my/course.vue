<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-list(style='overflow: hidden;')
                    mu-list-item(:disableRipple='true',title="C#")
                        mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='50', style='margin-top:10px', slot='describe')
                        p.right.aligned {{mark}}
</template>

<script>
export default {
    name: 'my-course',
    data() {
        return {
            logo_img: ''
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
