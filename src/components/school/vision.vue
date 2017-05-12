<template lang="jade">
    div
        mu-paper.page.title
            mu-content-block
                mu-flat-button(label="VISION 愿景",class="demo-flat-button",icon="dashboard",primary,style='font-weight:bold')
        mu-paper
            mu-content-block.para
                .center.aligned
                    h1 致中国
                    h3 China Dream
                    i.fa.fa-globe(style="font-size:64px")
                p 中国是全球第二大经济体（GDP），IT行业排名全球第二。但因为中国在用户数量巨大和市场巨大，IT行业即将成为世界第一互联网大国。
                p 毫无疑问，人才是成就伟业的最重要的因素，而且IT行业能带来大量的就业岗位，而我们需要为国家培养未来具有就业的能力年轻人。
                p 创新能力和企业数字化转型是中国未来经济增长的关键。但严重缺乏有经验有创新能力的技术人员，这种现状会延迟项目的开发，延迟经济的转化。
                p P8 CodeA要努力改变这个现状，并帮助中国经济增长。
                mu-divider
                .center.aligned
                    h1 致行业
                    h3 Information Technology
                    i.fa.fa-codepen(style="font-size:64px")
                p 在全球性的企业转型中，企业经常招募不到合适的员工和合作对象，我们也发现教育系统陈旧，教育方法缺失，使企业失去创造和创新。
                p CodeA，将最新的教育方式向所有人开放，让我们的年轻人得到就业，在大公司或者在年轻的创新型企业，初创公司，找到他们合适的就业岗位。
                p 同时也为大公司，创新型公司，初创公司等找到合适的人才。
                mu-divider
                .center.aligned
                    h1 致年轻人
                    h3 to Young People
                    i.fa.fa-users(style="font-size:64px")
                p 计算机的发展能给年轻的创业者们提供丰富的前景。当然年轻人还需要训练，这些训练能够帮助他们抓住这些机会。
                p 根据我们的经验，兴趣和热情是保证工作质量最重要的因素。
                p 相反，在传统的系统，我们的年轻人接受的训练违背这些原则，仅仅传授知识是不够的，而且往往是已经过时的知识。
                p 在P8，在CodeA，你将充满兴趣和热情的接受挑战
                p

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