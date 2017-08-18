<template lang="jade">
    div(:class="isMobile ? 'mobile' : ''")
        div.home.container
            a(:href="homeData.url")
                img.logo(src="/static/img/home/logo.png", style="padding:0 30px;", v-if="!isMobile")
                div.center.aligned.title(:class="isMobile? 'mobile' : 'desktop'",:style="'height:' + homeHeight + 'px;min-height:400px; padding-top:' + homeHeight/2.5 + 'px'",v-html="homeData.text")
        div.home.button.container
            a(href="/team")
                mu-row(gutter)
                    mu-col(desktop="10", width="0")
                    mu-col(desktop="20", width="100",:class="isMobile ? 'center aligned' : 'right aligned'")
                        img(src="/static/img/home/projects.png")
                    mu-col.text(desktop="60", width="100",:class="isMobile ? 'center aligned' : 'left aligned'")
                        h4 最新的项目组
                        div.details 在CODEA学习软硬件产品开发，选择你最感兴趣的项目组，或者创建你自己的项目组，开始你的全栈工程师之旅。
                        p.more 点击查看更多>>
                    mu-col(desktop="10", width="0")
        div.home.button.container
            a(href="http://www.broad.com/ProductShow-76.aspx")
                mu-row(gutter)
                    mu-col(desktop="10", width="0")
                    mu-col(desktop="20", width="100",:class="isMobile ? 'center aligned' : 'right aligned'")
                        img(src="/static/img/home/xin.png")
                    mu-col.text(desktop="60", width="100",:class="isMobile ? 'center aligned' : 'left aligned'")
                        h4 远大科技革命性材料 "芯"
                        div.details 了解比钢筋混泥土轻10倍，强度高3倍，寿命几乎无限长，低生产成本的 “芯” 材料。
                        p.more 点击查看更多>>
                    mu-col(desktop="10", width="0")
        //- div.news.gray
        //-     div.container
        //-         div.title CodeA Today
        //-         div.sub-title 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间
        //-         mu-row(gutter)
        //-             mu-col(desktop="25", width="100")
        //-                 mu-card
        //-                     mu-card-media
        //-                         img(src="/static/img/home/today01.jpg")
        //-                     mu-card-title(title="Content Title",subTitle="Content Title")
        //-                     mu-card-text
        //-                         span 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        //-                         span 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        //-             mu-col(desktop="25", width="100")
        //-                 mu-card
        //-                     mu-card-media
        //-                         img(src="/static/img/home/today01.jpg")
        //-                     mu-card-title(title="Content Title",subTitle="Content Title")
        //-                     mu-card-text
        //-                         span 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        //-                         span 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        //-             mu-col(desktop="25", width="100")
        //-                 mu-card
        //-                     mu-card-media
        //-                         img(src="/static/img/home/today01.jpg")
        //-                     mu-card-title(title="Content Title",subTitle="Content Title")
        //-                     mu-card-text
        //-                         span 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        //-                         span 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        //-             mu-col(desktop="25", width="100")
        //-                 mu-card
        //-                     mu-card-media
        //-                         img(src="/static/img/home/today01.jpg")
        //-                     mu-card-title(title="Content Title",subTitle="Content Title")
        //-                     mu-card-text
        //-                         span 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        //-                         span 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        //- div.news.white
        //-     div.container
        //-         div.title CodeA 社区活动
        //-         div.sub-title 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间
        //-         mu-row(gutter)
        //-             mu-col(desktop="33", width="100")
        //-                 mu-card
        //-                     mu-card-media
        //-                         img(src="/static/img/home/today01.jpg")
        //-                     mu-card-title(title="Content Title",subTitle="Content Title")
        //-                     mu-card-text
        //-                         span 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        //-                         span 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        //-             mu-col(desktop="33", width="100")
        //-                 mu-card
        //-                     mu-card-media
        //-                         img(src="/static/img/home/today01.jpg")
        //-                     mu-card-title(title="Content Title",subTitle="Content Title")
        //-                     mu-card-text
        //-                         span 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        //-                         span 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        //-             mu-col(desktop="33", width="100")
        //-                 mu-card
        //-                     mu-card-media
        //-                         img(src="/static/img/home/today01.jpg")
        //-                     mu-card-title(title="Content Title",subTitle="Content Title")
        //-                     mu-card-text
        //-                         span 散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        //-                         span 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
</template>

<script>

import Browser from '@/common/browser'

export default {
    name: 'home',
    data() {
        return {
            isMobile: Browser.mobile,
            homeData: {},
            homeHeight: Browser.mobile ? (window.innerHeight - 60) : (window.innerHeight - 280)
        }
    },
    mounted: function () {
        var _this = this

        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                _this.screenWidth = window.screenWidth
            })()
        }

        document.title = '首页 - ' + this.$config.title

        //get home's text
        this.$db.getHome(this).then(res => {
            this.homeData = res[0]
        })
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.home {
    .title.desktop {
        font-size: 3em;
        font-family: "习宋体";
    }
    .title.mobile {
        font-size: 1.5em;
        font-family: "习宋体";
    }
}

p {
    line-height: 25px;
}

.mobile {
    width: 100%;
}

.home.button {
    border-top: 1px solid #ddd margin-top 10px;

    .more {
        color: #457cce;
    }
    &:hover {
        border-top: 1px solid #457cce;
        cursor: pointer;
    }
}

.news {
    padding: 30px 30px;
    width: 100%;

    .title {
        text-align: center;
        font-size: 3em;
        line-height: 2em;
        font-weight: bold;
        color: #555;
    }

    .sub-title {
        text-align: center;
        font-size: 1.2em;
        line-height: 2em;
        color: #888;
        padding-bottom: 10px;
    }
}

.news.gray {
    background-color: #EEE;
}

.news.white {
    background-color: #F7F7F7;
}
</style>