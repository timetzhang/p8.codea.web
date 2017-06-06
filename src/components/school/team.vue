<template lang="jade">
    div.padded
        mu-paper
            mu-content-block.para
                h3 基于项目的实战教学模式 - 团队协作 项目主导
                p 一旦进入学校，便开始了项目合作, 你将是项目组的一员，在学习技能的同时进行创业。你可以选择项目中感兴趣的部分，所有获取的知识都来自于实际的项目。
                p CodeA 会为你提供可选择的项目，或者你可以提出自己的项目，了解项目需求后，你可以自行组建项目组。可以选择UI设计，逻辑开发或者数据库管理等。你完成的项目越多，级别越高，每到达7级或7的倍数时，你将获得。
                p 在 CodeA，每个人都是一个独特的个体，每一个项目组也是独特的，大家都根据自己学习的进展，根据自己的私人化课程来学习。
                mu-divider
                h3 组建项目组
                p 入学后的第一个月，我们通过挖掘学生的其他兴趣与喜好方向，来组建学生自己的创业团队(3-6人)。可能花费一周或更长的时间，因为团队里的成员可能是一辈子创业伙伴。
                p 比如：小红的兴趣是钢琴，小明是制作音箱，小刚是编码爱好者，他们将有可能组成一个做音乐设备的项目组。
                mu-divider
                h3 项目组股份制
                p 每一个项目组将使用股份制来进行内部管理，专项导师，技术导师与运营导师会占部分股份。
                mu-divider
                h3 用户至上
                p 我们会帮助每个项目组尽快接触到自己的用户，通过用户反馈，迭代产品。
                mu-divider
                h3 两年时间，你将拥有自己的用户，拥有创业伙伴
                p 只有得到用户的反馈，才能做出用户真正需要的产品。

        
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