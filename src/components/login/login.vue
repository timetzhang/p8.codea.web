<template lang="jade">
    div
        mu-appbar(title='登录')
            mu-icon-button(icon='keyboard_arrow_left', slot='left', @click='goBack')
        div.padded
            mu-paper
                mu-content-block
                    mu-text-field(label="手机号码或Email",:labelFloat='true',:fullWidth='true')
                    mu-text-field(label="密码",:labelFloat='true',type='password',:fullWidth='true')
                    br
                    div.center.aligned
                        mu-raised-button(label='登 录' secondary)
                    p
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
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

</style>