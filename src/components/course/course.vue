<template lang="jade">
    div
        mu-appbar(title="课程", v-if='isMobile')
            mu-icon-button(icon="menu",slot="right",@click='toggleMenu')
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list
                        mu-sub-header 
                            i.icon.bomb
                            span &nbsp; 创意课程
                        mu-list-item(v-for='item in menuCrea',:key='item.id',:title='item.name', @click='loadCourse(item.id)', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.browser
                            span &nbsp; 软件开发
                        mu-list-item(v-for='item in menuSoft',:key='item.id',:title='item.name', @click='loadCourse(item.id)', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.disk.outline
                            span &nbsp; 硬件开发
                        mu-list-item(v-for='item in menuHard',:key='item.id',:title='item.name', @click='loadCourse(item.id)', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.file.image.outline
                            span &nbsp; 艺术
                        mu-list-item(v-for='item in menuArt',:key='item.id',:title='item.name', @click='loadCourse(item.id)', :class='currentMenu == item.id ? "router-link-active" : ""')
                        mu-sub-header 
                            i.icon.file.image.outline
                            span &nbsp; 工具
                        mu-list-item(v-for='item in menuTools',:key='item.id',:title='item.name', @click='loadCourse(item.id)', :class='currentMenu == item.id ? "router-link-active" : ""')
            mu-col(desktop="80", width="100")
                mu-row(gutter,:class="isMobile? 'padded':''")
                    mu-col(desktop='33', tablet='50', width='50', v-for="item in course", key='item.id')
                        mu-card.card
                            mu-card-header {{item.name}}
                            mu-card-media
                                img(:src='item.logo_url')
                            mu-card-text.card-text {{item.brief}}
                            mu-card-actions
                                mu-raised-button(label='开始课程', :fullWidth='true', :to='"/course/id="+item.id')
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
            showMenu: true
        }
    },
    mounted: function () {
        this.loadType();
        this.loadCourse(this.$route.params.course_type);
    },
    methods: {
        loadType() {
            var _this = this;

            _this.$db.getCourseType(_this, { subject_id: 1 }).then(res => {
                _this.menuSoft = res;
            });
            _this.$db.getCourseType(_this, { subject_id: 2 }).then(res => {
                _this.menuHard = res;
            });
            _this.$db.getCourseType(_this, { subject_id: 3 }).then(res => {
                _this.menuArt = res;
            });
            _this.$db.getCourseType(_this, { subject_id: 4 }).then(res => {
                _this.menuCrea = res;
            });
            _this.$db.getCourseType(_this, { subject_id: 5 }).then(res => {
                _this.menuTools = res;
            });
        },
        loadCourse(id) {
            var _this = this;
            this.currentMenu = id;
            this.$router.push('/course/type=' + id);
            this.$db.getCourse(this, { type_id: id }).then(res => {
                _this.course = res;
            });
            if (this.isMobile) {
                this.showMenu = false;
            }
            this.goTop();
        },
        goTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
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