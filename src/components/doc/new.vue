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
            //-     hr
                    //-     h2 发布 
                    //-     mu-card#submit(style="border:1px solid #f0f0f0;padding:10px",v-if="sid > 0")
                    //-         mu-row
                    //-             mu-col.center.aligned(width="100",desktop="15",tablet="15")
                    //-                 mu-dropDown-menu(:value="docTypeValue",@change="checkoutType",:fullWidth="true")
                    //-                     mu-menu-item(value="001",title="选择类型")
                    //-                     mu-menu-item(v-for="item in docType",:key="item.id",:value="item.id",:title="item.name")
                    //-             mu-col(width="100",desktop="85",tablet="85")
                    //-                 mu-text-field(label="标题",hintText="字数限制30字",:fullWidth="true",style="padding-bottom:0",v-model="document.title",:maxLength="30")
                    //-             mu-col(desktop="100",tablet="100")
                    //-                 mu-text-field(label="关键词",hintText="请用逗号,分隔开来",:fullWidth="true",style="padding-bottom:0",v-model="document.tag")
                    //-             mu-col(desktop="100",tablet="100")
                    //-                 mu-text-field(label="简介",hintText="对帖子进行一段简短的描述",:fullWidth="true",style="padding-bottom:0",:row="3",:rowMax="6",v-model="document.brief",:maxLength="140")
                    //-         br
                    //-         div
                    //-             quill-editor(ref="editor",v-model="document.details",:options="editorOption")
                    //-         br
                    //-         mu-raised-button(label="发布",:fullWidth="true",primary,@click="submit")
                    //-     div.center.aligned(v-if="sid <= 0")
                    //-         p 登录才能发布！
                    //-         mu-raised-button(label="前往登陆",href="/login")
                    //- mu-snackbar(v-if="snackbar",:message="snackbarContent",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")

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
        // //submit
        // submit(){
        //     var _this = this;
        //     if (this.verify()){
        //         this.$db.newDocument(this,{
        //             name : this.document.title,
        //             type_id : this.docTypeValue,
        //             brief : this.document.brief,
        //             details : Encode.htmlEncode(this.document.details),
        //             student_id : this.sid,
        //             tag : this.document.tag,
        //         }).then(res => {
        //             _this.snackbarContent = "发布成功";
        //             _this.getDoc();
        //             _this.showSnackbar();
        //             _this.clearmit();
        //             _this.returnTop();
        //         });
        //     }
        // },
        // // clear form
        // clearmit(){
        //     this.document.title = "";
        //     this.docTypeValue = "";
        //     this.document.brief = "";
        //     this.document.details = "";
        //     this.document.tag = "";
        // },
    }
}
</script>

<style scoped>

</style>