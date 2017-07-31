<template lang="jade">
div.padded
    mu-paper(style='padding:10px 30px; margin-bottom: 15px;')
        mu-text-field(label="搜索文档",style='width:100%',color="white")
    mu-paper
        mu-tabs.api-view-tabs(:value="activeTab",@change="handleTabChange")
            mu-tab(value="tab1",title="讨论区")
            mu-tab(value="tab2",title="课程文档")
        
        // document
        div(v-if="activeTab === 'tab1'")
            mu-tabs.api-view-tabs(:value="activeDoc",@change="handleDocChange")
                mu-tab(value="docTab1",title="所有",@click="handleDoc(1)")
                mu-tab(value="docTab2",title="最热",@click="handleDoc(2)")
                mu-tab(value="docTab3",title="精华",@click="handleDoc(3)")
                mu-tab(value="docTab4",title="周",@click="handleDoc(4)")
                mu-tab(value="docTab5",title="月",@click="handleDoc(5)")
            
            div(v-if="activeDoc === docTab")
                div(v-for="item in docs",:key="item.id")
                    doc_list(:docHref="'/doc/id='+item.id",:headimg="item.head_image",:name="item.student_name",:type="item.type_id",:time="item.time",:views="item.click_count",:comments="item.comment_count",:isLike="item.like_count",:title="item.name",:brief="item.brief",:tags="item.tag",:isSolved="item.isSolved",:elite="item.elite")

        // course document tag
        div.center.aligned(v-if="activeTab === 'tab2'")
            
            mu-tabs.api-view-tabs(:value="activeMinTab",@change="handleMinTabChange")
                mu-tab(v-for="(item,index) in courseDoc",:key="index",:value="'minTab'+index",:title="item",@click="handleMenu(index)")
            
            mu-row(gutter,v-if="activeMinTab === timeNum")
                mu-col(desktop="25",v-for="item in filterBy(allMenuData,menuIndex,'subject_id')",:key="item.id")
                    a(:href="'/doc/id'+item.id") {{item.name | filterBy(item,item.type_id,'type_id')}}
                        hr
        div(style="padding:20px;")
            div.center.aligned(style="padding:20px;")
                mu-pagination(:total="docTotal",:current="current",@pageChange="switchPage",style="float:right")
            br
            hr
            h2 发布 
            mu-card#submit(style="border:1px solid #f0f0f0;padding:10px",v-if="sid > 0")
                mu-row
                    mu-col(width="15",desktop="15")
                        mu-dropDown-menu(:value="docTypeValue",@change="checkoutType",:fullWidth="true")
                            mu-menu-item(value="001",title="选择类型")
                            mu-menu-item(v-for="(item,index) in docType",:key="index",:value="index",:title="item.name")
                    mu-col(width="85",desktop="85")
                        mu-text-field(label="标题",hintText="字数限制40字",:fullWidth="true",style="padding-bottom:0",v-model="document.title")
                    mu-col(desktop="100")
                        mu-text-field(label="关键词",hintText="请用逗号,分隔开来",:fullWidth="true",style="padding-bottom:0",v-model="document.tag")
                    mu-col(desktop="100")
                        mu-text-field(label="简介",hintText="对帖子进行一段简短的描述",:fullWidth="true",style="padding-bottom:0",:row="3",:rowMax="6",v-model="document.brief")
                br
                div
                    quill-editor(ref="editor",v-model="document.details",:options="editorOption")
                br
                mu-raised-button(label="发布",:fullWidth="true",primary,@click="submit")
            div.center.aligned(v-if="sid <= 0")
                p 登录才能发布！
                mu-raised-button(label="前往登陆",href="/login")
        mu-snackbar(v-if="snackbar",:message="snackbarContent",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")
</template>

<script>
import doc_list from '../common/doc_list.vue'
import { quillEditor } from 'vue-quill-editor'
import Encode from '@/common/encode'
import DateTime from '@/common/datetime'

export default {
    name: 'doc',
    components: {
        doc_list,
        quillEditor
    },
    data() {
        return {
            activeDoc: 'docTab1',
            docTab : 'docTab1',
            activeTab: 'tab1',
            activeMinTab: 'minTab0',
            timeNum: 'minTab1', // time classify page index
            courseDoc: ['软件开发','硬件开发','艺术','创意课程'],
            allMenuData:[],// all course Document Data
            menuIndex: 1,// course Document subject index
            docTotal: 1,//page number
            current:1,//what page
            docType:[],//document all type
            getDocType:"all",
            docTypeValue:'001',
            docs: [],//all doc
            pageNum:0,//page number
            sid: this.$cookie.getCookie('sid'),
            editorOption: {
                placeholder: "请输入文档内容"
            },
            //data
            document:{},

            snackbar: false,
            snackbarContent: '',
        }
    },
    mounted: function () {
        this.getDocs();
        this.getDocumentType();
        this.getMenu();
    },
    methods: {
        getDocs(){
            var _this = this;
            this.$db.getDocument(this,{pagenum : this.pageNum, pagesize : 10, type: this.getDocType}).then(res => {
                _this.docs = res[0];
                if(res[1][0].count == 0){
                    return false;
                }
                _this.docs.forEach(function(element) {
                    element.time = DateTime.getTimespan(element.time);
                }, this);
                _this.docTotal = res[1][0].count;
            })
        },
        getDocumentType(){
            var _this = this;
            this.$db.getDocumentType(_this,{}).then(res => {
                _this.docType = res;
            })
        },
        // load all course data
        getMenu(){
            var _this = this;
            this.$db.getDocumentCourse(_this, {}).then(res => {
                _this.allMenuData = res;
            });
            this.handleMenu(0);
        },
        //checkout table
        handleDocChange(val) {
            this.activeDoc = val;
        },
        handleDoc(e) {
            this.docTab = 'docTab' + e;
            switch(e){
                case 1:
                    this.getDocType = "all";
                    break;
                case 2:
                    this.getDocType = "hot";
                    break;
                case 3:
                    this.getDocType = "star";
                    break;
                case 4:
                    this.getDocType = "week";
                    break;
                case 5:
                    this.getDocType = "month";
                    break;
                default:
                    break;
            }
            this.getDocs()
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
        //checkout page & NEXT PAGE
        switchPage(newIndex){
            var _this = this;
            this.pageNum = newIndex-1;
            this.$db.getDocument(this,{pagenum : this.pageNum, pagesize : 10}).then(res => {
                _this.docs = res[0];
                _this.docs.forEach(function(element) {
                    element.time = DateTime.getTimespan(element.time);
                }, this);
            })
        },
        //checkout type
        checkoutType(value){
            this.docTypeValue = value;
        },
        //submit
        submit(){
            var _this = this;
            if (this.verify()){
                this.$db.newDocument(this,{
                    name : this.document.title,
                    type_id : this.docTypeValue + 1,
                    brief : this.document.brief,
                    details : Encode.htmlEncode(this.document.details),
                    student_id : this.sid,
                    tag : this.document.tag,
                }).then(res => {
                    _this.snackbarContent = "发布成功";
                    _this.getDocs();
                    _this.showSnackbar();
                    _this.clearmit();
                    _this.returnTop();
                });
            }
        },
        // clear form
        clearmit(){
            this.document.title = "";
            this.docTypeValue = "";
            this.document.brief = "";
            this.document.details = "";
            this.document.tag = "";
        },
        returnTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        verify(){
            return this.document.title && this.docTypeValue && this.document.tag && this.document.brief && this.document.details && this.sid;
        },

        showSnackbar () {
            this.snackbar = true
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
        },
        hideSnackbar () {
            this.snackbar = false
            if (this.snackTimer) clearTimeout(this.snackTimer)
        },
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