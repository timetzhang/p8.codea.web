<template lang="jade">
    div.app
        div.desktop-menu
            mu-row.container(v-if='!isMobile')
                mu-col(desktop='70')
                    a(href='/home')
                        mu-flat-button.item(label='首页',:class='curMenu == "home" ? "router-link-active" : ""')
                    a(href='/school')
                        mu-flat-button.item(label='学校',:class='curMenu == "school" ? "router-link-active" : ""')
                    a(href='/course')
                        mu-flat-button.item(label='教程',:class='curMenu == "course" ? "router-link-active" : ""')
                    a(href='/doc')
                        mu-flat-button.item(label='维基',:class='curMenu == "doc" ? "router-link-active" : ""')
                    a(href='/team')
                        mu-flat-button.item(label='项目',:class='curMenu == "team" ? "router-link-active" : ""')
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
                    mu-bottom-nav-item(value="doc",title="维基",icon="note",:class='curMenu == "doc" ? "router-link-active" : ""')
                a(href='/team')
                    mu-bottom-nav-item(value="team",title="项目",icon="cloud_download",:class='curMenu == "team" ? "router-link-active" : ""')
                a(href='/my')
                    mu-bottom-nav-item(value="my",title="我的",icon="account_circle",:class='curMenu == "my" ? "router-link-active" : ""')
        router-view.content
        mu-raised-button(@click="returnTop",icon="eject",id="gotoTop",v-show="isHide") 返回顶部
        div.bottom(:style="isMobile ? 'margin-bottom: 25px' : ''")
            mu-row.container.center.aligned(gutter, v-if="!isMobile")
                mu-col(desktop="25")
                    h3.title 学校介绍
                    p
                        a(href="/school/vision") 愿景与目标
                    p
                        a(href="/school/revolution") 革新
                    p
                        a(href="/school/geek") Geek文化
                    p
                        a(href="/school/study_space") 学习空间
                    p
                        a(href="/school/dorm_space") 居住空间
                    h3.title 登录与注册
                    p
                        a(href="/login") 登录
                    p
                        a(href="/register") 注册   
                mu-col(desktop="25")
                    h3.title 学校课程与项目
                    p
                        a(href="/school/parkathon") 集训营
                    p
                        a(href="/school/course") 1+1年课程
                    p
                        a(href="/school/team") 项目组
                    p
                        a(href="/school/project") 项目
                    h3.title 报名
                    p
                        a(href="/school/entrance") 入学考试
                    p
                        a(href="/school/contact") 联系我们
                    h3.title 项目组与文档
                    p
                        a(href="/team") 学生项目组
                    p
                        a(href="/doc") 维基
                mu-col(desktop="25")
                    h3.title 软件开发教程
                    p
                        a(href="/course/type=13") 升级攻略
                    p
                        a(href="/course/type=1") 前端
                    p
                        a(href="/course/type=2") 后端
                    p
                        a(href="/course/type=3") 数据库
                    p
                        a(href="/course/type=4") 移动端
                    p
                        a(href="/course/type=5") 图形开发
                    p
                        a(href="/course/type=6") 开发工具
                    p
                        a(href="/course/type=7") 操作系统
                    p
                        a(href="/course/type=16") 服务器
                    p
                        a(href="/course/type=8") 基础/进阶
                mu-col(desktop="25")
                    h3.title 硬件开发教程
                    p
                        a(href="/course/type=14") 升级攻略
                    p
                        a(href="/course/type=9") 嵌入式
                    p
                        a(href="/course/type=10") 基础/进阶
                    h3.title 艺术
                    p
                        a(href="/course/type=15") 升级攻略
                    p
                        a(href="/course/type=11") 音乐
                    p
                        a(href="/course/type=12") 设计
                    h3.title 创意课程
                    p
                        a(href="/course/type=17") 404
                mu-divider(style="margin-top:10px;")
                br
                mu-col(desktop="100")
                    p 地址：长沙远大三路远大城J57
                    p 电话：0731-84086832
                    p 邮箱：p8@joinp8.com
                    p ©湖南乐蒲态教育发展有限公司 / 湘ICP备16002937号
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

<style lang="scss">
.app {
    background-color: #f7f7f7;
}

.content {
    padding: 70px 0 10px 0 !important;
}

.desktop-menu {
    background-color: #f0f0f0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);

    .item {
        line-height: 54px;
        height: 54px;
        color: #222;
        background-color: #f0f0f0;
    }
}

.mobile-menu {
    background-color: #424242;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;

    .mu-bottom-item-active {
        background-color: #ddd;
    }
}


@media (min-device-width: 320px) and (max-device-width: 736px) {
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

    a {
        color: #999;
    }

    .title {
        color: #BBB;

        &:before {
            content: "- ";
        }

        &:after {
            content: " -";
        }
    }
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