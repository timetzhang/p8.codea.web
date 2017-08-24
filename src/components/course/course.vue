<template lang="jade">
    div.container
        loading(v-if="isLoading")
        div(v-if="!isLoading")
            mu-paper(style='padding:10px 30px; margin-bottom: 15px',v-if="isSearchDisplay")
                mu-text-field(label="搜索课程",style='width:100%',v-model="keyword")
            mu-row(gutter)
                mu-col(desktop="20", width="100", v-if='isMenuDisplay')
                    mu-paper(height="100")
                        mu-list
                            mu-sub-header
                                i.icon.browser
                                span &nbsp; 软件开发
                            mu-list-item(v-for="item in filterBy(typies, 1, 'subject_id')", :key="item.id", :title='item.name', :to='"/course/type="+item.id')
                            mu-divider
                            mu-sub-header
                                i.icon.browser
                                span &nbsp; 硬件开发
                            mu-list-item(v-for="item in filterBy(typies, 2, 'subject_id')", :key="item.id", :title='item.name', :to='"/course/type="+item.id')
                            mu-divider
                            mu-sub-header
                                i.icon.browser
                                span &nbsp; 艺术
                            mu-list-item(v-for="item in filterBy(typies, 3, 'subject_id')", :key="item.id", :title='item.name', :to='"/course/type="+item.id')
                            mu-divider
                            mu-sub-header
                                i.icon.browser
                                span &nbsp; 404
                            mu-list-item(v-for="item in filterBy(typies, 4, 'subject_id')", :key="item.id", :title='item.name', :to='"/course/type="+item.id')
                            mu-divider
                mu-col(:desktop="contentWidth", width="100")
                    mu-appbar(:title="title")
                        mu-icon-button(icon="menu",slot="right",@click='toggleMenu')
                        mu-icon-button(icon="search",slot="right",@click='toggleSearch')
                    mu-row(gutter,:class="isMobile? 'padded':''")
                        mu-col(desktop='33', tablet='50', width='50', v-for="item in course", key='item.id')
                            mu-card.card
                                mu-card-header {{item.name}}
                                mu-card-media
                                    img(:src='item.logo')
                                mu-card-text.card-text {{item.brief}}
                                mu-card-actions
                                    router-link(:to='"/course/id="+item.id')
                                        mu-raised-button(label='开始课程', :fullWidth='true')
</template>

<script>
import Browser from '@/common/browser'
import loading from '@/components/common/loading'
export default {
    name: 'course',
    components: {
        loading
    },
    data() {
        return {
            typies: [],
            course: [],
            currentMenu: 13,
            isMobile: Browser.mobile,
            isMenuDisplay: true,
            isSearchDisplay: true,
            keyword: '',
            title: '升级攻略',
            contentWidth: '80',

            isLoading: false
        }
    },
    beforeUpdate: function() {
        this.currentMenu = this.$route.params.type
    },
    mounted: function() {
        this.getType()
        document.title = '教程 - ' + this.$config.title
        //判断是否为Mobile
        if (this.isMobile) {
            this.isMenuDisplay = false
            this.isSearchDisplay = false
        }
    },
    methods: {
        getType() {
            var _this = this
            this.$db.getCourseType(_this).then(res => {
                _this.typies = res
            });
        },
        getCourse(id) {
            var _this = this
            this.isLoading = true

            this.$db.getCourse(this, { type_id: this.currentMenu }).then(res => {
                _this.course = res
                _this.isLoading = false
                this.goTop()
            });
        },
        goTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        toggleMenu() {
            this.isMenuDisplay = !this.isMenuDisplay
        },
        toggleSearch() {
            this.isSearchDisplay = !this.isSearchDisplay
        },
        setTitle() {
            //confirm the title
            this.typies.forEach(function(element) {
                if (element.id == this.currentMenu) {
                    this.title = element.name
                }
                document.title = this.title + ' - 教程 - ' + this.$config.title
            }, this);
        }
    },
    watch: {
        isMenuDisplay: function() {
            this.contentWidth = this.isMenuDisplay ? '80' : '100'
        },
        keyword: function() {
            var _this = this

            if (this.keyword) {
                this.isMenuDisplay = false;
                this.$db.getCourse(this, { keyword: this.keyword }).then(res => {
                    _this.course = res
                })
            }
            else {
                this.getCourse()
                this.isMenuDisplay = true
            }
        },
        currentMenu: function() {
            this.getCourse()
            this.setTitle()

            if (this.isMobile) {
                this.isMenuDisplay = false
            }
        }
    }
}
</script>

<style>
.mu-card-header {
    font-weight: bold !important;
}

.mu-sub-header {
    font-weight: bold !important;
}

.card {
    margin-bottom: 15px;
}

.card-text {
    height: 75px;
}

.content {
    padding: 20px;
}
</style>