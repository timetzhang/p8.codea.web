<template lang="jade">
    mu-row(gutter)
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: #111111;")
            mu-col.half(desktop="50" style="padding: 0 200px 0 0;")
                h1 采用最先进的教学方式
                .line(style="background-color:#111111")
                p 我们的核心是Co-Learning，大家聚在一起学习与交流可以通过网络获取知识，解决知识更新过快的问题
            mu-col.half(desktop="50")
                .img(style="background-image: url(../../../static/img/home/geek1.png)")
                    .identifie(style="border: 4px solid #00FFFF")
        mu-divider
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: black;")
            mu-col.half(desktop="50" style="padding: 0 200px 0 0;")
                h1 教和学是一体的
                .line(style="background-color:#111111")
                p 老师就是你身边的任何一个人，他可以是学校的聘任的编程大师，也可以是刚入学的同学；不要吝啬你的知识，分享给你身边的人
            mu-col.half(desktop="50")
                .img(style="background-image: url(../../../static/img/home/geek1.png)")
                    .identifie(style="border: 4px solid white")
        mu-divider
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: #8d52fa;")
            mu-col.half(desktop="50")
                .img(style="background-image: url(../../../static/img/home/geek1.png)")
                    .identifie(style="border: 4px solid #8d52fa")
            mu-col.half(desktop="50" style="padding: 0 0 0 200px;")
                h1 按照自己的节奏
                .line(style="background-color:#8d52fa")
                p 学校里，所有人都要用同样的时间，学同一样东西，这个不是Bad idea吗 <br/> 你将按照自己的节奏来学习 <br/>你生来就不一样，不需要同进退
        mu-divider
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: #3b3b3b;padding: 0 10%;")
            mu-col.half(desktop="30" v-for="item in features")
                div(style="height: 70%;background-color: white;" align="center")
                    img(:src="item.img" style="width:51%;margin:17% 0;")
                    p(style="padding:0 15%;" v-html="item.textfile" align="left")  {{item.textfile}}
                    h2(style="margin: 14% 0") {{item.name}}
        mu-divider
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="padding:0;")
                mu-col.half(desktop="100" style="height:30%")
                    h1(align="center") 在这里 <br/> 你可以参与到的项目
                mu-col.half(desktop="50" style="height:20%;background-color:#ff4792;padding:0 3% 0 8%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col.half(desktop="50" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/game.png")
                        mu-col.half(desktop="50")
                            h2 游戏项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col.half(desktop="50" style="height:20%;background-color:white;padding:0 3% 0 8%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col.half(desktop="50" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/datamanager.png")
                        mu-col.half(desktop="50")
                            h2 数据库项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col.half(desktop="50" style="height:20%;background-color:white;padding:0 3% 0 8%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col.half(desktop="50" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/textctr.png")
                        mu-col.half(desktop="50")
                            h2 文本操作项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col.half(desktop="50" style="height:20%;background-color:#00FFFF;padding:0 3% 0 8%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col.half(desktop="50" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/filectr.png")
                        mu-col.half(desktop="50")
                            h2 文件处理项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col.half(desktop="50" style="height:20%;background-color:#bd52fa;padding:0 3% 0 8%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col.half(desktop="50" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/web.png")
                        mu-col.half(desktop="50")
                            h2 Web项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col.half(desktop="50" style="height:20%;background-color:white;padding:0 3% 0 8%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col.half(desktop="50" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/media.png")
                        mu-col.half(desktop="50")
                            h2 图像与多媒体项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col.half(desktop="100" align="center" style="height:10%")
                    mu-raised-button(style="width:100px;") 更多项目
            
</template>

<script>

export default {
    name: 'home',
    data() {
        return {
            height: 0,
            features: [
                {
                    color: 111111,
                    img: '../../../static/img/home/open_space.png',
                    textfile: '我们提供能够很好互动的空间，来吸引更多的想你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花<br/>空间准则：不用提高声音，就可以同时和7位同学进行交流',
                    name: '开放空间'
                },
                {
                    color: 111111,
                    img: '../../../static/img/home/open_space.png',
                    textfile: '我们提供能够很好互动的空间，来吸引更多的想你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花<br/>空间准则：不用提高声音，就可以同时和7位同学进行交流',
                    name: '激情多元创作'
                },
                {
                    color: 111111,
                    img: '../../../static/img/home/open_space.png',
                    textfile: '我们提供能够很好互动的空间，来吸引更多的想你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花<br/>空间准则：不用提高声音，就可以同时和7位同学进行交流',
                    name: '自我管理系统'
                }
            ]
        }
    },
    created:function (){
        if (document.documentElement && document.documentElement.clientHeight){
            this.height = document.documentElement.clientHeight;
        }
    },
    mounted: function () {
    },
    methods: {
        
    }
}
</script>

<style scoped>
.container {
    width: 100% !important;
    padding: 0 !important;
}

.fullscreen {
    width: 100%;
    padding: 0 20%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.fullscreen > .half {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.half p {
    font-size: 15px;
}

.line {
    width: 71px;
    height: 4px;
}

.img {
    height: 39%;
    margin: 0 37.5px;
    padding-top: 30px;
    padding-right:30px;
    background-repeat: no-repeat;
    background-size: 92% 90%;
    background-position: right top;
}

.img > .identifie {
    height: 100%;
    width: 100%;
}

h2 {
    margin-bottom: 0;
}
</style>