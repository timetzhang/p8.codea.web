<template lang="jade">
    div
        mu-paper
            mu-content-block.para(v-if='sid > 0 && !isDone')
                br
                div(v-for='item, index in items', :key='item.id')
                    div <b>{{index+1}}.</b> {{item.details}}
                    mu-text-field(:multiLine='true',:fullWidth='true',:rows='2',v-model='details[index]')
                br
                div.center.aligned
                    mu-raised-button(label=' 提 交 ', @click='submit',secondary, :disabled='isSubmit')
        mu-paper
            mu-content-block.para.center.aligned(v-if='isDone', style='padding:30px 0') 
                i.icon.info.large
                br
                span 已经完成了入学考试
        mu-dialog(:open="registerDialog",title="登录") 您还没有登录，请选择
            mu-flat-button(label="登录",slot="actions",primary,@click="goLogin")
            mu-flat-button(label="注册",slot="actions",primary,@click="goRegister")
            mu-flat-button(label="取消",slot="actions",primary,@click="closeRegisterDialog")
        mu-dialog(:open="submitDialog",title="完成") 提交成功, 是否进入"Parkathon"黑客营申请?
            mu-flat-button(label="好的",slot="actions",primary,@click="goParkathon")
            mu-flat-button(label="取消",slot="actions",primary,@click="closeSubmitDialog")
        mu-dialog(:open="noticeDialog",title="提示") {{notice}}
            mu-flat-button(label="好的",slot="actions",primary,@click="closeNoticeDialog")
</template>

<script>
import Cookie from '@/common/cookie.js'

export default {
    name: 'school-contact',
    data() {
        return {
            sid: Cookie.getCookie('sid'),
            registerDialog: false,
            submitDialog: false,
            noticeDialog: false,
            isSubmit: false, //是否已经Submit
            isDone: false, //是否做过考试
            notice: '',
            items: [],
            details: [],
            data: []
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        //DEBUG
        Cookie.setCookie('sid', '1', 365);
        //如果已经登录
        if (Cookie.getCookie('sid') > 0) {
            this.$db.isStudentEntranceExamDone(this, { sid: Cookie.getCookie('sid') }).then(res => {
                if (res == 0)
                    this.generateExam();
                else
                    this.isDone = true;
            });

        }
        else {
            this.dialog = true;
        }
    },
    methods: {
        generateExam() {
            //获取Entrance Exam
            //来源 @/common/db.js
            var _this = this;
            this.$db.getEntranceExam(this, { count: 5 }).then(res => {
                _this.items = res;
            });
        },
        submit() {
            var valid = true; //检查是否填写完成的flag
            this.data = []; //将data复位
            for (var i = 0; i < this.items.length; i++) {
                if (this.details[i]) {
                    this.data.push({ exam_id: this.items[i].id, student_id: this.sid, details: this.details[i] });
                }
                else {
                    valid = false;
                    this.notice = '还有没有完成的题目';
                    this.noticeDialog = true;
                }
            }
            //注册data的各字段
            //来源 @/common/db.js
            if (valid) {
                this.$db.newStudentEntranceExam(this, this.data).then(res => {
                    if (res.affectedRows > 0) {
                        this.isSubmit = true;
                        this.submitDialog = true;
                    }
                });
            }
        },
        closeRegisterDialog() {
            this.registerDialog = false;
        },
        closeSubmitDialog() {
            this.submitDialog = false;
        },
        closeNoticeDialog() {
            this.noticeDialog = false;
        },
        goRegister() {
            this.$router.push('/school/register');
        },
        goLogin() {
            this.$router.push('/login');
        },
        goParkathon() {
            this.$router.push('/school/parkathon');
        }
    }
}
</script>

<style scoped>

</style>