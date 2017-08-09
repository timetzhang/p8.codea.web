<template lang="jade">
    div
        mu-paper(style='padding:10px 30px; margin-bottom: 15px')
            mu-text-field(label="搜索课程",style='width:100%',v-model="keyword")
        mu-appbar(title="课程", v-if='isMobile')
            mu-icon-button(icon="menu",slot="right",@click='toggleMenu')
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='isMenuDisplay')
                mu-paper(height="100")
                    mu-list
                        mu-sub-header 
                            i.icon.browser
                            span &nbsp; 软件开发
                        a(:href='"/course/type="+item.id',v-for='item in menuSoft',:key='item.id')
                            mu-list-item(:title='item.name', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.disk.outline
                            span &nbsp; 硬件开发
                        a(:href='"/course/type="+item.id',v-for='item in menuHard',:key='item.id')
                            mu-list-item(:title='item.name', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.file.image.outline
                            span &nbsp; 艺术
                        a(:href='"/course/type="+item.id',v-for='item in menuArt',:key='item.id')
                            mu-list-item(:title='item.name', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-sub-header 
                            i.icon.bomb
                            span &nbsp; 创意课程
                        a(:href='"/course/type="+item.id',v-for='item in menuCrea',:key='item.id')
                            mu-list-item(:title='item.name', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-divider
            mu-col(:desktop="contentWidth", width="100")
                mu-row(gutter,:class="isMobile? 'padded':''")
                    mu-col(desktop='33', tablet='50', width='50', v-for="item in course", key='item.id')
                        mu-card.card
                            mu-card-header {{item.name}}
                            mu-card-media
                                img(:src='item.logo')
                            mu-card-text.card-text {{item.brief}}
                            mu-card-actions
                                a(:href='"/course/id="+item.id')
                                    mu-raised-button(label='开始课程', :fullWidth='true')
</template>

<script>
import Browser from '@/common/browser'

export default {
    name: 'course',
    data() {
        return {
            menuCrea: [],
            menuSoft: [],
            menuHard: [],
            menuArt: [],
            menuTools: [],
            course: [],
            currentMenu: 13,
            isMobile: Browser.mobile,
            isMenuDisplay: true,
            keyword: '',
            contentWidth: '80'
        }
    },
    mounted: function () {
        this.getType();
        this.getCourse(this.$route.params.course_type);
        document.title = '教程 - ' + this.$config.title;
        //判断是否为Mobile
        if (this.isMobile) {
            this.showMenu = false;
        }
    },
    methods: {
        getType() {
            var _this = this;

            this.$db.getCourseType(_this, { subject_id: 1 }).then(res => {
                _this.menuSoft = res;
            });
            this.$db.getCourseType(_this, { subject_id: 2 }).then(res => {
                _this.menuHard = res;
            });
            this.$db.getCourseType(_this, { subject_id: 3 }).then(res => {
                _this.menuArt = res;
            });
            this.$db.getCourseType(_this, { subject_id: 4 }).then(res => {
                _this.menuCrea = res;
            });
        },
        getCourse(id) {
            var _this = this;
            this.currentMenu = id;
            this.$db.getCourse(this, { type_id: id }).then(res => {
                _this.course = res;
            });
            if (this.isMobile) {
                this.showMenu = false;
            };
            this.goTop();
        },
        search(e){
            console.log(e)
        },
        goTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        toggleMenu() {
            this.isMenuDisplay = !this.isMenuDisplay;
        }
    },
    watch: {
        isMenuDisplay: function () {
            this.contentWidth = this.isMenuDisplay ? '80' : '100';
        },
        keyword: function () {
            var _this = this;
            if (this.keyword) {
                this.isMenuDisplay = false;
                this.$db.getCourse(this, { keyword: this.keyword }).then(res => {
                    _this.course = res;
                });
            }
            else {
                this.isMenuDisplay = true;
                this.getCourse(this.$route.params.course_type);
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