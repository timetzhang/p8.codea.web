<template lang="jade">
    div.padded.container
        mu-paper(style='padding:10px 30px; margin-bottom: 15px;')
            mu-row
                mu-col(desktop="75", style="padding-top: 5px;")
                    mu-text-field(hintText="搜索文档",color="white",v-model="searchKeyword", :fullWidth='true')
                mu-col.aligned.center(desktop="10")
                    mu-raised-button(label="搜索",icon="search",:href='"/doc/search="+searchKeyword', :fullWidth='true', style="margin-top:13px")
                mu-col.aligned.center(desktop="10")
                    mu-raised-button(label="添加",icon="add", :fullWidth='true', style="margin-top:13px", @click="openAddDialog")
        mu-paper
            mu-tabs.api-view-tabs(:value="activeSortTab",@change="handleSortTabChange")
                mu-tab(:value="0",title="最新")
                mu-tab(:value="1",title="最热")
                mu-tab(:value="2",title="精华")
            div#doc-list
                div(v-for="item in docs",:key="item.id")
                    doc_list(:studentHref="'/student/id=' + item.student_id",:docHref="'/doc/id='+item.id",:headimg="item.head_image",:name="item.student_name",:type="item.type_id",:time="item.time",:views="item.click_count",:comments="item.comment_count",:isLike="item.like_count",:title="item.name",:brief="item.brief",:tags="item.tag",:isSolved="item.isSolved",:is_star="item.is_star")
                div.center.aligned(v-if='docEmptyHint',style='padding-bottom:1px; color:#457cce')
                    h4 {{docEmptyHint}}
                div.center.aligned(v-if="isMoreDoc")
                    mu-flat-button(label="点击载入更多",@click="getMoreDoc")     
        mu-dialog(:open="isDialogAddShow",title="请选择添加的类型")
            mu-row
                mu-col(desktop="50", width="50")
                    mu-raised-button(label="文档", secondary, to="/doc/new/type=1", :fullWidth="true")
                mu-col(desktop="50", width="50")
                    mu-raised-button(label="提问", secondary, to="/doc/new/type=2", :fullWidth="true")
                mu-flat-button(slot="actions",@click="closeAddDialog",primary,label="取消")

        mu-snackbar(v-if="isSnackbarDisplay",:message="snackbarMessage",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar",actionColor="blue")
</template>

<script>
import doc_list from '../common/doc_list.vue'
import Encode from '@/common/encode'
import DateTime from '@/common/datetime'

export default {
    name: 'doc',
    components: {
        doc_list
    },
    data() {
        return {
            //search
            searchKeyword: this.$route.params.search,
            
            //active tabs flag
            activeSortTab: 0,

            //tags
            tags: [],

            //docs
            docs: [],//all doc
            docType: 0,
            docCurrentPage: 0,
            docSort: "all",
            docEmptyHint: "",
            isMoreDoc: true,

            //dialog
            isDialogAddShow: false,

            //snackbar
            isSnackbarDisplay: false,
            snackbarMessage: '',
        }
    },
    mounted: function () {
        this.getDoc();
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
        }
    },
    methods: {
        /* TAB CHANGE HANDLER ************************************************************************************************/
        handleSortTabChange(val) {
            this.activeSortTab = val;
        },

        /* DOCS **************************************************************************************************************/
        getDoc() {
            var _this = this;
            this.documentNoneHintText = "";
            var options = {
                pagenum: this.docCurrentPage,
                pagesize: 10,
                sort: this.docSort,
                search: this.$route.params.search
            }
            this.$db.searchDocument(this, options).then(res => {
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
            this.docPageLoading = true;
            this.docCurrentPage++;
            this.getDoc();
        },
        clearDocList() {
            this.docCurrentPage = 0;
            this.docs = [];
        },

        /* OTHERS *************/
        openAddDialog() {
            this.isDialogAddShow = true;
        },
        closeAddDialog() {
            this.isDialogAddShow = false;
        },

        /* SNACKBAR ***********************************************************************************************************/
        showSnackbar(content) {
            this.snackbarContent = content;
            this.snackbar = true
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
        },
        hideSnackbar() {
            this.snackbar = false
            if (this.snackTimer) clearTimeout(this.snackTimer)
        },
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