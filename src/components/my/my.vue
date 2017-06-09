<template lang="jade">
    div
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='showMenu')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.user
                            span &nbsp; 学生 Student
                        mu-list-item.item(title="我的资料", @click="redirect('profile','我的资料')", :class='title == "我的资料" ? "router-link-active" : ""')
                        mu-list-item.item(title="我的级别", @click="redirect('level','我的级别')", :class='title == "我的级别" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程 Courses 
                        mu-list-item.item(title="我的课程", @click="redirect('course','我的课程')", :class='title == "我的课程" ? "router-link-active" : ""')
                        mu-list-item.item(title="收藏的课程", @click="redirect('fav_course','收藏的课程')", :class='title == "收藏的课程" ? "router-link-active" : ""')
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 项目 Projects 
                        mu-list-item.item(title="我的项目", @click="redirect('project','我的项目')", :class='title == "我的项目" ? "router-link-active" : ""')
                        mu-list-item.item(title="我的项目组", @click="redirect('team','我的项目组')", :class='title == "我的项目组" ? "router-link-active" : ""')
            mu-col(:desktop="contentWidth", width="100")
                mu-appbar(:title="title")
                    mu-icon-button(icon="menu",slot="right",@click='toggleMenu')
                router-view
</template>

<script>
import Browser from '@/common/browser'

export default {
    name: 'school',
    data() {
        return {
            isMobile: Browser.mobile,
            showMenu: true,
            title: '我的资料',
            contentWidth: 80
        }
    },
    mounted: function () {
        //判断是否为Mobile
        if (this.isMobile) {
            this.showMenu = false;
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            this.contentWidth = this.contentWidth == 100 ? 80 : 100;
        },
        redirect(path, title) {
            this.title = title;
            this.$router.push('/my/' + path);
            if (this.isMobile) {
                this.showMenu = false;
            }
        }
    }
}
</script>

<style scoped>

</style>