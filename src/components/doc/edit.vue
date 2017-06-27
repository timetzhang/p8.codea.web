<template lang="jade">
    div.padded
        mu-paper
            mu-content-block
                mu-text-field(hintText="文档标题",:fullWidth='true',style="font-size:18px; font-weight:bold;",v-model="document.name")
                mu-text-field(hintText="文档简介",:fullWidth='true',style="font-size:12px;",v-model="document.brief")
                quill-editor(ref="editor",v-model="document.details")
                div.center.aligned
                    mu-raised-button(icon="edit",style="margin:20px;",label="提交修改",@click="confirmSubmit",secondary)
        mu-dialog(:open="isDialogConfirmSubmitDisplay",title="提示",@close="closeConfirmSubmitDialog") 是否确定提交修改？
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
            isContentChanged: false,
            isDialogConfirmSubmitDisplay: false,
            notice: '文档修改成功!',
            submitResult: false
        }
    },
    mounted: function () {
        this.getDocument();
        document.title = '编辑文档 - ' + this.$config.title;
    },
    methods: {
        closeConfirmSubmitDialog() {
            this.isDialogConfirmSubmitDisplay = false;
        },
        getDocument() {
            var _this = this;
            this.$db.getDocumentDetails(this, { id: this.$route.params.id }).then(res => {
                _this.document = res[0];
            })
        },
        confirmSubmit() {
            if (this.verify()) {
                this.isDialogConfirmSubmitDisplay = true;
            }
        },
        submit() {
            if (this.verify()) {
                var _this = this;
                this.$db.setDocument(this, {
                    id: this.document.id,
                    name: this.document.name,
                    brief: this.document.brief,
                    details: this.document.details
                }).then(res => {
                    if (res.affectedRows > 0) {
                        this.$router.push('/doc/id=' + this.$route.params.id);
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