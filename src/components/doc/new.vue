<template lang="jade">
    div.padded.container
        mu-breadcrumb.breadcrumb
          mu-breadcrumb-item(href="/doc") 维基
          mu-breadcrumb-item 新建文档
        mu-paper
            mu-content-block
                mu-text-field(@blur="verifyName",:errorText="errorTextName",hintText="标题",:fullWidth='true',style="font-size:18px; font-weight:bold;",v-model="document.name",:maxLength="100")
                mu-text-field(@blur="verifyBrief",:errorText="errorTextBrief",hintText="简介",:fullWidth='true',style="font-size:12px;",v-model="document.brief",:maxLength="200",:row="3",:rowMax="6",:multiLine="true")
                mu-text-field(@blur="verifyTag",:errorText="errorTextTag", hintText="关键词: 请用逗号,分隔开来",:fullWidth="true",style="padding-bottom:0",v-model="document.tag",:maxLength="200")
                br
                br
                quill-editor(@blur="verifyDetails",ref="editor",v-model="document.details",:options="editorOption")
                div.center.aligned
                    mu-raised-button(icon="edit",style="margin:20px;",label="提交修改",@click="confirmSubmit",secondary)
        mu-dialog(:open="isDialogConfirmSubmitDisplay",title="提示",@close="closeConfirmSubmitDialog") 是否确定提交？
            mu-flat-button(slot="actions",@click="closeConfirmSubmitDialog",primary,label="取消")
            mu-flat-button(slot="actions",secondary,@click="submit",label="确定")
        mu-dialog(:open="isDialogSubmittedDisplay",title="成功") 发布成功, 是否查看文档？
            mu-flat-button(slot="actions",to="/doc",primary,label="取消")
            mu-flat-button(slot="actions",@click="goNewDoc",secondary,label="确定")
        mu-snackbar.warning-snackbar(v-if="isSnackbarDisplay",:message="warningMessage")
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import Encode from '@/common/encode'

export default {
    name: 'doc-edit',
    components: {
        quillEditor
    },
    data() {
        return {
            document: {},
            isContentChanged: false,
            notice: '文档提交成功!',
            submitResult: false,
            newDocId: 0,                          //提交后的新文档ID
            editorOption: {
                placeholder: "请输入文档内容"
            },

            //dialog
            isDialogConfirmSubmitDisplay: false,
            isDialogSubmittedDisplay: false,

            //error text
            errorTextName: '',
            errorTextBrief: '',
            errorTextTag: '',

            //snackbar
            isSnackbarDisplay: false,
            warningMessage: '',
            snackTimer: '',
        }
    },
    mounted: function () {
        if (!this.$cookie.getCookie('sid')) {
            this.$router.push('/login');
        }
        else {
            document.title = '新建文档 - ' + this.$config.title;
        }
    },
    watch: {
        isSnackbarDisplay: function () {
            if (this.snackTimer) clearTimeout(this.snackTimer);
            this.snackTimer = setTimeout(() => { this.isSnackbarDisplay = false }, 2000)
        }
    },
    methods: {
        /**
         * 验证表单
         */
        verifyName() {
            var valid = false;
            if (!this.document.name) {
                this.errorTextName = "不能为空";
                valid = false;
            }
            else {
                if (this.document.name.length > 100) {
                    this.errorTextName = "标题过长";
                    valid = false;
                }
                else {
                    this.errorTextName = "";
                    valid = true;
                }
            }
            return valid;
        },
        verifyBrief() {
            var valid = false;
            if (!this.document.brief) {
                this.errorTextBrief = "不能为空";
                valid = false;
            }
            else {
                if (this.document.brief.length > 200) {
                    this.errorTextBrief = "简介过长";
                    valid = false;
                }
                else {
                    this.errorTextBrief = "";
                    valid = true;
                }
            }
            return valid;
        },
        verifyTag() {
            var valid = false;
            if (this.document.tag) {
                if (this.document.tag.length > 200) {
                    this.errorTextTag = "关键字过长"
                    valid = false
                }
                else {
                    this.errorTextTag = ""
                    valid = true
                }
            }
            else {
                this.document.tag = null
                valid = true
            }
            return valid;
        },
        verifyDetails() {
            var valid = false;
            if (!this.document.details) {
                this.showSnackbar('内容不能为空');
                valid = false;
            }
            else {
                valid = true;
            }
            return valid;
        },
        verify() {
            //三者都不为空，返回true
            if (
                this.verifyName() &&
                this.verifyBrief() &&
                this.verifyTag() &&
                this.verifyDetails()) {
                return true;
            }
            else {
                return false;
            }
        },

        //submit
        submit() {
            var _this = this;
            if (this.verify()) {
                this.$db.newDocument(this, {
                    name: this.document.name,
                    type_id: this.$route.params.type,
                    brief: Encode.htmlEncode(this.document.brief),
                    details: Encode.htmlEncode(this.document.details),
                    student_id: this.$cookie.getCookie('sid'),
                    tag: this.document.tag,
                }).then(res => {
                    this.newDocId = res.insertId;
                    this.isDialogSubmittedDisplay = true
                });
            }
        },
        goNewDoc() {
            this.$router.push('/doc/id=' + this.newDocId);
        },

        //snackbar
        hideSnackbar() {
            this.isSnackbarDisplay = false
        },
        showSnackbar(content) {
            this.warningMessage = content
            this.isSnackbarDisplay = true
        },

        //dialog
        closeConfirmSubmitDialog() {
            this.isDialogConfirmSubmitDisplay = false;
        },
        confirmSubmit() {
            if (this.verify()) {
                this.isDialogConfirmSubmitDisplay = true;
            }
        },
    }
}
</script>

<style>
    .ql-editor {
        min-height: 400px !important;
        height: 400px !important;
        max-height: 400px !important;
    }
</style>