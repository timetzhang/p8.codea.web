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

</template>

<script>
import doc_list from '../common/doc_list.vue';
export default {
    name: 'doc',
    components: {
        doc_list
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
                    breif:"down votefavoriteI have not been able to edit the buttons as there is not way to use visual composer for the category page.I want to enter the name of each product instead of 'view product' which is currently on the button.",
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
            ]
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