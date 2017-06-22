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
                mu-chip(v-for="item in member",:key="item.id",@delete="deleteMember(item.id)",:showDelete="isMemberManageDisplay")
                    mu-avatar(:size="32",:src="item.head_image")
                    {{item.name}}
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

            mu-row(gutter)
            mu-tabs(:value="activeTab",@change="handleTabChange")
                mu-tab(value="tab1",title="项目文档资料")
                mu-tab(value="tab2",title="评论")
                mu-tab(value="tab3",title="关注")
            div(v-if="activeTab==='tab1'")
                mu-row(gutter)
                mu-col(desktop="100")
                    h4 项目组文档资料
                    mu-table(:showCheckbox="showCheckbox")
                        mu-thead
                            mu-tr
                                mu-th 文件名
                                mu-th 上传时间
                                mu-th 发布人
                                mu-th 操作
                        mu-tbody
                            mu-tr(v-for="item in teamDocument",:key="item.id")
                                mu-td
                                    a(:href="'/doc/id='+item.id") {{item.documentName}}
                                mu-td {{item.time}}
                                mu-td {{item.name}}
                                mu-td
                                    mu-raised-button(label="下载")
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    mu-raised-button(label="删除" @click="deleteDocument(item.id)")
                mu-col.center.aligned(desktop="100" style="margin:20px;")
                    mu-raised-button(label="上传新文件")
            div(v-if="activeTab==='tab2'")
                mu-row
                    mu-col(desktop="100" style="margin-bottom:20px;")
                        h4 评论(133条)
                        mu-col.center.aligned(desktop="100")
                            mu-text-field(hintText="不允许超过140个字符",:maxLength="140",fullWidth)
                            mu-raised-button(label="评论")
                        mu-paper
                            mu-list
                                mu-list-item(v-for="item in comment",:key="item.id",:title="item.name+'  '+item.time")
                                    mu-avatar(slot="left",:src="item.headimg")
                                    i.icon.star(slot="right")
                                    span(slot="describe")
                                        span {{item.detail}}
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

export default {
    name: 'details',
    components: {
        VueEditor
    },
    data() {
        return {
            team:[],                             //team details
            isTeamLeader: false,                 //is student a team leader flag

            isFollowed: false,                   //has student followed the team flag
            isDialogDeleteFollowDisplay: false,  //delete follow confirm dialog display flag

            isMemberManageDisplay: false,        //member manage div display flag
            newMemberName:'',                    //member name which to add.

            isEditDisplay:false,                 //team details editor display flag

            pageView: 330,
            showCheckbox:false,
            showDelete:false,
            showAdd:false,
            addIcon:"add",
            addMember:"添加新成员",
            showAddMember:false,
            member: [],
            comment: [
                {
                    detail:"感觉还真不错",
                    name: "秀逗",
                    headimg: "/static/img/team/404.png",
                    time: "2017-6-6",
                    is_top: true,
                }
            ],
            reply: [
                {
                    comment_id:"1",
                    detail: "是还蛮不错的",
                    name: "东哥",
                    headimg: "/static/img/team/404.png",
                    time: "2017-6-7"
                }
            ],
            teamDocument: [
                {
                    id:0,
                    documentName: "团队介绍整体资料",
                    time: "2017-6-8",
                    name: "TT"
                },
                {
                    id:1,
                    documentName: "团队介绍整11体资料",
                    time: "2017-6-8",
                    name: "TT"
                },
                {
                    id:2,
                    documentName: "团队介绍1111整体资料",
                    time: "2017-6-8",
                    name: "TT"
                }
            ],
            activeTab:'tab1',
        }
    },
    mounted: function () {
        this.loadTeam();
        if(this.$cookie.getCookie('sid')){
           this.checkFollow();
           this.checkTeamLeader();
        }
    },
    methods: {
        //Load team's details.
        loadTeam(){
            var _this = this;
            //Load team details
            TeamDB.getStudentTeamDetails(this, {id: this.$route.params.id}).then(res=>{
                _this.team = res[0];
                _this.team.time = DateTime.dateFormat(_this.team.time);
            });
            //Load team members
            TeamMemberDB.getStudentTeamMember(this, {team_id: this.$route.params.id}).then(res=>{
                _this.member = res;
            });
        },

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

        //determine: is the student a team leader.
        checkTeamLeader(){
            var _this = this;
            TeamDB.isStudentTeamLeader(this, {student_id: this.$cookie.getCookie('sid'), team_id: this.$route.params.id}).then(res=>{
                _this.isTeamLeader = res[0].is_team_leader == 1 ? true : false;
            });
        },

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
        deleteDocument(id) {
           
        },
        previewDocument() {
            this.dialog = true;
        },
        handleTabChange(val) {
            this.activeTab = val;
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