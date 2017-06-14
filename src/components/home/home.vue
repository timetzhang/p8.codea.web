<template lang="jade">
    div
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" v-if='isMobile' style="background-image:url('/static/img/home/home_mobile.jpg')")
        mu-row.fullscreen(v-bind:style="{height : height + 'px'}" v-if='!isMobile' style="background-image:url('/static/img/home/home_desktop.jpg')")
        
        mu-row(gutter v-for="item in learning" key="id")
            mu-col(desktop="20" tablet="10" width="10")
            mu-col.mar-space(desktop="60" tablet="80" width="80" )
                img(:src="item.img")
                h2 {{item.title}}
                p(v-html="item.content")
            mu-col(desktop="20" tablet="10" width="10")
        
        mu-row.mar-space(gutter style="background-color:#eaeaea")
            mu-col.center.aligned(desktop="100" tablet="100" width="100")
                div(style="border:4px solid black;display:inline-block;padding:1% 5%;margin:4% auto;text-align:left")
                    h1 在这里<br/>你可以参与到的项目
            mu-col(desktop="100")
                mu-row
                    mu-col(desktop="50" tablet="100" width="100" v-for="item in program" key="pro" v-bind:class="item.colorId" style="padding:2% 5%;vertical-align: middle;")
                        img(:src="item.img" style="width:10%;display:inline-block;margin:0% 5%;float:left;")
                        div(style="display:inline-block;width:70%")
                            h3 {{item.title}}
                    mu-col.center.aligned(desktop="100" tablet="100" width="100")
                        mu-flat-button(label="项目详情" to="/school/team" backgroundColor="white" color="#d00000" style="margin: 1% 0;border:2px solid #d00000;padding:0 5%;")
        
        mu-row.mar-space(gutter v-for="item in lastList" key="id" style="margin-bottom:60px;")
            mu-col(desktop="10" tablet="10" width="10")
            mu-col(desktop="70" tablet="80" width="80")
                mu-flexbox(:orient="orient")
                    mu-flexbox-item.pad-space(:order="item.textId" style="padding:0 5%;")
                        h1 {{item.title}}
                        hr(style="width:20%;background-color:black;height:4px;margin:0")
                        p(v-html="item.content")
                    mu-flexbox-item(:order='item.imgId' style="padding:0 5%;")
                        img(:src="item.img")
            mu-col(desktop="20" tablet="10" width="10")

</template>

<script>

import Browser from '@/common/browser'

export default {
    name: 'home',
    data() {
        return {
            height: 0,
            isMobile: Browser.mobile,
            screenWidth: document.body.clientWidth,
            orient: '',
            learning: [
                {
                    title: 'Co-Learning',
                    content: '我们的核心是Co-Learning，大家聚在一起学习与交流，在自我探索和与群体分享的过程中，获取全面、最新的知识，解决知识更新过快的问题。<br />学生之间相互合作，互相学习，能培育出最具创新能力和学习能力的计算机专业人才。他们工作热情主动，他们有最好的学习能力，面临新的障碍有解决方案。',
                    img: '/static/img/home/1.jpg'
                },
                {
                    title: '基于项目的实战教学模式 - 团队协作 项目主导',
                    content: '一旦进入学校，便开始了项目合作。你可以选择项目中感兴趣的部分，所有获取的知识都来自于实际的项目。<br />CodeA会为你提供可选择的项目，了解项目需求后，你可以自行组建自己的项目组，你可以选择UI设计，逻辑开发或者数据库管理等。你完成的项目越多，级别越高，每到达7级或7的倍数时，可进入实习与商业项目开发组。<br/>在CodeA，每个人都是一个独特的个体，都根据自己学习的进展，根据自己的私人化课程来学习。',
                    img: '/static/img/home/2.jpg'
                },
                {
                    title: '教和学是一体的',
                    content: '老师就是你身边的任何一个人,他可以是学校聘任的编程大师，也可以是刚入学的同学。同时，你也会成为其他人的老师，也不要吝啬你的知识，分享给你身边的人。<br />求知若饥 虚心若愚',
                    img: '/static/img/home/3.jpg'
                },
                {
                    img: '/static/img/home/4.jpg',
                    content: '我们提供能够很好互动的空间，来吸引更多的想你这样的年轻人，和我们在这里一起交流，交换想法，碰撞火花<br/>空间准则：不用提高声音，就可以同时和7位同学进行交流',
                    title: '开放空间'
                }
            ],
            program: [
                {
                    colorId: 'graybg',
                    img: '/static/img/home/game.png',
                    title: '游戏项目'
                },
                {
                    colorId: 'whitebg',
                    img: '/static/img/home/data.png',
                    title: '数据库项目'
                },
                {
                    colorId: 'whitebg',
                    img: '/static/img/home/text.png',
                    title: '文本操作项目'
                },
                {
                    colorId: 'graybg',
                    img: '/static/img/home/file.png',
                    title: '文件处理项目'
                },
                {
                    colorId: 'graybg',
                    img: '/static/img/home/web.png',
                    title: 'Web项目'
                },
                {
                    colorId: 'whitebg',
                    img: '/static/img/home/media.png',
                    title: '图像与多媒体项目'
                }
            ],
            lastList: [
                {
                    textId: 1,
                    imgId: 2,
                    title: '激情 多元创作',
                    content: '在CodeA，你还能学习创造曲子和画作，并与你的同伴一起参与健身运动。<br/>创造总是充满激情。睡觉和休闲的地方就在工作空间旁，如果一天需要工作15个小时，就可以节省跑来跑去的时间',
                    img: '/static/img/home/5.jpg'
                },
                {
                    textId: 1,
                    imgId: 0,
                    title: '自我管理系统',
                    content: '从课程到教务，学校用最好的学生帮助内部运转。<br/>因为你---程序员是一个聪明而不听话的人，没有任何教条能框住你',
                    img: '/static/img/home/6.jpg'
                },
                {
                    textId: 1,
                    imgId: 2,
                    title: '好程序员标准是什么',
                    content: '通常，程序员的学习需要很快的适应快速变化的世界，因为编程语言过三个月就会变<br/>那些学习能力强，适应能力强，团队合作力强的人将会存活<br/>而你，将会拥有这些',
                    img: '/static/img/home/7.jpg'
                },
                {
                    textId: 1,
                    imgId: 0,
                    title: 'Geek文化',
                    content: '你所处的P8就是一个Geek文化的中心，你在这会成为一个程序员<br/>同时你还会是一个艺术家，或是一个音乐家，画家<br/>这些，只会让你成为一个更好的程序员<br/>学习更多的知识，是为了更好的体验世界的精彩',
                    img: '/static/img/home/8.jpg'
                }
            ]
        }
    },
    created: function () {
        if (document.documentElement && document.documentElement.clientHeight) {
            this.height = document.documentElement.clientHeight;
        }
        if (this.isMobile) {
            this.orient = 'vertical';
            for (var i = 0; i < this.lastList.length; i++) {
                this.lastList[i].imgId = 0;
            }
        }
        else {
            this.orient = 'horizontal';
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
        document.title = '首页 - CodeA - Sky College';
    },
    methods: {

    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function () {
                    if (that.screenWidth < 900) {
                        that.orient = 'vertical';
                        for (var i = 0; i < that.lastList.length; i++) {
                            that.lastList[i].imgId = 0;
                        }
                    } else {
                        that.orient = 'horizontal';
                        for (var i = 0; i < that.lastList.length; i++) {
                            if (i == 1 || i == 3) {
                                that.lastList[i].imgId = 2;
                            }
                        }
                    }
                    that.timer = false
                }, 400)
            }
        }
    }
}
</script>

<style scoped>
.container {
    width: 100% !important;
    padding: 0 !important;
}

p {
    line-height: 25px;
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

@media screen and (min-width:1200px) {
    .mar-space {
        margin-top: 160px;
    }
    .pad-space {
        padding-right: 14%;
    }
}

@media screen and (min-width:960px) and (max-width: 1199px) {
    .mar-space {
        margin-top: 160px;
    }
}

@media only screen and (min-width:768px) and (max-width:959px) {
    .mar-space {
        margin-top: 60px;
    }
}

@media screen and (max-width:767px) {
    .mar-space {
        margin-top: 60px;
    }
    .fullscreen {
        background-image: url('/static/img/home/home_mobile.jpg') !important;
    }
}

.mar-space img {
    width: 100%;
}

.whitebg {
    background-color: white;
}

.graybg {
    background-color: #d7d7d7;
}
</style>