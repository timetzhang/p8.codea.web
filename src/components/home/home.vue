<template lang="jade">
    mu-row(gutter)
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" v-if='isMobile' style="background-image:url('/static/img/home/mobile_home.jpg')")
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" v-if='!isMobile' style="background-image:url('/static/img/home/homebg.jpg')")
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: #b00000;background-color:#eaeaea")
            mu-col(:class="isClass" desktop="50" width="100" style="padding: 0 10%;")
                h1 Co-Learning
                .line(style="background-color:#b00000")
                br
                p 我们的核心是Co-Learning（联合学习）
                p 在自我探索和与群体分享的过程中，大家聚在一起学习与交流，获取全面、最新的知识，解决知识更新过快的问题。
            mu-col(:class="isClass" desktop="50" width="100")
                .img(style="background-image: url(../../../static/img/home/one.jpg)")
                    .identifie(style="border: 4px solid white")

        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: black;background-color:#f4f4f4")
            mu-col(:class="isClass" desktop="50" width="100")
                .img(style="background-image: url(../../../static/img/home/three.png)")
                    .identifie(style="border: 4px solid white")
            mu-col(:class="isClass" desktop="50" width="100" style="padding: 0 10%;")
                h1 项目驱使的教学方法
                .line(style="background-color: black")
                br
                p 一进入学校，便开始真正进入项目合作。
                p 你可以选择项目中感兴趣的部分所有获取的知识都来自于实际的项目。CodeA会为你提供可选择的项目，了解项目需求后，你可以自行选择：UI设计或者数据库等
                p 你完成的项目越多，级别越高，每到达7级或7的倍数时，可进入实习与培训项目
                p 毕业时，你的履历中将是满满的经验值.

        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: black;background-color:#eaeaea")
            mu-col(:class="isClass" desktop="50" style="padding: 0 10%;")
                h1 教和学是一体的
                .line(style="background-color:#222")
                br
                p 老师就是你身边的任何一个人，他可以是学校的聘任的编程大师，也可以是刚入学的同学；不要吝啬你的知识，分享给你身边的人
            mu-col(:class="isClass" desktop="50")
                .img(style="background-image: url(../../../static/img/home/two.jpg);height:70%;width:100%")
                    .identifie(style="border: 4px solid white")

        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: black;background-color:#f4f4f4")
            mu-col(:class="isClass" desktop="50")
                .img(style="background-image: url(../../../static/img/home/three.png)")
                    .identifie(style="border: 4px solid white")
            mu-col(:class="isClass" desktop="50" style="padding: 0 10%;")
                h1 按照自己的节奏
                .line(style="background-color:black")
                br
                p 如果能用一天的时间学习完课表上五天的内容，为什么不呢？在大多数学校里，所有人都要用同样的时间，学同一样的东西
                p 但在CodeA，你可以自由地按照自己的节奏学习
                p 你生来就不一样，不需要同进退


        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="color: #3b3b3b;padding: 0 10%;background-color:#eaeaea")
            mu-col(:class="featureListClass" desktop="30" width="100" v-for="item in features")
                div(style="height: 70%;background-color: white;" align="center")
                    img(:src="item.img" style="width:51%;margin:17% 0;")
                    p(style="padding:0 15%;" v-html="item.textfile" align="left")  {{item.textfile}}
                    h2(style="margin: 14% 0") {{item.name}}
        //mobile
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" v-if="isMobile" style="padding:0;background-color:#f4f4f4")
            mu-col(:class="isClass" desktop="100" width="100" style="height:27%")
                    h1(align="center") 在这里 <br/> 你可以参与到的项目
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:#d7d7d7;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/game.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 游戏项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:white;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/game.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 数据库项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" style="height:20%;background-color:white;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/textctr.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 文本操作项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:#d7d7d7;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/filectr.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 文件处理项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:#d7d7d7;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/web.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 Web项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:white;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/media.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 图像与多媒体项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="100" align="center" style="height:13%")
                    mu-raised-button(style="width:300px;height:50px;font-size:18px;color:#b00000") 更多项目
        //pc
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" v-if="!isMobile" style="padding:0;background-color:#f4f4f4")
                mu-col(:class="isClass" desktop="100" width="100" style="height:27%")
                    h1(align="center") 在这里 <br/> 你可以参与到的项目
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:#d7d7d7;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/game.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 游戏项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:white;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/game.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 数据库项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" style="height:20%;background-color:white;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/textctr.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 文本操作项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:#d7d7d7;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/filectr.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 文件处理项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:#d7d7d7;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/web.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 Web项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="50" width="100" style="height:20%;background-color:white;padding:0 8% 0 3%;")
                    mu-row.fullscreen(style="height:100%")
                        mu-col(:class="isClass" desktop="50" width="100" align="center" style="height:100%;vertical-align:middle;")
                            img(src="../../../static/img/home/media.png")
                        mu-col(:class="isClass" desktop="50" width="100")
                            h2 图像与多媒体项目
                            p 统且全面地介绍了程序开发的流程。对于项目开发中的开发背景
                mu-col(:class="isClass" desktop="100" align="center" style="height:13%")
                    mu-raised-button(style="width:300px;height:50px;font-size:18px;color:#b00000") 更多项目
        
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="padding:0;background-color:#eaeaea")
            mu-col(:class="isClass" desktop="100" style="height:27%")
                h1(align="center") 所想 <br/> 即所得
            mu-col(:class="isClass" desktop="100" align="center" style="height:73%")
                h2 项目孵化
                h2 团队孵化
                h2 成为远大集团的一员
                h2 成为P8的一员
                

        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" style="padding:0;background-color:#f4f4f4")
            mu-col(:class="isClass" align="center" desktop="100" style="position: relative")
                div.last-title
                    h1 Geek文化
                div.last-content
                    .line(style="background-color:#b00000")
                    br
                    p 你所处的P8就是一个Geek文化的中心，你在这会成为一个程序员<br/>同时也会是个艺术家，或许是一个音乐家，画家<br/>这些，只会让你成为一个更加优秀的程序员<br/>学习更多的知识，是为了更好的体验世界的精彩
                div.last-img
                    img(src="../../../static/img/home/last_img.jpg")
</template>

<script>

import Browser from '@/common/browser'

export default {
    name: 'home',
    data() {
        return {
            height: 0,
            isMobile: Browser.mobile,
            isClass: '',
            featureListClass: '',
            isProgram: '',
            features: [
                {
                    color: 111111,
                    img: '../../../static/img/home/open_space.png',
                    textfile: '我们提供能够很好互动的空间，来吸引更多的想你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花<br/>空间准则：不用提高声音，就可以同时和7位同学进行交流',
                    name: '开放空间'
                },
                {
                    color: 111111,
                    img: '../../../static/img/home/creation.png',
                    textfile: '在CodeA，你还能学习创造曲子和画作，并与你的同伴一起参与健身运动。创造总是充满激情。睡觉和休闲的地方就在工作空间旁，如果一天需要工作15个小时，就可以节省跑来跑去的时间',
                    name: '激情多元创作'
                },
                {
                    color: 111111,
                    img: '../../../static/img/home/manage.png',
                    textfile: '从课程到教务，学校用最好的学生帮助内部运转。<br/>因为你---程序员是一个聪明而不听话的人，没有任何教条能框住你',
                    name: '自我管理系统'
                }
            ]
        }
    },
    created: function () {
        if (document.documentElement && document.documentElement.clientHeight) {
            this.height = document.documentElement.clientHeight;
        }
        if (this.isMobile){
                this.isClass = 'half';
                this.featureListClass = 'feature-list-half';
                this.isProgram = ''
            }else{
                this.isClass = "full";
                this.featureListClass = 'feature-list-full'
            }
            console.log(this.isClass)
    },
    mounted: function () {
    },
    methods: {
        
    }
}
</script>

<style scoped>
p {
    margin: 0 !important;
}

.container {
    width: 100% !important;
    padding: 0 !important;
}

.first-page {
    font-size: 70px;
    background-color: #151515;
    color: white;
    margin: 0 auto;
    padding: 20px;
}

.fullscreen {
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.half {
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 5%;
}

.half .img {
    height: 63%;
}

.half h1 {
    margin-top: 0;
}

.full {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 10%;
}

.full .img {
    height: 43%;
}

.feature-list-half {
    height: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.feature-list-half:first-child {
    margin-top: 11%;
}

.feature-list-half:last-child {
    margin-bottom: 11%
}

.feature-list-half img {
    display: none;
}

.feature-list-half h2 {
    position: relative;
    margin: 2% 0 0 0 !important;
}

.feature-list-half div {
    padding-top:10%;
    height: 100% !important;
}

.feature-list-full {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.half p {
    font-size: 15px;
    line-height: 27px;
    margin: 10px 0;
}

.line {
    width: 71px;
    height: 4px;
}

.img {
    height: 35%;
    padding-top: 30px;
    padding-right: 30px;
    background-repeat: no-repeat;
    background-size: 94% 90%;
    background-position: right top;
}

.img>.identifie {
    height: 100%;
    width: 100%;
}

h2 {
    margin-bottom: 0;
}

.last-title {
    position: relative;
    color: #b00000;
    top: 4%;
    left: -10%;
    z-index: 99;
    background-color: #f4f4f4;
    width: 20%;
}

.last-content {
    position: relative;
    color: #b00000;
    width: 25%;
    top: 5%;
    left: -1%;
    padding: 0 10px;
    z-index: 99;
    line-height: 25px;
    text-align: left;
    background-color: #f4f4f4;
}

.last-img {
    position: relative;
    top: -15%;
    width: 75%;
    height: 65%;
    border: 4px solid white;
}

.last-img img {
    width: 90%;
    height: 98%;
    position: relative;
    top: 15%;
    left: 1%;
}
</style>