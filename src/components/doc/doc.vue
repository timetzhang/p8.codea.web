<template lang="jade">
    div.padded.container
        mu-paper(style='padding:10px 30px; margin-bottom: 15px;')
            mu-row
                mu-col(desktop="75", style="padding-top: 5px;")
                    mu-text-field(hintText="搜索文档",color="white",v-model="searchKeyword", :fullWidth='true')
                mu-col.aligned.center(desktop="10")
                    mu-raised-button(label="搜索",icon="search",:to='"/doc/search="+searchKeyword', :fullWidth='true', style="margin-top:13px")
                mu-col.aligned.center(desktop="10")
                    mu-raised-button(label="添加",icon="add", :fullWidth='true', style="margin-top:13px", @click="openAddDialog")
            b(v-if="tags.length > 0") 关键词：
            div.tag_list(v-for="(item,index) in tags",:key="index",@click="delTag(index)")
                em {{item}}&nbsp;&nbsp;x
        mu-paper
            mu-tabs.api-view-tabs(:value="activeSubjectTab",@change="handleSubjectTabChange")
                mu-tab(:value="0",title="讨论")
                mu-tab(:value="1",title="课程")

            div(v-if="activeSubjectTab === 0")
                mu-tabs.api-view-tabs(:value="activeSortTab",@change="handleSortTabChange")
                    mu-tab(:value="0",title="所有")
                    mu-tab(:value="1",title="最热")
                    mu-tab(:value="2",title="精华")
                div#doc-list
                    div(v-for="item in docs",:key="item.id")
                        doc_list(:studentHref="'/student/id=' + item.student_id",:docHref="'/doc/id='+item.id",:headimg="item.head_image",:name="item.student_name",:type="item.type_id",:time="item.time",:views="item.click_count",:comments="item.comment_count",:isLike="item.like_count",:title="item.name",:brief="item.brief",:tags="item.tag",:isSolved="item.isSolved",:is_star="item.is_star",@listen-type="setDocType",@listen-tag="newTag")
                    div.center.aligned(v-if='docEmptyHint',style='padding-bottom:1px; color:#457cce')
                        h4 {{docEmptyHint}}
                    div.center.aligned(v-if="isMoreDoc")
                        mu-flat-button(label="点击载入更多",@click="getMoreDoc")

            div.center.aligned(v-if="activeSubjectTab === 1")
                mu-tabs.api-view-tabs(:value="activeCourseTypeTab",@change="handleCourseTypeTabChange")
                    mu-tab(v-for="(item,index) in courseType",:key="index",:value="index",:title="item")
                mu-row(gutter,style="padding-top:10px")
                    mu-col(desktop="25",v-for="item in filterBy(courses, courseSubjectIndex, 'subject_id')", :key="item.id")
                        a(@click="newTag(item.name)") {{item.name}}
                        hr

        mu-snackbar.snackbar(v-if="isSnackbarDisplay",:message="snackbarMessage",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")

        mu-dialog(:open="isDialogAddDisplay",title="请选择添加的类型")
            mu-row
                mu-col(desktop="50", width="50")
                    mu-raised-button(label="文档", secondary, to="/doc/new/type=1", :fullWidth="true")
                mu-col(desktop="50", width="50")
                    mu-raised-button(label="提问", secondary, to="/doc/new/type=2", :fullWidth="true")
            mu-flat-button(slot="actions",@click="closeAddDialog",primary,label="取消")
                
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
            //doc typies
            docTypies: [],//all document typies

            //active tabs flag
            activeSubjectTab: 0,
            activeSortTab: 0,
            activeCourseTypeTab: 0,

            //courses
            courseType: ['软件开发', '硬件开发', '艺术', '创意课程'],
            courses: [],// all course Document Data
            courseSubjectIndex: 1,

            //tags
            tags: [],

            //docs
            docs: [],//all doc
            docType: 0,
            docCurrentPage: 0,
            docSort: "all",
            docEmptyHint: "",
            isMoreDoc: true,

            //editors
            editorOption: {
                placeholder: "请输入文档内容"
            },

            //snackbar
            isSnackbarDisplay: false,
            snackbarMessage: '',

            //others
            isDialogAddDisplay: false,

            //search
            searchKeyword: '',
        }
    },
    mounted: function () {
        this.getDoc();
        this.getCourses();
    },
    watch: {
        activeSortTab: function () {
            this.clearDocList();
            switch (this.activeSortTab) {
                case 0:
                    this.docSort = "all";
                    break;
                case 1:
                    this.docSort = "hot";
                    break;
                case 2:
                    this.docSort = "star";
                    break;
            }
            this.getDoc();
        },
        activeCourseTypeTab: function () {
            this.courseSubjectIndex = this.activeCourseTypeTab + 1;
        }
    },
    methods: {
        /* TAB CHANGE HANDLER ************************************************************************************************/
        handleSubjectTabChange(val) {
            this.activeSubjectTab = val;
        },
        handleSortTabChange(val) {
            this.activeSortTab = val;
        },
        handleCourseTypeTabChange(val) {
            this.activeCourseTypeTab = val;
        },

        /* COURSES ***********************************************************************************************************/
        getCourses() {
            var _this = this;
            this.$db.getDocumentCourse(_this, {}).then(res => {
                _this.courses = res;
            });
        },

        /* TAGS **************************************************************************************************************/
        delTag(index) {
            var _this = this;
            this.tags.forEach(function (element, i) {
                if (element == this.tags[index]) {
                    this.tags.splice(i, 1);
                }
            }, this);
            this.tags.splice(index, 1);

            this.$nextTick(function () {
                this.clearDocList();
                this.getDoc();
            });
        },

        newTag(value) {
            if (this.tags.indexOf(value) <= -1) {
                this.tags.push(value);
                this.docSort = "all";
                this.docCurrentPage = 0;
                this.activeSubjectTab = 0;
                this.clearDocList();
                this.getDoc();
            } else {
                this.showSnackbar('该标签已经存在')
            }
        },

        /* DOCS **************************************************************************************************************/
        getDoc() {
            var _this = this;
            this.documentNoneHintText = "";
            var options = {
                pagenum: this.docCurrentPage,
                pagesize: 10,
                sort: this.docSort
            }
            if (this.tags.length > 0) {
                options.tag = this.tags.join(',');
            }
            if (this.docType) {
                options.type = this.docType;
            }
            this.$db.getDocument(this, options).then(res => {
                if (res.length > 0) {

                    // fill data
                    res.forEach(function (element) {
                        this.docs.push(element)
                    }, this);

                    // format time
                    this.docs.forEach(function (element) {
                        if (element.time != null) {
                            element.time = DateTime.getTimespan(element.time);
                        }
                    }, this);
                }
                else {
                    this.docEmptyHint = '没有更多文档了';
                    this.showSnackbar('没有更多文档了')
                    this.isMoreDoc = false;
                }
            });
        },
        getMoreDoc() {
            this.docCurrentPage++;
            this.getDoc();
        },
        setDocType(data) {
            this.clearDocList();
            this.docType = data;
            this.getDoc();
        },
        clearDocList() {
            this.docCurrentPage = 0;
            this.docs = [];
        },

        /* SNACKBAR ***********************************************************************************************************/
        showSnackbar(content) {
            this.snackbarMessage = content;
            this.isSnackbarDisplay = true
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.isSnackbarDisplay = false }, 2000)
        },
        hideSnackbar() {
            this.isSnackbarDisplay = false
            if (this.snackTimer) clearTimeout(this.snackTimer)
        },

        /* OTHERS *************/
        openAddDialog() {
            this.isDialogAddDisplay = true;
        },
        closeAddDialog() {
            this.isDialogAddDisplay = false;
        }
    }
}
</script>

<style scoped>
    .api-view-tabs {
        background-color: transparent;
        color: rgba(0, 0, 0, .87);
    }

    .api-view-tabs .mu-tab-active {
        color: #7e57c2;
    }

    .api-view-tabs .mu-tab-link {
        color: rgba(0, 0, 0, .54);
    }

    .badge {
        padding: 4px;
        background-color: #457cce;
        color: white;
        font-size: 12px;
        border-radius: 4px;
        margin-left: 4px;
    }

    a {
        cursor: pointer;
    }

    .tag_list {
        display: inline-block;
        margin: 3px 5px;
    }

    em {
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

    em:hover {
        background-color: #d1d1d1;
        color: rgb(239, 83, 80);
        cursor: pointer;
    }
</style>