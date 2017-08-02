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
            mu-checkbox(:label="isLikeLabel",uncheckIcon="favorite_border",checkedIcon="favorite",v-model="isLikeIcon",:disabled="sid > 0 ? false : true")
            hr
            h2 发表评论
            mu-card(style="border:1px solid #f0f0f0;padding:10px",v-if="sid > 0")
                quill-editor(ref="editor",v-model="documentComment",:options="editorOption")
                br
                mu-raised-button(label="发布",:fullWidth="true",primary,@click="submitComment")
            div.center.aligned(v-if="sid <= 0")
                p 登录才能评论！
                mu-raised-button(label="前往登陆",href="/login")
            mu-snackbar(v-if="snackbar",:message="snackbarContent",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")
            // comment
            br
            hr
            h3 评论（{{comment_count}} 条）
            div(v-if="comment_count === 0")
                p.aligned.center 快来占领沙发吧！
            div(v-for="(item,index) in comments",:key="item.id")
                a(:href="'/student/id='+item.owner_student_id")
                    mu-avatar(:src="item.owner_student_headimage",:size="30",style="vertical-align:middle;")
                div.name
                    a(:href="'/student/id='+item.owner_student_id",style="color:black")
                        span {{item.owner_student_name}}
                    span.time {{item.time}}
                p(v-html="item.detail")
                blockquote
                    div(v-for="(list,index) in item.sub_comments",:key="list.id",style="font-size:12px;")
                        div
                            p
                                a(:href="'/student/id='+list.owner_student_id") {{list.owner_student_name}}
                                label(v-if="list.target_student_name != item.owner_student_name") &nbsp;回复&nbsp;
                                a(:href="'/student/id='+list.target_student_id",v-if="list.target_student_name != item.owner_student_name") {{list.target_student_name}}
                                label &nbsp;:
                                div(v-html="list.detail",style="padding-left:20px;")
                            div
                                label(style="color:#d1d1d1") 评论于{{list.time}}
                                label.point(@click="reply([list.id, list.owner_student_name, list.owner_student_id, item.id])")
                                    &nbsp;&nbsp;&nbsp;
                                    i(class="comment outline icon")
                                    回复
                            hr
                    label.point(@click="reply([item.id, item.owner_student_name, item.owner_student_id, item.id])")
                        &nbsp;&nbsp;&nbsp;
                        i(class="paint brush icon")
                        新评论
                    div(v-if="replyEditor === item.id")
                        hr
                        quill-editor(ref="editor",v-model="replyDetail",:options="editorOption")
                        br
                        mu-raised-button(label="发表评论",style="width:100%",@click="submitReply(item.id)")
                hr
            div.center.aligned(style="padding:20px;",v-if="comment_count > 20")
                mu-pagination(:total="comment_count",:current="current",:pageSize="20",@pageChange="switchPage",style="float:right")
                br
</template>

<script>
import DateTime from '@/common/datetime'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import Cookie from '@/common/cookie.js'
import Encode from '@/common/encode'

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
                placeholder: "请输入评论内容"
            },
            snackbar: false,
            snackbarContent: '',
            comments:[],
            comment_count:0,
            isLikeIcon:false,
            isLikeLabel:"点赞",

            //comment reply
            replyEditor: 0,
            replyId: 0,//被评论id
            replyStuId: 0,//被评论人id
            documentComment:'',//评论文档
            replyDetail:'',

            current:1,//what page
            pageNum:0,
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
                _this.document.details = Encode.htmlDecode(_this.document.details);
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
                            _this.isLikeLabel = "已点赞";
                        }
                        _this.$watch('isLikeIcon',this.isLikeChange);
                    });
                }else{
                    this.isLikeLabel = "点赞（请先登录）";
                }
            });
           this.loadComment();
        },
        loadComment(){
            var _this = this;
            this.comments.splice(0,this.comments.length);
            var documentID = this.$route.params.id;
             //get comment
            this.$db.getDocumentComment(this,{document_id : documentID,pagenum : this.pageNum, pagesize : 20}).then(res=>{
                
                var arr = [];
                res[0].forEach(function(element) {
                    if(element.time != null){
                        element.time = DateTime.getTimespan(element.time);
                    }
                    element.detail = Encode.htmlDecode(element.detail);
                    if (!element.target_student_id){
                        _this.comments.push(element);
                    }else{
                        arr.push(element);
                    }
                }, this);
                arr.forEach(function(element) {
                    _this.comments.forEach(function(el,i) {
                        if (!el.sub_comments){
                            _this.$set(el,"sub_comments",[]);
                        }
                        if(el.id == element.comment_id){
                            el.sub_comments.push(element);
                        }
                    }, this);
                }, this);
                _this.comment_count = res[1][0].count;
                this.$nextTick(function(){
                    _this.comments.forEach(function(el){
                        var val = el.sub_comments.length;
                        if(val <= 5){
                            _this.surplusDataNum.push(0);
                        }else{
                            _this.surplusDataNum.push(val - 5);
                        }
                    })
                    
                });
            });
        },
        //watch isLike
        isLikeChange(value){
            if(value){
                this.$db.newDocumentLike(this,{document_id : this.$route.params.id, student_id : this.sid});
                this.$nextTick(function () {
                    this.isLikeLabel = "已点赞";
                })
            }else{
                this.$db.delDocumentLike(this,{document_id : this.$route.params.id, student_id : this.sid});
                this.$nextTick(function () {
                    this.isLikeLabel = "点赞";
                })
            }
        },

        submitComment(){
            var _this = this;
            if (this.sid > 0 && this.documentComment != "") {
                this.$db.newDocumentComment(this,{
                    document_id:this.$route.params.id,
                    detail:Encode.htmlEncode(this.documentComment),
                    student_id:this.sid,
                    comment_id:0,
                    target_student_id:0,
                }).then(res => {
                    _this.snackbarContent = "发布成功";
                    _this.documentComment = "",
                    _this.loadComment();
                    _this.showSnackbar();
                });
            }
        },
        submitReply(value){
            var _this = this;
            if(this.sid > 0 && this.replyDetail != ""){
                this.$db.newDocumentComment(this,{
                    document_id:this.$route.params.id,
                    detail:Encode.htmlEncode(this.replyDetail),
                    student_id:this.sid,
                    comment_id:value,
                    target_student_id:this.replyStuId,
                }).then(res => {
                    _this.snackbarContent = "发布成功";
                    _this.loadComment();
                    _this.showSnackbar();
                    _this.clearmit();
                });
            }
        },
        clearmit(){
            this.replyEditor = 0;
            this.replyId = 0;
        },
        reply(val){
            if (this.sid <= 0){
                this.$router.push({path:'/login'})
            }
            if (this.replyId == val[0] && this.replyStuId == val[2]){
                this.replyEditor = 0;
                this.replyId = 0;
            }else{
                this.replyEditor = 0;
                this.replyId = val[0];
                this.replyStuId = val[2];
                this.replyDetail = "";
                this.$set(this.editorOption,'placeholder',"回复 " + val[1]);
                this.$nextTick(function () {
                    this.replyEditor = val[3];
                })  
            }
        },
        switchPage(newIndex) {
            var _this = this;
            this.pageNum = newIndex-1;
            this.loadComment();
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
blockquote {
    padding: 15px;
    border-left: 5px solid #f0f0f0;
}
.name{
    display: inline-block;
    margin-left: 5px;
}
.name .time {
    display: inline-block;
    padding:0 5px 0 3px;
    color: #969696;
}
.point {
    cursor: pointer;
}
.point:hover{
    color:#457cce;
}
</style>