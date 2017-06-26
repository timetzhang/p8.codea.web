<template lang="jade">
    div
        mu-appbar(title='返回登录')
            mu-icon-button(icon='keyboard_arrow_left', slot='left', @click='goBack')
        div.padded
            mu-paper
                mu-content-block.center.aligned
                    mu-stepper(:activeStep="activeStep")
                        mu-step
                            mu-step-label 输入账号
                        mu-step
                            mu-step-label 发送验证码
                        mu-step
                            mu-step-label 输入新密码
                        mu-step
                            mu-step-label 完成
                    div
                        div(v-if="finished")
                            h3 修改密码成功！
                            mu-raised-button(label="前往登录" href="/login")
                        template(v-if="!finished")
                            div(v-if="activeStep === 0")
                                mu-text-field(hintText="输入手机号/邮箱",v-model="cellPhoneAndEmail",:errorText="cellPhoneAndEmailErrorText",@blur="validCellPhoneOrEmail")
                            div(v-if="activeStep === 1")
                                mu-text-field(hintText="输入验证码")
                                mu-flat-button(label="发送验证码")
                            div(v-if="activeStep === 2")
                                mu-text-field(hintText="输入新密码")
                                
                            div
                                br
                                mu-flat-button(label="上一步",:disabled="activeStep === 0",@click="handlePrev")
                                mu-raised-button(label="下一步",:disabled="false",primary,@click="handleNext")
</template>

<script>
export default {
    name: 'password',
    data() {
        return {
            activeStep: 0,
            cellPhoneAndEmailErrorText:'',
            cellPhoneAndEmail:'',
        }
    },
    computed: {
        finished () {
            return this.activeStep > 2;
        }

    },
    mounted: function () {

    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        handleNext () {
            var _this = this;
            switch (this.activeStep) {
                case 0:
                    if (!this.cellPhoneAndEmail) {
                        this.cellPhoneAndEmailErrorText = '这是必填项';
                    }
                    else {
                        if (/^1[34578]\d{9}$/.test(this.cellPhoneAndEmail) == false) {
                            this.cellPhoneAndEmailErrorText = '请输入正确的手机号码';
                        }
                        else{
                            //判断cellphone是否存在
                            this.$db.isStudentCellphoneExist(this, { cellPhoneAndEmail: this.cellPhoneAndEmail }).then(res => {
                                if (res != 1) {
                                    _this.cellPhoneAndEmailErrorText = '此用户不存在';
                                }else{
                                    this.cellPhoneAndEmailErrorText = null;
                                    this.activeStep++;
                                }
                            });
                        }
                    }
                        
                    
                    break;
                case 1:
                    
                    break;
                case 2:
                    
                    break;            
                default:
                    break;
            }
            
        },
        handlePrev () {
            this.activeStep--;
        },
        validCellPhoneOrEmail () {
            var _this = this;
            
        }
    }
}
</script>

<style scoped>

</style>