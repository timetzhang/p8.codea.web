<template lang="jade">
div.padded
    mu-paper(style="padding:10px")
        mu-content-block.para
            div.center.aligned(gutter)
                mu-raised-button(label="前往文档中心",href="/doc",style="float:left")
                br
                h1 {{document.name}}
                span {{document.student_name}} 建立于 {{document.time}}
            p.html.ql-editor(v-html="document.details")
            mu-checkbox(:label="sid > 0 ? '点赞' : '点赞（请先登录）'",uncheckIcon="favorite_border",checkedIcon="favorite",v-model="isLikeIcon",:disabled="sid > 0 ? false : true")
            hr
            h2 发表评论
            mu-card(style="border:1px solid #f0f0f0;padding:10px",v-if="sid > 0")
                quill-editor(ref="editor",v-model="comment",:options="editorOption")
                br
                mu-raised-button(label="发布",:fullWidth="true",primary,@click="submit")
            div.center.aligned(v-if="sid <= 0")
                p 登录才能评论！
                mu-raised-button(label="前往登陆",href="/login")
            mu-snackbar(v-if="snackbar",:message="snackbarContent",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")
            // comment
            br
            hr
            h3 评论（18 条）
            mu-card(v-for="item in comments",:key="item.id")
                mu-card-header(:title="item.name",:subTitle="item.time")
                    mu-avatar(:src="item.head_image",slot="avatar")
                    p(v-html="item.detail")
                hr
</template>

<script>
import DateTime from '@/common/datetime'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import Cookie from '@/common/cookie.js'

export default {
    name: 'details',
    components:{
        quillEditor
    },
    data() {
        return {
            document:{},
            sid: this.$cookie.getCookie('sid'),
            editorOption: {
                placeholder: "请输入文档内容"
            },
            snackbar: false,
            snackbarContent: '',
            comments:[],
            isLikeIcon:false,
        }
    },
    mounted: function () {
        this.loadDocument();
    },
    methods: {
        loadDocument(){
            var _this = this;
            var documentID = this.$route.params.id;
            //get document details
            this.$db.getDocumentDetails(this,{id: documentID}).then(res=>{
                _this.document = res[0];
                _this.document.time = DateTime.dateFormat(_this.document.time);
            }).then(res =>{
                //clickCount
                if(!Cookie.getCookie(documentID)){
                    Cookie.setCookie( documentID, documentID, 1);
                    _this.$db.newDocumentClickCount(_this,{id: documentID});
                };
                if(this.sid > 0){
                    //islike
                    this.$db.getDocumentLike(this,{document_id : this.$route.params.id, student_id : this.sid}).then(res=>{
                        if(res[0].count != 0){
                            _this.isLikeIcon = true;
                        }
                        _this.$watch('isLikeIcon',this.isLikeChange);
                    });
                }
            });
            
            this.$db.getDocumentComment(this,{document_id:documentID}).then(res=>{
                res.forEach(function(el) {
                    if (el.comment_id) {
                        _this.comments.push(el);
                    }
                }, this);
                //_this.comments = res;
            });
        },
        //watch isLike
        isLikeChange(value){
            if(value){
                this.$db.newDocumentLike(this,{document_id : this.$route.params.id, student_id : this.sid});
            }else{
                this.$db.delDocumentLike(this,{document_id : this.$route.params.id, student_id : this.sid});
            }
        },

        submit(){

        },
        
        showSnackbar () {
            this.snackbar = true
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
        },
        hideSnackbar () {
            this.snackbar = false
            if (this.snackTimer) clearTimeout(this.snackTimer)
        },
    },

}
</script>

<style scoped>

</style>