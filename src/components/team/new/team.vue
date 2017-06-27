<template lang="jade">
    div.padded
        mu-paper
            mu-content-block
                mu-text-field(hintText="文档标题",:fullWidth='true',style="font-size:18px; font-weight:bold;",v-model="document.name")
                mu-text-field(hintText="文档简介",:fullWidth='true',style="font-size:12px;",v-model="document.brief")
                mu-select-field(v-model="course_id",label="课程分类", :maxHeight="300")
                    mu-menu-item(v-for="course,index in courses",:key="index",:value="course.id",:title="course.name")
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
    name: 'new-team',
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
        if (!this.$cookie.getCookie('sid')) {
            this.$router.push('/login');
        }
        else {
            document.title = '新建文档 - ' + this.$config.title;
            this.getCourses();
        }
    },
    methods: {
        getCourses() {
            var _this = this;
            this.$db.getCourse(this, {}).then(res => {
                _this.courses = res;
            })
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
                    course_id: this.course_id,
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