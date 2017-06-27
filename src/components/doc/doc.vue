<template lang="jade">
div.padded
    mu-paper(style='padding:10px 30px; margin-bottom: 15px;')
        mu-text-field(label="搜索文档",style='width:100%',color="white")
    mu-paper
        mu-tabs.api-view-tabs(:value="activeTab",@change="handleTabChange")
            mu-tab(value="tab1",title="课程文档")
            mu-tab(value="tab2",title="项目组文档")

        div.center.aligned(v-if="activeTab === 'tab1'")
            mu-tabs.api-view-tabs(:value="activeMinTab",@change="handleMinTabChange")
                mu-tab(value="minTab1",title="软件开发",@click="handleMenu(1)")
                mu-tab(value="minTab2",title="硬件开发",@click="handleMenu(2)")
                mu-tab(value="minTab3",title="艺术",@click="handleMenu(3)")
                mu-tab(value="minTab4",title="创意课程",@click="handleMenu(4)")
            mu-row(gutter,v-if="activeMinTab === minNum")
                mu-col(desktop="25",v-for="item in menu",:key="item.id")
                    h4 {{item.name}}
                    p(v-for="list in item.course",:key="list.id") {{list.name}}
           
        div(v-if="activeTab === 'tab2'")

                
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
    name: 'doc',
    data() {
        return {
            activeTab: 'tab1',
            activeMinTab: 'minTab1',
            minNum: 'minTab1',
            menu: [],
            documents:[
                {
                    id : 0,
                    name : "团队整体介绍资料",
                    time : "2016-6-3",
                    type : "note",
                    student : "秀逗",
                    breif: '这个是关于我们团队的介绍',
                    headimg : "/static/img/team/404.png"
                },
                {
                    id : 1,
                    name : "404项目介绍资料",
                    time : "2016-6-3",
                    type : "note",
                    student : "秀逗",
                    breif: '这个是关于我们团队项目的介绍',
                    headimg : "/static/img/team/404.png"
                },
                {
                    id : 2,
                    name : "团队整体介绍资料",
                    time : "2016-6-3",
                    type : "note",
                    student : "秀逗",
                    breif: '一条简单的介绍',
                    headimg : "/static/img/team/404.png"
                }
            ]
        }
    },
    mounted: function () {
        this.handleMenu(1);
    },
    methods: {
        
        handleTabChange(val) {
            this.activeTab = val;
        },
        handleMinTabChange(val) {
            this.activeMinTab = val;
        },
        handleMenu(e){
            var _this = this;
            this.minNum = 'minTab'+e;
            CourseDB.getCourseType(_this, { subject_id: e }).then(res => {
                res.forEach(function(e,i) {
                    CourseDB.getCourse(_this,{type_id:e.id}).then(re => {
                        e["course"] = re;
                    })
                }, this);
                _this.menu.splice(0,_this.menu.length);
                _this.menu = res;
                console.log(_this.menu);
            });
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
</style>