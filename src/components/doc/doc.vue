<template lang="jade">
div.padded
    mu-paper(style='padding:10px 30px; margin-bottom: 15px;')
        mu-text-field(label="搜索文档",style='width:100%',color="white")
    mu-paper
        mu-tabs.api-view-tabs(:value="activeTab",@change="handleTabChange")
            mu-tab(value="tab1",title="讨论区")
            mu-tab(value="tab2",title="课程文档")
        
        // issue 
        div(v-if="activeTab === 'tab1'")
            mu-tabs.api-view-tabs(:value="activeIssue",@change="handleIssueChange")
                mu-tab(value="issueTab1",title="所有",@click="handleIssue(1)")
                mu-tab(value="issueTab2",title="最新",@click="handleIssue(2)")
                mu-tab(value="issueTab3",title="最热",@click="handleIssue(3)")
                mu-tab(value="issueTab4",title="精华",@click="handleIssue(4)")
                mu-tab(value="issueTab5",title="周",@click="handleIssue(5)")
                mu-tab(value="issueTab6",title="月",@click="handleIssue(6)")
            
            div(v-if="activeIssue === issueTab")
                div(v-for="item in talkover",:key="item.id")
                    doc_list(:docHref="'/doc/id='+item.id",:headimg="item.headimg",:name="item.name",:type="item.type",:time="item.time",:views="item.views",:comments="item.comments",:isLike="item.isLike",:title="item.title",:breif="item.breif",:tags="item.tags",:isSolved="item.isSolved")
        // course document
        div.center.aligned(v-if="activeTab === 'tab2'")
            
            mu-tabs.api-view-tabs(:value="activeMinTab",@change="handleMinTabChange")
                mu-tab(v-for="(item,index) in courseDoc",:key="index",:value="'minTab'+index",:title="item",@click="handleMenu(index)")
            
            mu-row(gutter,v-if="activeMinTab === timeNum")
                mu-col(desktop="25",v-for="item in filterBy(allMenuData,menuIndex,'subject_id')",:key="item.id")
                    a(:href="'/doc/id'+item.id") {{item.name | filterBy(item,item.type_id,'type_id')}}
                        hr
        div(style="padding:20px;")
            mu-row
                mu-col(width="100",desktop="50")
                    mu-raised-button(label="下一页",:fullWidth="true")
                mu-col.center.aligned(width="100",desktop="50")
                    mu-pagination(:total="total",:current="current",@pageChange="switchPage",style="float:right")
            br
            hr
            h2 发布 
            mu-card(style="border:1px solid #f0f0f0;padding:10px")
                mu-row
                    mu-col(width="15",desktop="15")
                        mu-dropDown-menu(:value="docTypeValue",@change="checkoutType",:fullWidth="true")
                            mu-menu-item(value="0",title="选择类型")
                            mu-menu-item(v-for="(item,index) in docType",:key="index",:value="index",:title="item")
                    mu-col(width="85",desktop="85")
                        mu-text-field(label="标题",hintText="字数限制40字",:fullWidth="true",style="padding-bottom:0")
                    mu-col(desktop="100")
                        mu-text-field(label="关键词",hintText="请用逗号,分隔开来",:fullWidth="true",style="padding-bottom:0")
                br
                div
                    quill-editor(ref="editor")
                br
                mu-raised-button(label="发布",:fullWidth="true",primary)
        
</template>

<script>
import doc_list from '../common/doc_list.vue'
import { quillEditor } from 'vue-quill-editor'
export default {
    name: 'doc',
    components: {
        doc_list,
        quillEditor
    },
    data() {
        return {
            activeIssue: 'issueTab1',
            issueTab : 'issueTab1',
            activeTab: 'tab1',
            activeMinTab: 'minTab0',
            timeNum: 'minTab1', // time classify page index
            courseDoc: ['软件开发','硬件开发','艺术','创意课程'],
            allMenuData:[],// all course Document Data
            menuIndex: 1,// course Document subject index
            talkover: [// issue content
                {
                    id:0,
                    headimg:"/static/img/student/tt.jpg",
                    name:"TT",
                    type:"1",
                    time:"12小时前",
                    title:"Different behavior async/await in almost the same methods",
                    breif:"down votefavoriteI have not been able to edit the buttons as there is not way to use visual composer for the category page.I want to enter the name of each product instead of 'view product' which is currently on the button.",
                    tags:"java,c",
                    views:230,
                    comments:100,
                    isLike:200,
                    isSolved:''
                },
                {
                    id:1,
                    headimg:"/static/img/student/tt.jpg",
                    name:"TT",
                    type:"2",
                    time:"12小时前",
                    title:"Different behavior async/await in almost the same methods",
                    breif:"down votefavoriteI have not been able to edit the buttons as there is not way to use visual composer for the category page.I want to enter the name of each product instead of 'view product' which is currently on the button.down votefavoriteI have not been able to edit the buttons as there is not way to use visual composer for the category page.I want to enter the name of each product instead of 'view product' which is currently on the button.down votefavoriteI have not been able to edit the buttons as there is not way to use visual composer for the category page.I want to enter the name of each product instead of 'view product' which is currently on the button.",
                    tags:"java,c",
                    views:230,
                    comments:100,
                    isLike:200,
                    isSolved:'1',
                },
                {
                    id:1,
                    headimg:"/static/img/student/tt.jpg",
                    name:"TT",
                    type:"2",
                    time:"12小时前",
                    title:"Different behavior async/await in almost the same methods",
                    breif:"down votefavoriteI have not been able to edit the buttons as there is not way to use visual composer for the category page.I want to enter the name of each product instead of 'view product' which is currently on the button.",
                    tags:"java,c",
                    views:230,
                    comments:100,
                    isLike:200,
                    isSolved:'0',
                },
                {
                    id:3,
                    headimg:"/static/img/student/tt.jpg",
                    name:"TT",
                    type:"3",
                    time:"12小时前",
                    title:"Different behavior async/await in almost the same methods",
                    breif:"down votefavoriteI have not been able to edit the buttons as there is not way to use visual composer for the category page.I want to enter the name of each product instead of 'view product' which is currently on the button.",
                    tags:"java,ios",
                    views:230,
                    comments:100,
                    isLike:200,
                    isSolved:''
                }
            ],
            total: 50,//page number
            current:1,//what page
            docType:['文档','文章','提问'],
            docTypeValue:'0',
        }
    },
    mounted: function () {
        this.loadMenu();
        
    },
    methods: {
        // load all course data
        loadMenu(){
            var _this = this;
            this.$db.getDocumentCourse(_this, {}).then(res => {
                _this.allMenuData = res;
            });
            
            this.handleMenu(0);
        },
        //checkout table
        handleIssueChange(val) {
            this.activeIssue = val;
        },
        handleIssue(e) {
            this.issueTab = 'issueTab' + e;
        },
        handleTabChange(val) {
            this.activeTab = val;
        },
        handleMinTabChange(val) {
            this.activeMinTab = val;
        },
        handleMenu(e){
            this.timeNum = 'minTab'+e;
            this.menuIndex = e + 1;
        },
        //checkout page
        switchPage(){

        },
        //checkout type
        checkoutType(value){
            this.docTypeValue = value;
        }
    }
}
</script>

<style scoped>
.api-view-tabs {
    background-color: transparent;
    color: rgba(0,0,0,.87);
}
.api-view-tabs .mu-tab-active{
        color: #7e57c2;
        
}
.api-view-tabs .mu-tab-link{
    color: rgba(0,0,0,.54);
}
.badge {
    padding: 4px;
    background-color: #457cce;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    margin-left: 4px;
}


</style>