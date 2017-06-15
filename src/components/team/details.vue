<template lang="jade">
div.padded
    mu-paper(style="padding:10px")
        mu-content-block.para
            mu-row(gutter)
                mu-col.center.aligned(desktop="35",table="50",width="100")
                    img(src="/static/img/team/404.png", style='border:1px solid #eee',width="50%")
                mu-col(desktop="65",table="50",width="100")
                    h2(style="margin-top:10px;") 404
                        span(style="font-size:12px;font-weight: normal;float:right") （浏览量：{{pageView}}）
                    span 成立时间：2017年6月1日
                    p codea项目组，codea天空编程学院项目
                    
            mu-divider
            mu-row(gutter)
                h2(style="display:inline-block;") 项目成员
                    mu-flat-button(style="display:inline-block" label="管理成员" @click="manageMember")
                mu-col(desktop="100")
                    mu-chip(v-for="item in member",:key="item.id",@delete="deleteMember(item.id)",:showDelete="showDelete")
                        mu-avatar(:size="32",:src="item.headimg")
                        {{item.name}}
                mu-col(desktop="100")
                    mu-text-field(label="用户名" v-if="showAddMember")
                    mu-flat-button(:icon="addIcon",style="margin:10px",:label="addMember",v-if="showAdd",@click="addMb")
                    mu-flat-button(label="取消" backgroundColor="#f44336" color="white" v-if="showAddMember" @click="cancel")
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
                mu-col(desktop="100")
                    h4 评论(133条)
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

</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
    name: 'details',
    components: {
        VueEditor
    },
    data() {
        return {
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
            member: [
                {
                    headimg: "/static/img/team/404.png",
                    name: "东哥"
                },
                {
                    headimg: "/static/img/team/404.png",
                    name: "东哥"
                },
                {
                    headimg: "/static/img/team/404.png",
                    name: "东哥"
                },
                {
                    headimg: "/static/img/team/404.png",
                    name: "东哥"
                }
            ],
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
            ]
        }
    },
    mounted: function () {
        
    },
    methods: {
        manageMember() {
            this.showDelete = !this.showDelete;
            this.showAdd = !this.showAdd;
        },
        deleteMember(id) {
            this.member.splice(id,1);
        },
        addMb() {//点击添加新成员按钮
            this.showAddMember = !this.showAddMember;
            if(this.showAddMember){
                this.addIcon = "";
                this.addMember = "完成";
            }else{
                //往此添加新成员
                this.addIcon = "add";
                this.addMember = "添加新成员";
            }
        },
        cancel() {//取消添加成员
            this.showAddMember = !this.showAddMember;
            this.addIcon = "add";
            this.addMember = "添加新成员";
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