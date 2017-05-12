<template lang="jade">
    div.app
        div.desktop-menu
            mu-row.container(v-if='isMobile == false')
                mu-col(desktop='50')
                    router-link(to='/home')
                        mu-flat-button.item(style='vertical-align:-19px')
                            img(src="/static/img/logo.png")
                    router-link(to='/school')
                        mu-flat-button.item(label='学校')
                    router-link(to='/course')
                        mu-flat-button.item(label='教程')
                    router-link(to='/sdk')
                        mu-flat-button.item(label='SDK')
                    router-link(to='/tools')
                        mu-flat-button.item(label='工具')
                mu-col(desktop='50',style='text-align:right')
                    mu-text-field.search-box(hintText="搜索", hintTextClass='search-hint', inputClass='search-input')
                    mu-icon-button(icon='search', tooltip="搜索", style='color:white')
        mu-paper.mobile-menu(v-if='isMobile')
            mu-bottom-nav(:value="bottomNav",@change="handleMobileMenuChange",shift)
                mu-bottom-nav-item(value="home",title="主页",icon="home",to='/home')
                mu-bottom-nav-item(value="school",title="学校",icon="school",to='/school')
                mu-bottom-nav-item(value="course",title="教程",icon="book",to='/course')
                mu-bottom-nav-item(value="sdk",title="SDK",icon="note",to='/sdk')
                mu-bottom-nav-item(value="tools",title="工具",icon="build",to='/tools')
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
            curMenu: this.$route.path.split('/')[1],
            isHide: false,
            scrolled: 0,
            isMobile: Browser.mobile,
            bottomNav: this.$route.path.split('/')[1]
        };
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUpdate: function () {
        this.bottomNav = this.$route.path.split('/')[1];
    },
    methods: {
        handleScroll() {
            this.scrolled = document.body.scrollTop;
            if (this.scrolled > 350) {
                this.isHide = true
            } else {
                this.isHide = false
            }
        },
        returnTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
        },
        handleMobileMenuChange(val) {
            this.bottomNav = val
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
    background-color: #222;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
}

.desktop-menu .item {
    line-height: 54px;
    height: 54px;
    color: white;
}

.search-box {
    vertical-align: 13px;
    font-size: 10px;
}

.search-hint {
    font-size: 12px;
    color: #888 !important;
}

.search-input {
    font-size: 12px !important;
    color: white !important;
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
    background-color: #d00000;
    color: white;
    border-bottom: 2px solid #d00000;
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