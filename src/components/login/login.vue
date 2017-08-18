<template lang="jade">
    div.container
        mu-appbar(title='登录')
            mu-icon-button(icon='keyboard_arrow_left', slot='left', @click='goBack')
        div.padded
            mu-paper
                mu-content-block
                    mu-text-field(label="手机号码或Email",:labelFloat='true',:fullWidth='true',v-model='username',:errorText = 'usernameErrorText')
                    mu-text-field(label="密码",:labelFloat='true',type='password',:fullWidth='true',v-model='password',:errorText = 'passwordErrorText')
                    br
                    div.right.aligned
                        a(href='/login/forget_password') 忘记密码？
                    div.center.aligned
                        br
                        mu-raised-button(label='登 录',secondary,@click='login')
                    p
</template>

<script>
export default {
    name: 'school-contact',
    data() {
        return {
            sid: this.$cookie.getCookie('sid'),
            username: '',
            password: '',
            usernameErrorText: '',
            passwordErrorText: ''
        }
    },
    mounted: function () {
        document.title = '登录 - ' + this.$config.title;
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        login() {
            var valid;
            if (!this.username) {
                this.usernameErrorText = '用户名为必填项';
                valid = false;
            }
            else {
                this.usernameErrorText = '';
                valid = true;
            }
            if (!this.password) {
                this.passwordErrorText = '密码为必填项';
                valid = false;
            }
            else {
                this.passwordErrorText = '';
                valid = true;
            }
            if (valid) {
                this.$db.getStudentId(this, { username: this.username, password: this.password }).then(res => {
                    if (res.length > 0) {
                        this.$cookie.setCookie('sid', res[0].id);
                        this.$cookie.setCookie('name', res[0].name);
                        this.$router.go(-1);
                    }
                    else {
                        this.passwordErrorText = '密码或用户名错误';
                    }
                });;
            }
        }
    }
}
</script>

<style scoped>

</style>