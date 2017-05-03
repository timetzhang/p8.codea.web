<template lang="jade">
    mu-paper.content
        h3 合作学习
        p 学生之间相互合作，互相学习，能培育出最具创新能力，和学习能力的计算机专业人才。他们工作热情主动，他们有最好的学习能力，面临新的障碍有解决方案。
        h3 根据学生自己的节奏前进
        p 每个学生都有自己的节奏，每个学生都按照自己的节奏前进。在CodeA，每个人都是一个独特的个体，都根据自己学习的进展，根据自己的私人化课程来学习。

</template>

<script>
export default {
    name: 'school-contact',
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
    .content{
        padding:20px;
    }
</style>