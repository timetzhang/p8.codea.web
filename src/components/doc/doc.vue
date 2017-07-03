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
                    mu-row(gutter,style="padding:10px;")
                        mu-col.center.aligned(desktop="10",style="padding:3% 0;")
                            span(style="padding:6% 0") 未解决
                        mu-col(desktop="65")
                            p
                                a(:href="'/doc/issueid='+item.id") {{item.issue}}
                            span.badge(v-for="tag in item.tags") {{tag}}
                        mu-col(desktop="25")
                            p(style="font-size:12px") 最后一条回复于{{item.releaseTime}}
                            div(style="font-size:12px;")
                                span 回复量({{item.replyNum}})
                    mu-divider

        // course document
        div.center.aligned(v-if="activeTab === 'tab2'")
            
            mu-tabs.api-view-tabs(:value="activeMinTab",@change="handleMinTabChange")
                mu-tab(v-for="(item,index) in courseDoc",:key="index",:value="'minTab'+index",:title="item",@click="handleMenu(index)")
            
            mu-row(gutter,v-if="activeMinTab === timeNum")
                mu-col(desktop="25",v-for="item in filterBy(allMenuData,menuIndex,'subject_id')",:key="item.id")
                    a(:href="'/doc/doc_list='+item.id") {{item.name | filterBy(item,item.type_id,'type_id')}}
                        hr

</template>

<script>

export default {
    name: 'doc',
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
                    issue:"Different behavior async/await in almost the same methods",
                    student:"Sandune",
                    replyNum:"230",
                    viewNum:"600",
                    followNum:"130",
                    tags:["java","js"],
                    releaseTime:"2017-6-25",//发布时间
                    isTrue:"1",//问题是否已解决
                },
                {
                    id:1,
                    issue:"Different behavior async/await in almost the same methods",
                    student:"Sandune",
                    replyNum:"230",
                    viewNum:"600",
                    followNum:"130",
                    tags:["c",".net"],
                    releaseTime:"2017-6-25",//发布时间
                    isTrue:"1",//问题是否已解决
                },
                {
                    id:2,
                    issue:"Different behavior async/await in almost the same methods",
                    student:"Sandune",
                    replyNum:"230",
                    viewNum:"600",
                    followNum:"130",
                    tags:["ios","swift"],
                    releaseTime:"2017-6-25",//发布时间
                    isTrue:"1",//问题是否已解决
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