<template lang="jade">
    div.app
        div.desktop-menu
            mu-row.container(v-if='isMobile == false')
                mu-col(desktop='70')
                    a(href='/home')
                        mu-flat-button.item(label='首页',:class='curMenu == "home" ? "router-link-active" : ""')
                    a(href='/school')
                        mu-flat-button.item(label='学校',:class='curMenu == "school" ? "router-link-active" : ""')
                    a(href='/course')
                        mu-flat-button.item(label='教程',:class='curMenu == "course" ? "router-link-active" : ""')
                    a(href='/doc')
                        mu-flat-button.item(label='文档库',:class='curMenu == "doc" ? "router-link-active" : ""')
                    a(href='/team')
                        mu-flat-button.item(label='项目组',:class='curMenu == "team" ? "router-link-active" : ""')
                    a(href='/my')
                        mu-flat-button.item(label='我的',:class='curMenu == "my" ? "router-link-active" : ""')
                mu-col(desktop='30',style='text-align:right',v-if='sid <= 0')
                    a(href='/login')
                        mu-flat-button.item(label='登录',:class='curMenu == "login" ? "router-link-active" : ""')
                    a(href='/register')
                        mu-flat-button.item(label='注册',:class='curMenu == "register" ? "router-link-active" : ""')
                mu-col(desktop='30',style='text-align:right',v-if='sid > 0')
                    a(href='/my/notify',v-if="notify > 0")
                        mu-badge(:content="notify",secondary)
                    a(href='/logoff')
                        mu-flat-button.item(label='退出登录')
        div.mobile-menu(v-if='isMobile')
            mu-bottom-nav(:value="bottomNav",@change="handleMobileMenuChange")
                a(href='/school')
                    mu-bottom-nav-item(value="school",title="学校",icon="school",:class='curMenu == "school" ? "router-link-active" : ""')
                a(href='/course')
                    mu-bottom-nav-item(value="course",title="教程",icon="book",:class='curMenu == "course" ? "router-link-active" : ""')
                a(href='/doc')
                    mu-bottom-nav-item(value="doc",title="文档库",icon="note",:class='curMenu == "doc" ? "router-link-active" : ""')
                a(href='/team')
                    mu-bottom-nav-item(value="team",title="项目组",icon="cloud_download",:class='curMenu == "team" ? "router-link-active" : ""')
                a(href='/my')
                    mu-bottom-nav-item(value="my",title="我的",icon="account_circle",:class='curMenu == "my" ? "router-link-active" : ""')
        router-view.container.content
        mu-raised-button(@click="returnTop",icon="eject",id="gotoTop",v-show="isHide") 返回顶部
        div.bottom
            mu-row.container(gutter)
                mu-col(desktop="50")
                    p 地址：长沙远大三路远大城J57
                    p 电话：0731-84086832
                    p 邮箱：p8@joinp8.com
                mu-col(desktop="50",style="text-align:right")
                mu-divider
                mu-col(desktop="100")
                    p ©长沙噼啪星球文化传媒有限公司 / 湘ICP备16002937号
</template>

<script>
import Browser from '@/common/browser'

export default {
    data() {
        return {
            curMenu: window.location.pathname.split('/')[1],
            isHide: false,
            scrolled: 0,
            isMobile: Browser.mobile,
            bottomNav: this.$route.path.split('/')[1],
            sid: this.$cookie.getCookie('sid'),
            notify: '0'
        };
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUpdate: function () {
        this.bottomNav = this.$route.path.split('/')[1];
        if (this.$cookie.getCookie('sid')) {
            this.getUnreadNotifyCount();
        }
    },
    methods: {
        handleScroll() {
            this.scrolled = document.body.scrollTop;
            if (this.scrolled > 10) {
                this.isHide = true;
            }
            else {
                this.isHide = false;
            }
        },
        returnTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        handleMobileMenuChange(val) {
            this.bottomNav = val;
        },
        getUnreadNotifyCount() {
            var _this = this;
            this.$db.getStudentUnreadNotifyCount(this, { student_id: this.$cookie.getCookie('sid') }).then(res => {
                _this.notify = res[0].count.toString();
            });
        }
    }
}
</script>

<style>
.app {
    background-color: #f4f4f4;
}

.desktop-menu {
    background-color: #424242;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.mobile-menu {
    background-color: #424242;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
}

.mobile-menu .mu-bottom-item-active {
    background-color: #ddd;
}


.desktop-menu .item {
    line-height: 54px;
    height: 54px;
    color: white;
    background-color: #424242;
}

.content {
    padding: 70px 0 10px 0 !important;
}

@media (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    /*iphone 6*/
    .content {
        padding: 0 !important;
    }
}

@media (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    /*iphone 6 plus*/
    .content {
        padding: 0 !important;
    }
}

.bottom {
    background-color: #424242;
    color: #888;
    padding: 10px;
    font-size: 12px;
}

.router-link-active .mu-flat-button-wrapper {
    background-color: #457cce;
    color: white;
    border-bottom: 2px solid #457cce;
}

.router-link-active {
    background-color: #d3d3d3;
}

#gotoTop {
    position: fixed;
    right: 10px;
    bottom: 60px;
}

.mu-paper-1 {
    box-shadow: none !important;
}

.mu-card {
    box-shadow: none !important;
}
</style>