<template lang="jade">
    div.padded
        mu-card#submit(style="padding:20px")
            mu-text-field(label="标题",hintText="字数限制40字",:fullWidth="true",style="padding-bottom:0",v-model="document.name")
            mu-text-field(label="关键词",hintText="请用逗号“,”分隔开来",:fullWidth="true",style="padding-bottom:0",v-model="document.tag")
            mu-text-field(label="简介",hintText="对文章进行简短的描述",:fullWidth="true",style="padding-bottom:0",:row="3",:rowMax="6",v-model="document.brief")
            br
            div
                quill-editor(ref="editor",v-model="document.details",:options="editorOption")
            br
            mu-raised-button(label="发布",:fullWidth="true",primary,@click="confirmSubmit")
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
            documentType: [],
            documentTypeValue: '0',
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
            this.getDocumentType();
        }
    },
    methods: {
        documentTypeChanged(value) {
            this.documentTypeValue = value;
        },
        getDocumentType() {
            var _this = this;
            this.$db.getDocumentType(this, {}).then(res => {
                _this.documentType = res;
            })
        },
        checkStudentTeamMember() {
            this.$db.isStudentTeamMember(this, { student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id }).then(res => {
                if (res.length <= 0) {
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
                    name: this.document.name,
                    type_id: 1,
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