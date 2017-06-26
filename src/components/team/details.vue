<template lang="jade">
div.padded
    mu-paper(style="padding:10px")
        mu-content-block.para
            mu-row(gutter)
                mu-col(desktop="15",table="50",width="100")
                    img(:src="team.logo_url", style='border:1px solid #eee',width="100%")
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
                mu-chip(v-for="member in members",:key="member.id",@delete="deleteMember(member.id)",:showDelete="isMemberManageDisplay")
                    mu-avatar(:size="32",:src="member.head_image")
                    {{member.name}}
            div(v-if="isMemberManageDisplay")
                mu-text-field(label="用户名",v-model="newMemberName")
                mu-raised-button(label="添加新成员",@click="addMember", secondary, style='margin-left:10px;')
                mu-raised-button(label="取消",@click="cancelMemberManage", primary, style='margin-left:10px;')

            mu-divider

            h2 项目详情
            div(v-html="team.details" v-if="!isEditDisplay")
            div.center.aligned
                mu-raised-button(icon="edit",style="margin:20px;",label="修改项目简介",v-if="isTeamLeader && !isEditDisplay",@click="detailsEdit")
                vue-editor(v-model="team.details" v-if="isEditDisplay")
                mu-raised-button(label="提 交",style="margin:10px 0",v-if="isEditDisplay",@click="submitEdit")
                span &nbsp;
                mu-raised-button(label="取 消",style="margin:10px 0",v-if="isEditDisplay",@click="cancelEdit")
            
            mu-divider

            mu-tabs(:value="activeTab",@change="handleTabChange")
                mu-tab(value="tab1",title="项目组文档资料")
                mu-tab(value="tab2",title="评论")
                mu-tab(value="tab3",title="关注")

            div(v-if="activeTab==='tab1'")
                h4 项目组文档资料
                mu-table(:showCheckbox='false',:selectable='false')
                    mu-thead
                        mu-tr
                            mu-th 文件名
                            mu-th 上传时间
                            mu-th 发布人
                            mu-th 操作
                    mu-tbody
                        mu-tr(v-for="doc in documents",:key="doc.document_id")
                            mu-td
                                a(:href="'/doc/id='+doc.document_id") {{doc.document_name}}
                            mu-td {{doc.time}}
                            mu-td {{doc.student_name}}
                            mu-td.right.aligned
                                a(:href="'/doc/id='+doc.document_id")
                                    mu-raised-button(label="查看")
                mu-col.center.aligned(desktop="100" style="margin:20px;")
                    mu-raised-button(icon="edit",label="撰写新文档")

            div(v-if="activeTab==='tab2'")
                mu-row
                    mu-col(desktop="100" style="margin-bottom:20px;")
                        h4 评论({{comments.length}}条)
                        mu-col.center.aligned(desktop="100")
                            mu-text-field(hintText="不允许超过140个字符",:maxLength="140",:fullWidth="true")
                            mu-raised-button(label="评论")
                        mu-paper
                            mu-list
                                mu-list-item(v-for="comment in comments",:key="comment.comment_id",:title="comment.name+'  '+comment.time")
                                    mu-avatar(slot="left",:src="comment.head_img")
                                    i.icon.star(slot="right")
                                    span(slot="describe")
                                        span {{comment.details}}
                                    mu-list-item(v-for="list in reply",:key="list.id",:title="list.name+'  '+list.time")
                                        mu-avatar(slot="left",:src="list.headimg")
                                        span(slot="describe")
                                            span {{list.detail}}

            div(v-if="activeTab==='tab3'")
                mu-row(gutter)
                    mu-col(desktop="100")
                        h4 他们对此感兴趣
                        mu-avatar(src="/static/img/team/404.png")
                
    mu-dialog(:open="isDialogDeleteFollowDisplay",title="Dialog",@close="closeDeleteFollowConfirmDialog") 是否取消关注
        mu-flat-button(slot="actions",@click="closeDeleteFollowConfirmDialog",primary,label="取消")
        mu-flat-button(slot="actions",secondary,@click="deleteFollow",label="确定")
</template>

<script>
import { VueEditor } from 'vue2-editor'
import DateTime from '@/common/datetime'
import TeamDB from '@/db/student.team'
import TeamFollowDB from '@/db/student.team.follow'
import TeamMemberDB from '@/db/student.team.member'
import TeamDocumentDB from '@/db/student.team.document'
import TeamCommentDB from '@/db/student.team.comment'
import Config from '@/common/config'

export default {
    name: 'details',
    components: {
        VueEditor
    },
    data() {
        return {
            team:{},                             //team details
            isTeamLeader: false,                 //is student a team leader flag

            isFollowed: false,                   //has student followed the team flag
            isDialogDeleteFollowDisplay: false,  //delete follow confirm dialog display flag

            isMemberManageDisplay: false,        //member manage div display flag
            newMemberName:'',                    //member name which to add.
            members: [],

            isEditDisplay:false,                 //team details editor display flag

            documents: [],                       //team documents list
            
            comments: [],                        //team comments
            
            activeTab:'tab1',                    //current active tab
        }
    },
    mounted: function () {
        this.loadTeam();
        if(this.$cookie.getCookie('sid')){
           this.checkFollow();
           this.checkTeamLeader();
        }
        this.loadDocument();
        this.loadComment();
    },
    methods: {
        //Load team's details.
        loadTeam(){
            var _this = this;
            //Load team details
            TeamDB.getStudentTeamDetails(this, {id: this.$route.params.id}).then(res=>{
                _this.team = res[0];
                _this.team.time = DateTime.dateFormat(_this.team.time);
                document.title = this.team.name + ' - ' + Config.title;
            });
            //Load team members
            TeamMemberDB.getStudentTeamMember(this, {team_id: this.$route.params.id}).then(res=>{
                _this.members = res;
            });
        },

        //determine: is the student a team leader.
        checkTeamLeader(){
            var _this = this;
            TeamDB.isStudentTeamLeader(this, {student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id}).then(res=>{
                _this.isTeamLeader = res[0].is_team_leader == 1 ? true : false;
            });
        },

        //tabs
        handleTabChange(val) {
            this.activeTab = val;
        },

        /* Follow */

        //check: has student followed the team.
        checkFollow(){
            var _this = this;
            TeamFollowDB.isStudentTeamFollowed(this, {student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id}).then(res=>{
                _this.isFollowed = res == 1? true : false;
            });
        },

        //follow the team
        follow(){
            var _this = this;
            if(this.isFollowed){
                //delete student follow
                this.isDialogDeleteFollowDisplay = true; //open delete confirm dialog   
            }
            else{
                //new student follow
                TeamFollowDB.newStudentTeamFollow(this, {student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id}).then(res=>{
                    if(res.insertId > 0){
                        _this.isFollowed = true;
                    }             
                }); 
            }
            
        },

        //delete follow
        deleteFollow(){
            var _this = this;
            TeamFollowDB.delStudentTeamFollow(this, {student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id}).then(res=>{
                if(res.affectedRows > 0){
                    _this.isFollowed = false;
                }             
            });
            //close confirmation dialog.
            this.closeDeleteFollowConfirmDialog();
        },

        closeDeleteFollowConfirmDialog(){
            this.isDialogDeleteFollowDisplay = false;
        },     

        /* Manage Member */

        //to show manage member div.
        toggleManageMemberDisplay() {
            this.isMemberManageDisplay = !this.isMemberManageDisplay;
        },

        cancelMemberManage() { //取消添加成员
            this.isMemberManageDisplay = false;
        },

        /* Details */
        detailsEdit(){
            this.isEditDisplay = true;
        },
        submitEdit() {
            TeamDB.setStudentTeamDetails(this, {details: this.team.details, team_id: this.$route.params.id}).then(res=>{
                if(res.affectedRows > 0){
                    this.isEditDisplay = false;
                }
            });
        },
        cancelEdit() {
            this.isEditDisplay = false;
        },

        /* Document */
        loadDocument(){
            var _this = this;
            TeamDocumentDB.getStudentTeamDocument(this, {team_id: this.$route.params.id}).then(res=>{
                _this.documents = res;
                for(var i=0; i<_this.documents.length; i++){
                    _this.documents[i].time = DateTime.dateFormat(_this.documents[i].time);
                }
            });
        },

        /* Comment */
        loadComment(){
            var _this = this;
            TeamCommentDB.getStudentTeamComment(this,{pagesize:10, pagenum:0, team_id: this.$route.params.id}).then(res=>{
                _this.comments = res;
                console.log(res);
                for(var i=0; i<_this.comments.length; i++){
                    _this.comments[i].time = DateTime.dateFormat(_this.comments[i].time);
                }
            });
        }
    }
}
</script>

<style scoped>
.mu-chip {
    margin: 10px;
}
.mu-td {
    word-wrap: break-word !important;
}
.mu-tab-active {
    background-color: #457cce;
    color:white;
}
</style>