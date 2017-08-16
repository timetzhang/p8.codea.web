<template lang="jade">
    div(:class="isMobile ? 'mobile' : 'container'")
        div.home
            a(href="/course/id=58")
                img(:src="isMobile ? '/static/img/home/home_mobile.png' : '/static/img/home/home_desktop.png'" style="width:100%")
        div.home.button
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
        div.home.button
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
</template>

<script>

import Browser from '@/common/browser'

export default {
    name: 'home',
    data() {
        return {
            isMobile: Browser.mobile,
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
        document.title = '首页 - ' + this.$config.title;
    },
    methods: {

    }
}
</script>

<style scoped>
p {
    line-height: 25px;
}
.mobile{
    width:90%;
}
.home.button{
    border-top:1px solid #ddd;
    margin-top:10px;
}
.home.button:hover{
    border-top:1px solid #457cce;
    cursor: pointer;
}

.home.button .more{
    color: #457cce
}
</style>