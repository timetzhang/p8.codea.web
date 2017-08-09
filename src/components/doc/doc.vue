<template lang="jade">
div.padded
    mu-paper(style='padding:10px 30px; margin-bottom: 15px;')
        mu-row
            mu-col(desktop="85")
                mu-text-field(label="搜索文档",style='width:100%',color="white",v-model="searchDetail")
            mu-col.aligned.center(desktop="15")
                mu-flat-button(label="搜索",style="margin:28px 0 12px 0;",:href='"/doc/search="+searchDetail')
    //Label filter condition
    mu-paper(style="padding:10px;")
        //Choose to view the document type
        span 选择查看类型：
        &nbsp;&nbsp;
        a(@click="chooseDocType(0)") 所有
        div(style="display:inline-block",v-for="item in docType",:key="item.id",@click="chooseDocType(item.id)")
            &nbsp;&nbsp;
            a {{item.name}}
        &nbsp;&nbsp;
        span 关键词：
        div.tag_list(v-for="(item,index) in tagList",:key="index",@click="removeTag(index)")
            em
                {{item}}&nbsp;&nbsp;x
        
    br
    mu-paper
        mu-tabs.api-view-tabs(:value="activeTab",@change="handleTabChange")
            mu-tab(value="tab1",title="讨论区")
            mu-tab(value="tab2",title="课程文档")
    
        // document
        div(v-if="activeTab === 'tab1'")
            //select type
            mu-tabs.api-view-tabs(:value="activeDoc",@change="handleDocChange")
                mu-tab(value="docTab1",title="所有",@click="handleDoc(1)")
                mu-tab(value="docTab2",title="最热",@click="handleDoc(2)")
                mu-tab(value="docTab3",title="精华",@click="handleDoc(3)")
                mu-tab(value="docTab4",title="周",@click="handleDoc(4)")
                mu-tab(value="docTab5",title="月",@click="handleDoc(5)")
            
            div(v-if="activeDoc === docTab")
                //Document display interface
                div(v-for="item in isTopDoc",:key="item.id")
                    doc_list(:studentHref="'/student/id=' + item.student_id",:docHref="'/doc/id='+item.id",:headimg="item.head_image",:name="item.student_name",:type="item.type_id",:time="item.time",:views="item.click_count",:comments="item.comment_count",:isLike="item.like_count",:title="item.name",:brief="item.brief",:tags="item.tag",:isSolved="item.isSolved",:is_top="item.is_top",:is_star="item.is_star",@listen-type="showTypePage",@listen-tag="showTagPage")
                div(v-for="item in docs",:key="item.id")
                    doc_list(:studentHref="'/student/id=' + item.student_id",:docHref="'/doc/id='+item.id",:headimg="item.head_image",:name="item.student_name",:type="item.type_id",:time="item.time",:views="item.click_count",:comments="item.comment_count",:isLike="item.like_count",:title="item.name",:brief="item.brief",:tags="item.tag",:isSolved="item.isSolved",:is_star="item.is_star",@listen-type="showTypePage",@listen-tag="showTagPage")
                //none document hint text
                div.center.aligned
                    h4 {{documentNoneHintText}}
                div(style="padding:20px;")
                    // Paging tool
                    div.center.aligned(style="padding:0 20px 20px 20px;")
                        mu-pagination(:total="docTotal",:current="current",@pageChange="switchPage",style="float:right",v-if="documentNoneHintText == ''")
                    br
                    hr
                    //Release the document
                    h2 发布 
                    mu-card#submit(style="border:1px solid #f0f0f0;padding:10px",v-if="sid > 0")
                        mu-row
                            mu-col.center.aligned(width="100",desktop="15",tablet="15")
                                mu-dropDown-menu(:value="docTypeValue",@change="checkoutType",:fullWidth="true")
                                    mu-menu-item(value="001",title="选择类型")
                                    mu-menu-item(v-for="item in docType",:key="item.id",:value="item.id",:title="item.name")
                            mu-col(width="100",desktop="85",tablet="85")
                                mu-text-field(label="标题",hintText="字数限制30字",:fullWidth="true",style="padding-bottom:0",v-model="document.title",:maxLength="30")
                            mu-col(desktop="100",tablet="100")
                                mu-text-field(label="关键词",hintText="请用逗号,分隔开来",:fullWidth="true",style="padding-bottom:0",v-model="document.tag")
                            mu-col(desktop="100",tablet="100")
                                mu-text-field(label="简介",hintText="对帖子进行一段简短的描述",:fullWidth="true",style="padding-bottom:0",:row="3",:rowMax="6",v-model="document.brief",:maxLength="140")
                        br
                        div
                            quill-editor(ref="editor",v-model="document.details",:options="editorOption")
                        br
                        mu-raised-button(label="发布",:fullWidth="true",primary,@click="submit")
                    //Not login
                    div.center.aligned(v-if="sid <= 0")
                        p 登录才能发布！
                        mu-raised-button(label="前往登陆",href="/login")
                mu-snackbar(v-if="snackbar",:message="snackbarContent",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")
        // course document tag
        div.center.aligned(v-if="activeTab === 'tab2'")
            mu-tabs.api-view-tabs(:value="activeMinTab",@change="handleMinTabChange")
                mu-tab(v-for="(item,index) in courseDoc",:key="index",:value="'minTab'+index",:title="item",@click="handleMenu(index)")
            mu-row(gutter,v-if="activeMinTab === timeNum")
                mu-col(desktop="25",v-for="item in filterBy(allMenuData,menuIndex,'subject_id')",:key="item.id")
                    a(@click="selectCourseTag(item.name)") {{item.name | filterBy(item,item.type_id,'type_id')}}
                        hr
        
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
            searchDetail: this.$route.params.search,
            //Switch interface
            activeDoc: 'docTab1',
            docTab : 'docTab1',
            activeTab: 'tab1',
            activeMinTab: 'minTab0',
            timeNum: 'minTab1', // time classify page index

            courseDoc: ['软件开发','硬件开发','艺术','创意课程'],
            allMenuData:[],// all course Document Data
            menuIndex: 1,// course Document subject index
            docTotal: 1,//page number
            current:100,//what page
            docType:[],//document all type
            getDocType:"all",
            getDocTypeNum:0,
            getTag:[],//筛选具有此tag的文档
            tagList:[],//Deletions tag to filter
            docTypeValue:'001',
            docs: [],//all doc
            isTopDoc: [],//置顶文档
            pageNum:0,//page number
            sid: this.$cookie.getCookie('sid'),
            editorOption: {
                placeholder: "请输入文档内容"
            },
            //data
            document:{},
            documentNoneHintText:"",

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
            this.documentNoneHintText = "";
            this.pagenum = 0;
            if(this.$route.params.search != '' && this.$route.params.tag != ''){
                this.$db.getDocument(this,{pagenum : this.pageNum, pagesize : 10, type: this.getDocType, typenum: this.getDocTypeNum, tag: this.arrayTransstring(), search:this.$route.params.search }).then(res => {
                    this.documentProcessing(res);
                });
                
                return false;
            }
            if(this.$route.params.search != ''){
                this.$db.getDocument(this,{pagenum : this.pageNum, pagesize : 10, type: this.getDocType, typenum: this.getDocTypeNum, search:this.$route.params.search }).then(res => {
                    this.documentProcessing(res);
                });

                return false;
            }
            if(this.$route.params.tag != ''){
                this.$db.getDocument(this,{pagenum : this.pageNum, pagesize : 10, type: this.getDocType, typenum: this.getDocTypeNum, tag: this.arrayTransstring() }).then(res => {
                    this.documentProcessing(res);
                });

                return false;
            }
        },
        documentProcessing(res){
            console.log(res);
            var _this = this;
            this.docs = res[0];
            if(res[0] != ''){
                this.isTopDoc = res[2];
            }else{
                this.isTopDoc = "";
            }
            if(res[1][0].count == 0){
                this.documentNoneHintText = "暂时没有此类文档以及提问！";
                this.docTotal = 1;
                return false;
            }
            this.docs.forEach(function(element) {
                if(element.time != null){
                    element.time = DateTime.getTimespan(element.time);
                }
            }, this);
            this.current = 0;
            this.$nextTick(function () {
                _this.current = 1;
                _this.docTotal = res[1][0].count;
            });
        },
        //this.getTag  Array => String 
        arrayTransstring(){
            var tagString = "";
            if(this.getTag.length != 0){
                this.getTag.forEach(function(element,i) {
                    if(i == 0){
                        tagString = element;
                    }else{
                        tagString = tagString + "," + element;
                    }
                }, this);
            }
            return tagString;
        },
        getDocumentType(){
            var _this = this;
            this.$db.getDocumentType(_this,{}).then(res => {
                _this.docType = res;
            })
        },
        chooseDocType(id){
            this.getDocTypeNum = id;
            this.getDocs();
        },
        // load all course data
        getMenu(){
            var _this = this;
            this.$db.getDocumentCourse(_this, {}).then(res => {
                _this.allMenuData = res;
            });
            this.handleMenu(0);
        },
        //Switch table
        handleDocChange(val) {
            this.activeDoc = val;
        },
        //get type and switch interface
        handleDoc(e) {
            this.docTab = 'docTab' + e;
            switch(e){
                case 1:
                    this.getDocType = "all";
                    this.getDocTypeNum = 0;//获取所有类型
                    this.getTag = [];
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
        //switch interface & NEXT PAGE
        switchPage(newIndex){
            var _this = this;
            this.pageNum = newIndex-1;
            this.$db.getDocument(this,{pagenum : this.pageNum, pagesize : 10,type: this.getDocType, typenum: this.getDocTypeNum, tag: this.arrayTransstring(), search:this.$route.params.search }).then(res => {
                _this.docs = res[0];
                _this.docs.forEach(function(element) {
                    if(element.time != null){
                        element.time = DateTime.getTimespan(element.time);
                    }
                }, this);
            })
        },
        //select course tag
        selectCourseTag(value){
            this.getTag.push(value);
            this.getDocType = "all";
            this.pageNum = 0;
            this.activeTab = "tab1";
            this.getDocs();
        },
        //switch type
        checkoutType(value){
            this.docTypeValue = value;
        },
        showTypePage(data){
            this.getDocTypeNum = data;
            this.getDocs();
        },
        showTagPage(data){
            this.getTag.push(data);
            this.addTag(data);
            this.getDocs();
        },
        addTag(data){
            if(this.tagList.indexOf(data) <= -1){
                this.tagList.push(data);
            }
        },
        //remove tag
        removeTag(index){
            var _this = this;
            this.getTag.forEach(function(element,i) {
                if(element == this.tagList[index]){
                    this.getTag.splice(i,1);
                }
            }, this);
            this.tagList.splice(index,1);
            this.$nextTick(function () {
                this.getDocs();
            });
        },
        //submit
        submit(){
            var _this = this;
            if (this.verify()){
                this.$db.newDocument(this,{
                    name : this.document.title,
                    type_id : this.docTypeValue,
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
a{
    cursor: pointer;
}

.tag_list {
    display: inline-block;
    margin: 3px 5px;
}
em{
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
    line-height: 1.6;
    font-size: 12px;
    font-style: normal;
    background-color: #969696;
    color: white;
    border-radius: 3px;
    overflow: hidden;
}
em:hover{
    background-color: #d1d1d1;
    color: rgb(239, 83, 80);
    cursor: pointer;
}
</style>