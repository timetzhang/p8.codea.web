<template lang="jade">
div.padded.container
    mu-breadcrumb.breadcrumb
        mu-breadcrumb-item(href="/doc") 维基
        mu-breadcrumb-item {{document.name}}
    mu-paper(style="padding:10px")
        loading(v-if="isLoading")
        mu-content-block.para(v-if="!isLoading")
            div.center.aligned(gutter)
                h1 {{document.name}} 
                //- Name and Time
                div
                    router-link(:to="'/student/id=' + document.student_id")
                        mu-avatar(:src="document.head_image", :size="30")
                        span(style="vertical-align:9px") &nbsp; {{document.student_name}}
                    span(style="font-size:0.85em; color: #999; vertical-align:9px")  于 {{document.time}}
                    router-link(:to="'/doc/edit/id=' + document.id", v-if="isOwner",style="vertical-align:9px") &nbsp;[编辑]
                //- Functions
                div(style="margin-top:10px")
                    mu-flat-button(label="分享",icon="share",@click="toggleShare")
                    mu-flat-button(:label="'评论(' + document.comment_count + ')'",icon="comment",@click="focusComment")
                    mu-flat-button(@click="setLike",:label="(isLike ? '已赞' : '赞') + '(' + document.like_count + ')'",icon="thumb_up", :color="isLike ? 'red' : 'black'")
                    mu-flat-button(@click="setFav",:label="(isFav ? '已收藏' : '收藏') + '(' + document.fav_count + ')'",icon="favorite", :color="isFav ? 'red' : 'black'")
                    mu-flat-button(:label="'查看(' + document.click_count + ')'",icon="whatshot")
                div(v-if="isQrcodeDisplay")
                    br
                    img(:src="'http://qr.liantu.com/api.php?m=0&el=l&text=http://codea.joinp8.com'+this.$route.url+'&w=200'")
            
            p.html(v-html="document.details")
            hr
            h2 发表评论
            div(v-if="sid > 0")
                quill-editor(ref="editor",v-model="documentComment",:options="editorOption")
                br
                mu-raised-button(label="发布",:fullWidth="true",primary,@click="submitComment")
            div.center.aligned(v-if="sid <= 0")
                p 登录才能评论！
                mu-raised-button(label="前往登陆",href="/login")
            
            br
            hr
            h3 评论 ({{document.comment_count}} 条)
            div(v-if="document.comment_count == 0")
                p.aligned.center 快来占领沙发吧！
            mu-list(v-for="(item,index) in comments",:key="item.id")
                mu-list-item(@click="reply(item.student_name)")
                    span(slot="title") 
                        span {{item.student_name}} 
                        span.time {{item.time}}
                    mu-avatar(:src="item.student_head_image",slot="leftAvatar")
                    span(slot="describe")
                        span(v-html="item.detail")
                mu-divider(inset)
            div.center.aligned(style="padding:20px;",v-if="comment_count > 20")
                mu-pagination(:total="document.comment_count",:current="currentCommentPage",:pageSize="20",@pageChange="onCommentPageChange",style="float:right")
                br
            
            mu-snackbar.snackbar(v-if="isSnackbarDisplay",:message="snackbarMessage",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")            
</template>

<script>
import DateTime from '@/common/datetime'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import Encode from '@/common/encode'
import loading from '@/components/common/loading'

export default {
    name: 'details',
    components: {
        quillEditor,
        loading
    },
    data() {
        return {
            document: {},                             //document json
            isLoading: true,
            isFav: false,                             //判断学生是否已经收藏
            isLike: false,                            //判断学生是否已经点赞
            isOwner: false,                           //是否为文档的所有者
            sid: this.$cookie.getCookie('sid'),       //student id
            editorOption: {
                placeholder: "请输入评论内容"
            },

            //share
            isQrcodeDisplay: false,

            //snackbar
            isSnackbarDisplay: false,
            snackbarMessage: '',
            snackTimer: '',

            comments: [],

            currentCommentPage: 1,//what page
            pageNum: 0,
        }
    },
    mounted: function () {
        this.getDocument();
    },
    methods: {
        //Initialize
        getDocument() {
            var _this = this;
            //get document details
            this.$db.getDocumentDetails(this, { id: this.$route.params.id }).then(res => {
                _this.document = res[0][0];
                _this.document.time = DateTime.dateFormat(_this.document.time);
                _this.document.details = Encode.htmlDecode(_this.document.details);
                //判断是否是owner
                if (this.$cookie.getCookie('sid') == _this.document.student_id) {
                    this.isOwner = true;
                }
            }).then(res => {

                if (this.$cookie.getCookie('sid') > 0) {

                    //判断是否点赞
                    this.$db.isStudentLikeDocument(this, { student_id: this.sid, document_id: this.$route.params.id }).then(res => {
                        if (res[0].count != 0) {
                            _this.isLike = true;
                        }
                    });

                    //判断是否收藏
                    this.$db.isStudentFavDocument(this, { student_id: this.sid, document_id: this.$route.params.id }).then(res => {
                        if (res[0].count != 0) {
                            _this.isFav = true;
                        }
                    });
                }

                this.getComment();
                this.isLoading = false;
            });

        },
        getComment() {
            var _this = this;
            this.comments = [];
            //get comment
            this.$db.getDocumentComment(this,
                {
                    document_id: this.$route.params.id,
                    pagenum: this.pageNum, pagesize: 20
                })
                .then(res => {
                    res.forEach(function (element) {
                        element.time = DateTime.getTimespan(element.time)
                        element.detail = Encode.htmlDecode(element.detail)
                        _this.comments.push(element);
                    }, this);
                });
        },

        //处理“赞”功能
        setLike(value) {
            if (this.$cookie.getCookie('sid')) {
                if (this.isLike) {
                    this.$db.delStudentLikeDocument(this,
                        {
                            document_id: this.$route.params.id,
                            student_id: this.$cookie.getCookie('sid')
                        })
                        .then(() => {
                            this.isLike = false
                            this.document.like_count--
                            this.showSnackbar('取消成功')
                        })
                }
                else {
                    this.$db.newStudentLikeDocument(this,
                        {
                            document_id: this.$route.params.id,
                            student_id: this.$cookie.getCookie('sid')
                        })
                        .then(() => {
                            this.isLike = true
                            this.document.like_count++
                            this.showSnackbar('成功')
                        })
                }
            }
            else {
                this.$router.push('/login');
            }
        },

        //处理“收藏”功能
        setFav(value) {
            if (this.$cookie.getCookie('sid')) {
                if (this.isFav) {
                    this.$db.delStudentFavDocument(this,
                        {
                            document_id: this.$route.params.id,
                            student_id: this.$cookie.getCookie('sid')
                        })
                        .then(() => {
                            this.isFav = false
                            this.document.fav_count--
                            this.showSnackbar('取消成功')
                        })
                }
                else {
                    this.$db.newStudentFavDocument(this,
                        {
                            document_id: this.$route.params.id,
                            student_id: this.$cookie.getCookie('sid')
                        })
                        .then(() => {
                            this.isFav = true
                            this.document.fav_count++
                            this.showSnackbar('收藏成功')
                        })
                }
            }
            else {
                this.$router.push('/login');
            }
        },

        //Comment
        focusComment() {
            this.$el.querySelector('.ql-editor').focus();
        },
        submitComment() {
            var _this = this;
            if (this.$cookie.getCookie('sid') > 0 && this.documentComment != "") {
                this.$db.newDocumentComment(this, {
                    document_id: this.$route.params.id,
                    detail: Encode.htmlEncode(this.documentComment),
                    student_id: this.$cookie.getCookie('sid')
                }).then(res => {
                    if (res.affectedRows > 0) {
                        _this.getComment();
                    }
                    _this.showSnackbar('发布成功');
                });
            }
        },
        onCommentPageChange(val) {
            var _this = this;
            this.currentCommentPage = val - 1;
            this.getComment();
        },

        //snackbar
        showSnackbar(msg) {
            this.snackbarMessage = msg
            this.isSnackbarDisplay = true
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.isSnackbarDisplay = false }, 2000)
        },
        hideSnackbar() {
            this.isSnackbarDisplay = false
            if (this.snackTimer) clearTimeout(this.snackTimer)
        },

        //share
        toggleShare() {
            this.isQrcodeDisplay = !this.isQrcodeDisplay;
        }
    },
    watch: {
        isSnackbarDisplay: function () {
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.isSnackbarDisplay = false }, 2000)
        }
    }
}
</script>

<style>
blockquote {
    padding: 15px;
    border-left: 5px solid #f0f0f0;
}

.time {
    font-size: 0.85em;
    display: inline-block;
    padding: 0 5px 0 3px;
    color: #999;
}

.point {
    cursor: pointer;
}

.point:hover {
    color: #457cce;
}

.ql-editor {
    height: 200px !important;
    max-height: 200px !important;
}
</style>