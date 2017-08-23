<template lang="jade">
    div.home.back(:class="isMobile ? 'mobile' : ''", :style="'background-size: 100% '+(homeHeight+100)+'px'")
        div.home.container
            a(:href="homeBigscreen[homeBigscreenIndex].url")
                img.logo(src="/static/img/home/logo.png", style="padding:0 30px;", v-if="!isMobile")
                div.center.aligned.animation#home(v-if="isMobile",:style="'height:' + homeHeight + 'px;min-height:400px; padding-top:' + homeHeight/2.5 + 'px; font-size: ' + homeBigscreen[homeBigscreenIndex].font_size_mobile + 'em'",v-html="homeBigscreen[homeBigscreenIndex].text_mobile")
                div.center.aligned.animation#home(v-if="!isMobile",:style="'height:' + homeHeight + 'px;min-height:400px; padding-top:' + homeHeight/2.5 + 'px; font-size: ' + homeBigscreen[homeBigscreenIndex].font_size_desktop + 'em'",v-html="homeBigscreen[homeBigscreenIndex].text_desktop")
        div.home.list.container(v-for="item in homeList", :key="item.id")
            a(:href="item.url")
                mu-row(gutter)
                    mu-col(desktop="10", width="0")
                    mu-col(desktop="20", width="100",:class="isMobile ? 'center aligned' : 'right aligned'")
                        img(:src="item.image")
                    mu-col.text(desktop="60", width="100",:class="isMobile ? 'center aligned' : 'left aligned'")
                        h4 {{item.title}}
                        div.details {{item.details}}
                        p.more 点击查看更多>>
                    mu-col(desktop="10", width="0")
        //- div.news.gray
        //-     div.container
        //-         div.title CodeA Today
        //-         div.sub-title 学院最新动态和新闻
        //-         mu-row(gutter)
        //-             mu-col(desktop="25", width="100", v-for="item in news", :key="item.id")
        //-                 a(:href="item.url")
        //-                     mu-card
        //-                         mu-card-media
        //-                             img(:src="item.head_image", style="height:200px;")
        //-                         mu-card-text
        //-                             div.item-title {{item.name}}
        //-                             div.item-sub-title {{item.time}}
        //-                             p.brief {{item.brief}}
        div.news
            div.container
                div.title P8 社区活动
                div.sub-title CODEA所在社区P8是一个未来垂直实验社区和共享共建文化的孵化体系
                mu-row(gutter)
                    mu-col(desktop="33", width="100", v-for="item in newsEvents", :key="item.id")
                        a(:href="item.url")
                            mu-card
                                mu-card-media(:title="item.name",:subTitle="item.time", titleClass="item-title", subTitleClass="item-sub-title")
                                    img(:src="item.head_image", style="height:200px;")
                                mu-card-text
                                    div.brief {{item.brief}}
                                    p
                                        b 开始时间:
                                        span &nbsp;{{item.start_time}}
                                        br
                                        b 结束时间:
                                        span &nbsp;{{item.end_time}}
                                        br
                                        b 地点:
                                        span &nbsp;{{item.location}}
</template>

<script>

import Browser from '@/common/browser'
import DateTime from '@/common/datetime'

export default {
    name: 'home',
    data() {
        return {
            //basic
            isMobile: Browser.mobile,                 //mobile or pc

            //home screen
            homeBigscreen: [{ url: '' }],             //第一屏内容
            homeBigscreenIndex: 0,                    //第一屏Index
            homeHeight: Browser.mobile ? (window.innerHeight - 60) : (window.innerHeight - 280),

            //home list
            homeList: [],                             //第二屏List

            //news
            newsEvents: [],    //news event data
            news: [],          //news data
        }
    },
    mounted: function () {
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                _this.screenWidth = window.screenWidth
            })()
        }

        document.title = '首页 - ' + this.$config.title

        this.getHomeBigscreen();
        this.getHomeList();
        this.getNews();
        this.getNewsEvent();
        this.AnimationBegin();
    },
    methods: {
        /* 首页顶部的写传大图或TEXT */
        getHomeBigscreen() {
            this.$db.getHomeBigscreen(this).then(res => {
                this.homeBigscreen = res
            })
        },
        /* 首页顶部大图下面的宣传的list */
        getHomeList() {
            this.$db.getHomeList(this).then(res => {
                this.homeList = res
            })
        },
        /* News: News分为today, events */
        getNews() {
            this.$db.getNews(this, { pagenum: 0, pagesize: 5 }).then(res => {
                this.news = res
                res.forEach(function (element) {
                    element.time = DateTime.dateFormat(element.time)
                }, this);
            })
        },
        getNewsEvent() {
            this.$db.getNewsEvent(this, { pagenum: 0, pagesize: 3 }).then(res => {
                this.newsEvents = res

                //format times.
                res.forEach(function (element) {
                    element.time = DateTime.dateFormat(element.time)
                    element.start_time = DateTime.dateFormat(element.start_time)
                    element.end_time = DateTime.dateFormat(element.end_time)
                }, this);
            })
        },

        //animation
        AnimationBegin() {
            setInterval(() => {
                document.querySelector('#home').classList.add('show')
                setTimeout(() => {
                    this.homeBigscreenIndex = this.homeBigscreenIndex < 2 ? this.homeBigscreenIndex + 1 : 0
                    document.querySelector('#home').classList.remove('show')
                }, 200)
            }, 4000)
        }
    }
}
</script>

<style lang="scss">
p {
    line-height: 25px;
}

.home {
    .animation {
        transition: transform 0.2s linear;
    }
    .animation.show {
        transform: rotateX(90deg);
    }
}

.home.back {
    background: url('/static/img/home/back.png') no-repeat;
}

.mobile {
    width: 100%;
}

.home.list {
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

    &:nth-child(odd) {
        background-color: #f7f7f7;
    }

    &:nth-child(even) {
        background-color: #eee;
    }

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

    .brief {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .item-title {
        font-size: 1.1em;
        font-weight: bold;
    }

    .item-sub-title {
        font-size: 0.8em;
        font-weight: bold;
        color: #aaa;
    }
}
</style>