<template lang="jade">
    div.container
        mu-appbar(:title="title", v-if="isMobile")
            mu-icon-button(icon="menu",slot="right",@click='toggleMenu')
        mu-row(gutter)
            mu-col(desktop="20", width="100", v-if='isMenuDisplay')
                mu-paper(height="100")
                    mu-list.column
                        mu-sub-header 
                            i.icon.university
                            span &nbsp; 学校
                        mu-list-item.item(title="通知", @click="redirect($event, '/my/notify')")
                        mu-divider
                        mu-sub-header 
                            i.icon.student
                            span &nbsp; 课程与项目
                        mu-list-item.item(title="我的课程", @click="redirect($event, '/my/course')")
                        mu-list-item.item(title="收藏的课程", @click="redirect($event, '/my/fav_course')")
                        mu-list-item.item(title="我的项目组", @click="redirect($event, '/my/team')")
                        mu-list-item.item(title="我关注的项目组",@click="redirect($event, '/my/follow_team')")
                        mu-divider
                        mu-sub-header 
                            i.icon.file.text
                            span &nbsp; 讨论与文档
                        mu-list-item.item(title="我的文档",@click="redirect($event, '/my/doc')")
                        mu-list-item.item(title="我收藏的文档",@click="redirect($event, '/my/fav_doc')")
                        mu-divider
                        mu-sub-header 
                            i.icon.user
                            span &nbsp; 学生
                        mu-list-item.item(title="我的资料",@click="redirect($event, '/my/profile')")
                        mu-list-item.item(title="我的研发能力",@click="redirect($event, '/my/dev_level')")
                        mu-list-item.item(title="我的运营能力",@click="redirect($event, '/my/op_level')")
            mu-col(:desktop="contentWidth", width="100")
                router-view
</template>

<script>
import Browser from '@/common/browser'

export default {
    name: 'my',
    data() {
        return {
            isMobile: Browser.mobile,
            isMenuDisplay: true,
            currentPage: window.location.pathname.split('/')[2],
            contentWidth: '80',
            title: ''
        }
    },
    mounted: function () {
        //判断是否为Mobile
        if (this.isMobile) {
            this.isMenuDisplay = false;
        }
        if (!this.$cookie.getCookie('sid')) {
            this.$router.push('/login');
        }
        document.title = '我的 - ' + this.$config.title;
    },
    methods: {
        toggleMenu() {
            this.isMenuDisplay = !this.isMenuDisplay;
            this.contentWidth = this.contentWidth == '100' ? '80' : '100';
        },
        redirect(e, path) {
            this.title = e.srcElement.innerText;
            this.currentPage = path;
            this.$router.push(path);
            if (this.isMobile) {
                this.isMenuDisplay = false;
            }
        }
    }
}
</script>

<style scoped>

</style>