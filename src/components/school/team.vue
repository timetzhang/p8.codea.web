<template lang="jade">
    mu-paper
        mu-paper
            mu-content-block.para
                h2 APP项目
                p 主要涉及程序语言(Objective-c、Swift、Java、nodejs)
                h3 ios APP
                p ui设计师、ios工程师、后端工程师
                h3 android APP
                p ui设计师、android工程师、后端工程师
                h3 web APP(多平台)
                p ui设计师、webAPP工程师、后端工程师
        p
        mu-paper
            mu-content-block.para
                h2 PC项目
                p 主要涉及程序语言(C、Python、C#、Objective-c、Swift、Java、nodejs、Html5)
                h3 windows应用
                p ui设计师、windows工程师、后端工程师
                h3 mac应用
                p ui设计师、android工程师、后端工程师
                h3 linux应用
                p ui设计师、liunx工程师、后端工程师
                h3 网页开发
                p ui设计师、web工程师、后端工程师
        p
        mu-paper
            mu-content-block.para
                h2 游戏项目
                h3 unit3D
                h3 cocos2D
                h3 原画设计师
        p
        mu-paper
            mu-content-block.para
                h2 硬件开发
                h3 stm32
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