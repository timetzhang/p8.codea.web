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
                        mu-raised-button(icon="star",label="关注")
                    br
            mu-divider

            mu-row(gutter)
                h2(style="display:inline-block;") 项目成员
                    mu-flat-button(style="display:inline-block" label="管理成员" @click="manageMember")
                mu-col(desktop="100")
                    mu-chip(v-for="item in member",:key="item.id",@click="showMemberDetails(item.student_id)",@delete="deleteMember(item.id)",:showDelete="isMemberManage")
                        mu-avatar(:size="32",:src="item.head_image")
                        {{item.name}}
                mu-col(desktop="100")
                    mu-text-field(label="用户名",v-if="isMemberManage",@input="searchStudent")
                    mu-raised-button(label="添加新成员",v-if="isMemberManage",@click="addMember", secondary, style='margin-left:10px;')
                    mu-raised-button(label="取消",color="white",v-if="isMemberManage",@click="cancelMemberManage", secondary, style='margin-left:10px;')

            mu-divider

            mu-row.center.aligned(gutter)
                h2 项目详情
                mu-col(desktop="100")
                    div#brief(v-html="editContent" v-if="showBrief")
                    vue-editor(v-model="editContent" v-if="showEdit")
                    mu-raised-button(icon="edit",style="margin:20px;",:label="editState",@click="editBrief")
                    br
                    mu-raised-button(label="取消" style="margin-bottom:20px;"  backgroundColor="#f44336" color="white" v-if="showEdit" @click="cancelEdit")
                mu-divider
            mu-row(gutter)
                mu-col(desktop="100")
                    h3 他们对此感兴趣
                    mu-avatar(src="/static/img/team/404.png")
                mu-col(desktop="100" style="margin-bottom:20px;")
                    h4 评论(133条)
                    mu-col.center.aligned(desktop="100")
                        mu-text-field(hintText="不允许超过140个字符",:maxLength="140",:fullWidth="true")
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
            mu-divider
            mu-row(gutter)
                mu-col(desktop="100")
                    h2 项目组文档资料
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
</template>

<script>
import { VueEditor } from 'vue2-editor'
import DateTime from '@/common/datetime'

export default {
    name: 'details',
    components: {
        VueEditor
    },
    data() {
        return {
            team:[],
            isMemberManage: false,
            showBrief:true,
            showEdit:false,
            editState:"修改项目简介",
            editContent: '<h2>项目名称</h2><p>项目简介、包括图文</p>',
            details: [],
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
            ]
        }
    },
    mounted: function () {
        this.loadTeam();
    },
    methods: {
        loadTeam(){
            var _this = this;
            //Load team details
            this.$db.getStudentTeamDetails(this, {id: this.$route.params.id}).then(res=>{
                console.log(res[0])
                _this.team = res[0];
                _this.team.time = DateTime.dateFormat(_this.team.time);
            });
            //Load team members
            this.$db.getStudentTeamMember(this, {team_id: this.$route.params.id}).then(res=>{
                _this.member = res;
            });
        },
        manageMember() {
            this.isMemberManage = !this.isMemberManage;
        },
        searchStudent(e){
            console.log(e);
        },
        showMemberDetails(){

        },
        deleteMember(id) {

        },
        addMember() {//点击添加新成员按钮
            
        },
        cancelMemberManage() {//取消添加成员
            this.isMemberManage = false;
        },
        editBrief() {
            this.showBrief = !this.showBrief;
            this.showEdit = !this.showEdit;
            if (this.showEdit){
                this.editState = "完成";
            }else{
                this.editState = "修改项目简介";
            }
        },
        cancelEdit() {
            this.showBrief = !this.showBrief;
            this.showEdit = !this.showEdit;
            this.editState = "修改项目简介";
        },
        deleteDocument(id) {
           
        },
        previewDocument() {
            this.dialog = true;
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
</style>