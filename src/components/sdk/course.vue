<template lang="jade">
    div
        mu-row
            mu-col.center.aligned(desktop="25",table="50",width="100")
                mu-paper.sdkimg(:z-Depth="5")
                    img(src="../../assets/logo.png")
            mu-col(desktop="75",table="50",width="100",style="padding-left:10px;")
                h2(style="margin-top:0;") 科大讯飞
                p 讯飞开放平台是科大讯飞旗下人工智能开放平台，全面开放业界领先的语音合成、语音识别、语音唤醒、人脸识别、麦克风阵列等10多项核心能力，支持“云+端”全环境应用，提供一站式人工智能解决方案。目前，讯飞开放平台主要应用场景包括：移动应用、智能家居、可穿戴设备、机器人等领域，同时已吸引QQ、高德、滴滴打车、新浪微博、优必选、暴风魔镜等在内15万多合作伙伴加盟，覆盖终端用户超过8亿。
            div
                mu-chip 语音合成
                mu-chip 语音听写
                mu-chip 语义理解
                mu-chip 个性化识别
                mu-chip 语法识别
        br
        hr
        mu-row
            mu-col
                h2 官方入口
                a(href="http://doc.xfyun.cn/msc_ios/302720") http://doc.xfyun.cn/msc_ios/302720
        hr
        mu-row
            mu-col
                h2 语音合成
                p 本示例对应Demo的TTSUIController文件，为在线合成的代码示例。
        hr
        mu-row
            mu-col
                h2 项目实例
                p 本示例对应Demo的TTSUIController文件，为在线合成的代码示例。
        hr
        mu-row
            mu-col
                h2 在线运行
                mu-raised-button(backgroundColor="#a4c639") 立即运行




</template>

<script>
export default {
    name: 'course',
    data() {
        return {

        }
    },
    mounted: function () {

    },
    methods: {

    }
}
</script>

<style scoped>
.sdkimg {
    display: inline-block;
    width: 150px;
    height: 150px;
    padding: 4px;
    margin-bottom: 10px;
}

.sdkimg img {
    width: 142px;
    height: 142px;
}

.mu-chip {
    margin: 4px;
}
</style>