<template lang="jade">
    div.padded
        mu-paper(style="padding:10px")
            mu-content-block.para
                mu-row(gutter)
                    mu-col(desktop="15",table="50",width="100")
                        img(:src="team.logo", style='border:1px solid #eee',width="100%")
                    mu-col(desktop="85",table="50",width="100")
                        h2(style="margin-top:10px;") {{team.name}}
                            span(style="font-size:12px;font-weight: normal;float:right") (浏览量：{{team.click_count}})
                        span 成立时间：{{team.time}}
                        p {{team.intro}}
                        div.right.aligned
                            mu-raised-button(icon="star",:label="isFollowed ? '已关注' : '关注'",:secondary='isFollowed', @click='follow')
                        br

                mu-divider

                h2(style="display:inline-block;") 项目成员
                    mu-flat-button(style="display:inline-block",label="管理成员",@click="toggleManageMemberDisplay",v-if='isTeamLeader')
                div(style="margin-bottom: 10px")
                    mu-chip(v-for="member in members",:key="member.id",@delete="showDeleteMemberConfirmDialog(member.id, member.name)",:showDelete="isMemberManageDisplay",@click='redirectStudent(member.student_id)')
                        mu-avatar(:size="32",:src="member.head_image")
                        span {{member.name}}
                div(v-if="isMemberManageDisplay")
                    mu-text-field(label="手机号码或Email",v-model="newMemberUsername")
                    mu-raised-button(label="添加新成员",@click="showAddMemberConfirmDialog", secondary, style='margin-left:10px;')
                    mu-raised-button(label="取消",@click="hideMemberManage", primary, style='margin-left:10px;')

                mu-divider

                h2 项目详情
                div.html.ql-editor(v-html="team.details" v-if="!isEditDisplay")
                div.center.aligned
                    mu-raised-button(icon="edit",style="margin:20px;",label="修改项目简介",v-if="isTeamLeader && !isEditDisplay",@click="showDetailsEdit")
                    quill-editor(ref="myTextEditor",v-model="team.details",:config="editorOption",v-if="isEditDisplay")
                    mu-raised-button(label="提 交",style="margin:10px 0",v-if="isEditDisplay",@click="submitEdit")
                    span &nbsp;
                    mu-raised-button(label="取 消",style="margin:10px 0",v-if="isEditDisplay",@click="cancelEdit")
                
                mu-divider

                mu-tabs(:value="activeTab",@change="handleTabChange")
                    mu-tab(value="tab1",:title="'文档(' + documentTotal + '篇)'",@click="getDocument")
                    mu-tab(value="tab2",:title="'评论('+commentTotal +'条)'",@click="getComment")
                    mu-tab(value="tab3",:title="'关注('+followTotal+'人)'",@click="getFollow")

                div(v-if="activeTab==='tab1'")
                    mu-list(v-for="document in documents",:key="document.id")
                        mu-list-item(:title="document.name",:describeText="document.time",:href="'/doc/id='+document.id")
                            mu-avatar(icon="assignment",backgroundColor="blue",slot="leftAvatar")
                            span(slot="rightAvatar") {{document.student_name}}
                    mu-pagination(:total="documentTotal",:current="documentCurrentPage",@pageChange="documentPageChange")
                    mu-col.center.aligned(desktop="100" style="margin:20px;")
                        mu-raised-button(icon="edit",label="撰写新文档",:to='"/team/new/doc/id="+ this.$route.params.id')
                    
                div(v-if="activeTab==='tab2'")
                    mu-paper
                        mu-list
                            mu-list-item(v-for="comment in comments",:key="comment.comment_id",:title="comment.name+'  '+comment.time", @click="commentReply(comment.comment_id, comment.name)")
                                mu-avatar(slot="left",:src="comment.head_img")
                                i.icon.star(slot="right")
                                span(slot="describe")
                                    span {{comment.details}}
                                mu-list-item(v-for="reply in comment.replies",:key="reply.id",:title="reply.name+'  '+reply.time")
                                    mu-avatar(slot="left",:src="reply.headimg")
                                    span(slot="describe")
                                        span {{reply.details}}
                    mu-pagination(:total="commentTotal",:current="commentCurrentPage",@pageChange="commentPageChange")
                    div.center.aligned(style='margin-top:20px')
                        mu-text-field(name="comment-input",hintText="不允许超过140个字符",:multiLine="true",:rowsMax="6",:maxLength="140",:fullWidth="true",v-model="newComment",:errorText ="commentErrorText")
                        mu-raised-button(label="评论",@click="submitComment")
                div(v-if="activeTab==='tab3'")
                    h4 他们对此感兴趣
                    mu-avatar(:src="follow.head_image", v-for="follow in follows", :key="follow.id", :label='follow.name', style='margin-right:10px;cursor:pointer', @click="redirectStudent(follow.id)")
                
        mu-dialog(:open="isDialogDeleteFollowDisplay",title="提示",@close="closeDeleteFollowConfirmDialog") 是否取消关注
            mu-flat-button(slot="actions",@click="closeDeleteFollowConfirmDialog",primary,label="取消")
            mu-flat-button(slot="actions",secondary,@click="deleteFollow",label="确定")
        mu-dialog(:open="isDialogDeleteMemberDisplay",title="提示",@close="closeDeleteMemberConfirmDialog") 是否删除小组成员 <b>{{toDeleteMember}}</b>
            mu-flat-button(slot="actions",@click="closeDeleteMemberConfirmDialog",primary,label="取消")
            mu-flat-button(slot="actions",secondary,@click="deleteMember",label="确定")
        mu-dialog(:open="isDialogAddMemberDisplay",title="提示",@close="closeAddMemberConfirmDialog") 是否添加小组成员 <b>{{toAddMember}}</b>
            mu-flat-button(slot="actions",@click="closeAddMemberConfirmDialog",primary,label="取消")
            mu-flat-button(slot="actions",secondary,@click="newMember",label="确定")
        mu-dialog(:open="isNoticeDialogDisplay",title="提示",@close="closeNoticeDialog") {{notice}}
            mu-flat-button(slot="actions",secondary,@click="closeNoticeDialog",label="确定")
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import DateTime from '@/common/datetime'
import Encode from '@/common/encode'

export default {
    name: 'details',
    components: {
        quillEditor
    },
    data() {
        return {
            isNoticeDialogDisplay: false,
            notice: '',

            team: {},                             //team details
            isTeamLeader: false,                 //is student a team leader flag

            follows: [],                          //Followers list
            followTotal: 0,
            isFollowed: false,                   //has student followed the team flag
            isDialogDeleteFollowDisplay: false,  //delete follow confirm dialog display flag

            members: [],                         //team members list
            isMemberManageDisplay: false,        //member manage div display flag
            isDialogDeleteMemberDisplay: false,  //delete member confirm dialog display flag
            isDialogAddMemberDisplay: false,     //add member confirm dialog display flag
            newMemberUsername: '',               //member name which to add.
            toDeleteMember: '',                  //name of member to delete.
            toDeleteMemberId: 0,                 //the id of member to delete.
            toAddMember: '',                     //name of member to add.
            toAddMemberId: 0,                    //the id of member to delete.
            isEditDisplay: false,                //team details editor display flag

            documents: [],                       //team documents list
            documentTotal: 0,                    //document total
            documentCurrentPage: 0,


            comments: [],                        //team comments list
            newComment: '',                      //student input comment
            activeTab: 'tab1',                   //current active tab
            commentTotal: 1,                     //comment total
            commentCurrentPage: 1,               //comment pagination current page
            commentErrorText: '',                //comment input error text
        }
    },
    mounted: function () {
        this.getTeam();
        this.getMember();
        if (this.$cookie.getCookie('sid')) {
            this.checkFollow();
            this.checkTeamLeader();
        }
        this.getDocumentCount()
        this.getDocument();
        this.getCommentCount();
        this.getFollowCount();
    },
    methods: {
        /*=======================================================================================*/
        /*= ##Page General ======================================================================*/
        /*=======================================================================================*/

        handleTabChange(val) {
            this.activeTab = val;
        },

        closeNoticeDialog() {
            this.isNoticeDialogDisplay = false;
        },

        redirectStudent(id){
            this.$router.push('/student/id=' + id);
        },
        /*=======================================================================================*/
        /*= ##TEAM ==============================================================================*/
        /*=======================================================================================*/

        /**
         * Load team details
         */
        getTeam() {
            var _this = this;
            //Load team details
            this.$db.getTeamDetails(this, { id: this.$route.params.id }).then(res => {
                _this.team = res[0];
                _this.team.time = DateTime.dateFormat(_this.team.time);
                document.title = this.team.name + ' - ' + this.$config.title;
            });
        },

        /**
         * CHECK: is the student a team leader.
         */
        checkTeamLeader() {
            var _this = this;
            this.$db.isStudentTeamLeader(this, { student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id }).then(res => {
                _this.isTeamLeader = res[0].is_team_leader == 1 ? true : false;
            });
        },

        /*=======================================================================================*/
        /*= ##FOLLOW ============================================================================*/
        /*=======================================================================================*/

        /**
         * Load follows count
         */
        getFollowCount() {
            var _this = this;
            this.$db.getTeamFollowCount(this, { team_id: this.$route.params.id }).then(res => {
                _this.followTotal = res[0].count;
            });
        },

        /*
         * Load follows
         */
        getFollow() {
            var _this = this;
            this.$db.getTeamFollow(this, { team_id: this.$route.params.id }).then(res => {
                _this.follows = res;
            });
        },

        /**
         * CHECK: has student followed the team.
         */
        checkFollow() {
            var _this = this;
            this.$db.isStudentFollowTeam(this, { student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id }).then(res => {
                _this.isFollowed = res == 1 ? true : false;
            });
        },

        /**
         * Follow the team
         */
        follow() {
            var _this = this;
            if (this.$cookie.getCookie('sid')) {
                if (this.isFollowed) {
                    //delete student follow
                    this.isDialogDeleteFollowDisplay = true; //open delete confirm dialog   
                }
                else {
                    //new student follow
                    this.$db.newStudentFollowTeam(this, { student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id }).then(res => {
                        if (res.insertId > 0) {
                            _this.isFollowed = true;
                        }
                    });
                }
            }
            else {
                location.href = '/login';
            }
        },

        /**
         * Delete follow
         */
        deleteFollow() {
            var _this = this;
            this.$db.delStudentFollowTeam(this, { student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id }).then(res => {
                if (res.affectedRows > 0) {
                    _this.isFollowed = false;
                }
            });
            //close confirmation dialog.
            this.closeDeleteFollowConfirmDialog();
        },

        /**
         * Close the delete follow confirm dialog
         */
        closeDeleteFollowConfirmDialog() {
            this.isDialogDeleteFollowDisplay = false;
        },

        /*=======================================================================================*/
        /*= ##MEMBER ============================================================================*/
        /*=======================================================================================*/

        /**
         * Load Teams member
         */
        getMember() {
            var _this = this;
            //Load team members
            this.$db.getTeamMember(this, { team_id: this.$route.params.id }).then(res => {
                _this.members = res;
            });
        },

        /**
         * Show manage member div.
         */
        toggleManageMemberDisplay() {
            this.isMemberManageDisplay = !this.isMemberManageDisplay;
        },

        /**
         * Hide member manage div
         */
        hideMemberManage() {
            this.isMemberManageDisplay = false;
        },

        /**
         * Close delete member confirm dialog
         */
        closeDeleteMemberConfirmDialog() {
            this.isDialogDeleteMemberDisplay = false;
        },

        /**
         * Show confirm delete dialog
         */
        showDeleteMemberConfirmDialog(id, name) {
            this.toDeleteMemberId = id;
            this.toDeleteMember = name;
            this.isDialogDeleteMemberDisplay = true;
        },

        /**
         * Delete member
         */
        deleteMember() {
            var _this = this;
            this.$db.delTeamMember(this, { id: this.toDeleteMemberId }).then(res => {
                if (res.affectedRows > 0) {
                    _this.getMember(); //Refresh Members
                    _this.closeDeleteMemberConfirmDialog();
                }
            });
        },

        /**
         * Show add member confirm dialog
         */
        showAddMemberConfirmDialog(id, name) {
            this.$db.searchStudentUsername(this, { username: this.newMemberUsername }).then(res => {
                if (res.length) {
                    this.toAddMemberId = res[0].id;
                    console.log(this.toAddMemberId);
                    this.toAddMember = res[0].name;
                    this.isDialogAddMemberDisplay = true;
                }
                else {
                    this.notice = '用户不存在.'
                    this.isNoticeDialogDisplay = true;
                }
            });
        },

        /**
         * Close add member confirm dialog
         */
        closeAddMemberConfirmDialog() {
            this.isDialogAddMemberDisplay = false;
        },

        /**
         * New Member
         */
        newMember() {
            var _this = this;
            this.$db.newTeamMember(this, { student_id: this.toAddMemberId, team_id: this.$route.params.id }).then(res => {
                if (res.insertId > 0) {
                    _this.getMember();
                    _this.closeAddMemberConfirmDialog();
                    _this.newMemberUsername = '';
                }
                else {
                    _this.notice = '成员已经存在.'
                    _this.isNoticeDialogDisplay = true;
                }
            });
        },

        /*=======================================================================================*/
        /*= ##DETAILS ===========================================================================*/
        /*=======================================================================================*/

        /**
         * Show team details editor
         */
        showDetailsEdit() {
            this.isEditDisplay = true;
        },
        submitEdit() {
            this.$db.setTeamDetails(this, { details: this.team.details, team_id: this.$route.params.id }).then(res => {
                if (res.affectedRows > 0) {
                    this.isEditDisplay = false;
                }
            });
        },
        cancelEdit() {
            this.isEditDisplay = false;
        },

        /*=======================================================================================*/
        /*= ##DOCUMENT ==========================================================================*/
        /*=======================================================================================*/
        getDocumentCount() {
            var _this = this;
            this.$db.getDocumentCount(this, { id: "team_id=" + this.$route.params.id }).then(res => {
                _this.documentTotal = res[0].count;
            });
        },
        getDocument() {
            var _this = this;
            this.$db.getDocument(this, { id: "team_id=" + this.$route.params.id, pagenum: this.documentCurrentPage, pagesize:10 }).then(res => {
                _this.documents = res;
                for (var i = 0; i < _this.documents.length; i++) {
                    _this.documents[i].time = DateTime.dateFormat(_this.documents[i].time);
                }
            });
        },
        documentPageChange(newIndex){
            this.documentCurrentPage = newIndex;
        },
        /*=======================================================================================*/
        /*= ##COMMENT ===========================================================================*/
        /*=======================================================================================*/

        getCommentCount() {
            var _this = this;
            this.$db.getTeamCommentCount(this, { team_id: this.$route.params.id }).then(res => {
                _this.commentTotal = res[0].count;
            });
        },
        getComment() {
            var _this = this;
            //Get all comments, without reply
            this.$db.getTeamComment(this, { pagesize: 10, pagenum: this.commentCurrentPage - 1, team_id: this.$route.params.id }).then(res => {
                _this.comments = res;

                _this.comments.forEach(function (e, i) {
                    //Time Format
                    _this.comments[i].details = Encode.htmlDecode(e.details);
                    _this.comments[i].time = DateTime.dateFormat(e.time);
                }, this);

            });
        },
        commentPageChange(newIndex) {
            this.commentCurrentPage = newIndex;
            this.getComment();
        },
        submitComment() {
            var _this = this;

            if (this.$cookie.getCookie('sid')) {
                if (this.newComment.trim()) {
                    this.$db.newTeamComment(this, {
                        team_id: this.$route.params.id,
                        details: Encode.htmlEncode(this.newComment),
                        student_id: this.$cookie.getCookie('sid')
                    }).then(res => {
                        if (res.insertId > 0) {
                            _this.newComment = '';
                            _this.commentErrorText = '';
                            _this.getComment();
                            _this.getCommentCount();
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                }
                else {
                    this.commentErrorText = '评论内容不能为空'
                }
            }
            else {
                location.href = '/login';
            }
        },
    }
}
</script>

<style scoped>
.mu-chip {
    margin: 10px;
}

.mu-td{
    width: 100%;
    height: auto;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden; 
}
</style>