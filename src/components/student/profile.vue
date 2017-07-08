<template lang="jade">
    div
        mu-paper
            div.center.aligned(style="background: url('/static/img/profile/profile.jpg'); padding:30px 0")
                mu-avatar(:src="student.head_image", style='width:120px; height:120px')
                p
                i.icon.olive.large.gender(:class="sexIcon")
                p.center.aligned.name.box {{student.name}}
                p
                p.center.aligned.name.box {{student.title}}
                p
                p.center.aligned.name.box {{student.province}} {{student.city}}
            mu-tabs(:value="activeTab",@change="handleTabChange")
                mu-tab(value="tab1",title="信息",@click="getProfile")
                mu-tab(value="tab2",title="文档",@click="getDocs")
                mu-tab(value="tab3",title="小组",@click="getTeams")
            div(v-if="activeTab === 'tab1'")
                mu-content-block
                    p(v-if="student.note") {{student.note}}
                    p(v-if="!student.note") 他没有展示任何信息
            div(v-if="activeTab === 'tab2'")
                mu-content-block#doclist
                    div(v-for="doc in docs",:key="doc.id")
                        CuDocList(:docHref="'/doc/id='+doc.id",:headimg="doc.head_image",:name="doc.student_name",:type="doc.type_id",:time="doc.time",:views="doc.click_count",:comments="doc.comment_count",isLike="5",:title="doc.name",:breif="doc.breif",:tags="doc.tag",:isSolved="doc.isSolved")
                mu-infinite-scroll(:scroller="docScroller",:loading="docLoading",@load="docLoadMore", :loadingText="docLoadingText")
            div(v-if="activeTab === 'tab3'")
                mu-content-block
                    mu-list(v-for="team in teams", :key="team.id")
                        mu-list-item(:title="team.name",:describeText="team.intro", :to="'/team/id=' + team.id")
                            mu-avatar(:src="team.logo",slot="leftAvatar")
                            mu-icon(value="keyboard_arrow_right",slot="right")
                        mu-divider
</template>

<script>
import DateTime from '@/common/datetime'
import CuDocList from '@/components/common/doc_list'

export default {
    name: 'profile',
    components: {
        CuDocList
    },
    data() {
        return {
            student: {},
            teams: [],
            docs: [],
            docCurrentPage: 0,
            docLoading: false,
            docScroller: null,
            docLoadingText: '正在加载...',
            activeTab: 'tab1',
            sexIcon: ''
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getProfile();
        this.docScroller = this.$el.doclist;
    },
    methods: {
        handleTabChange(value) {
            this.activeTab = value;
        },
        getProfile() {
            var _this = this;
            this.$db.getStudentProfile(this, { id: this.$route.params.id }).then(res => {
                _this.student = res[0];
                if (_this.student.sex == '男') {
                    _this.sexIcon = 'man';
                }
                else {
                    _this.sexIcon = 'woman';
                }
            });
        },
        getTeams() {
            var _this = this;
            this.$db.getStudentTeam(this, { student_id: this.$route.params.id }).then(res => {
                _this.teams = res;
            });
        },
        getDocs() {
            var _this = this;
            this.$db.getDocument(this, { pagesize: 10, pagenum: this.docCurrentPage, id: "student_id=" + this.$route.params.id }).then(res => {
                if (res.length > 0) {
                    res.forEach(function (element) {
                        element.time = DateTime.dateFormat(element.time);
                        _this.docs.push(element);
                    }, this);
                    this.docLoading = false;
                }
                else{
                    this.docLoading = true;
                    this.docLoadingText = '没有更多的文档了';
                }
            });
        },
        docLoadMore() {
            this.docLoading = true;
            this.docCurrentPage++;
            this.getDocs();
        }
    }
}
</script>

<style scoped>
.name.box {
    padding: 3px;
    background-color: rgba(44, 44, 44, 0.4);
    color: white;
    margin: auto;
    width: 200px
}

.gender {
    position: relative;
    bottom: 40px;
    left: 60px;
}
</style>