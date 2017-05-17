<template lang="jade">
    mu-paper
        mu-paper
            mu-content-block.para
                h2 APP项目
                p 主要涉及程序语言(Objective-c、Swift、Java、Nodejs)
                h3 iOS APP
                p UI设计师、iOS工程师、后端工程师
                h3 Android APP
                p UI设计师、Android工程师、后端工程师
                h3 Web APP(多平台)
                p UI设计师、WebAPP工程师、后端工程师
        p
        mu-paper
            mu-content-block.para
                h2 PC项目
                p 主要涉及程序语言(C、Python、C#、Objective-c、Swift、Java、Nodejs、Html5)
                h3 Windows应用
                p UI设计师、Windows工程师、后端工程师
                h3 Mac应用
                p UI设计师、Android工程师、后端工程师
                h3 Linux应用
                p UI设计师、Linux工程师、后端工程师
                h3 网页开发
                p UI设计师、Web工程师、后端工程师
        p
        mu-paper
            mu-content-block.para
                h2 游戏项目
                h3 Unit3D
                h3 Cocos2D
                h3 原画设计师
        p
        mu-paper
            mu-content-block.para
                h2 硬件开发
                h3 STM32
</template>

<script>
export default {
    name: 'school-vision',
    data() {
        return {

        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    methods: {

    }
}
</script>

<style scoped>
.content {
    padding: 20px;
}
</style>