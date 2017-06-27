<template lang="jade">
    div.padded
        mu-paper
            mu-content-block
                mu-text-field(hintText="文档标题",:fullWidth='true',style="font-size:18px; font-weight:bold;",v-model="document.name")
                mu-text-field(hintText="文档简介",:fullWidth='true',style="font-size:12px;",v-model="document.brief")
                quill-editor(ref="editor",v-model="document.details",:options="editorOption")
                div.center.aligned
                    mu-raised-button(icon="edit",style="margin:20px;",label="提交修改",@click="confirmSubmit",secondary)
        mu-dialog(:open="isDialogConfirmSubmitDisplay",title="提示",@close="closeConfirmSubmitDialog") 是否确定提交？
            mu-flat-button(slot="actions",@click="closeConfirmSubmitDialog",primary,label="取消")
            mu-flat-button(slot="actions",secondary,@click="submit",label="确定")
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
    name: 'doc-edit',
    components: {
        quillEditor
    },
    data() {
        return {
            document: {},
            courses: [],
            course_id: 0,
            isContentChanged: false,
            isDialogConfirmSubmitDisplay: false,
            notice: '文档提交成功!',
            submitResult: false,
            editorOption: {
                placeholder: "请输入文档内容"
            }
        }
    },
    mounted: function () {
        //Check Login info
        if (!this.$cookie.getCookie('sid')) {
            this.$router.push('/login');
        }
        else {
            //Check the student is the member of team
            this.checkStudentTeamMember();
            document.title = '新建小组文档 - ' + this.$config.title;
        }
    },
    methods: {
        checkStudentTeamMember(){
            this.$db.isStudentTeamMember(this, {student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id}).then(res=>{
                if(res.length <= 0){
                    alert('您不是该小组成员');
                    window.location.href = '/team';
                }
            });
        },
        closeConfirmSubmitDialog() {
            this.isDialogConfirmSubmitDisplay = false;
        },
        confirmSubmit() {
            if (this.verify()) {
                this.isDialogConfirmSubmitDisplay = true;
            }
        },
        submit() {
            if (this.verify()) {
                var _this = this;
                this.$db.newDocument(this, {
                    id: this.document.id,
                    name: this.document.name,
                    brief: this.document.brief,
                    details: this.document.details,
                    team_id: this.$route.params.id,
                    student_id: this.$cookie.getCookie('sid')
                }).then(res => {
                    if (res.affectedRows > 0) {
                        this.$router.push('/doc/id=' + res.insertId);
                    }
                });
            }
        },
        /**
         * 验证表单
         */
        verify() {
            //三者都不为空，返回true
            return this.document.name && this.document.brief && this.document.details ? true : false;
        }
    }
}
</script>

<style scoped>

</style>