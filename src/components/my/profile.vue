<template lang="jade">
    div
        mu-paper
            mu-content-block
                p.center.aligned(style='padding: 30px 0')
                    mu-avatar(src="/static/img/my/noheadimg.png", style='width:120px; height:120px')
                mu-list(style='overflow: hidden;')
                    mu-sub-header 基本信息
                    mu-list-item(:disableRipple='true',title="姓名")
                        span(slot='describe') {{name}}
                    mu-list-item(:disableRipple='true',title="性别")
                        span(slot='describe') {{sex}}
                    mu-list-item(:disableRipple='true',title="出生年月")
                        span(slot='describe') {{dob}}
                    mu-list-item(:disableRipple='true',title="身份证号码")
                        span(slot='describe') {{id_number}}
                    P
                    mu-sub-header 联系信息
                    mu-list-item(:disableRipple='true',title="手机号码")
                        span(slot='describe') {{cellphone}}
                    mu-list-item(:disableRipple='true',title="Email")
                        span(slot='describe') {{email}}
                    mu-list-item(:disableRipple='true',title="地址")
                        span(slot='describe') {{province}}{{city}}{{address}}
                    mu-list-item(:disableRipple='true',title="邮政编码")
                        span(slot='describe') {{zipcode}}
                    p
                    mu-sub-header 学历背景
                    mu-list-item(:disableRipple='true',title="学历")
                        span(slot='describe') {{diploma}}
                    mu-list-item(:disableRipple='true',title="毕业学校")
                        span(slot='describe') {{graduate_school}}
                    mu-list-item(:disableRipple='true',title="主修专业")
                        span(slot='describe') {{major}}
                    mu-list-item(:disableRipple='true',title="辅修专业")
                        span(slot='describe') {{minor}}
                    mu-list-item(:disableRipple='true',title="英语水平")
                        span(slot='describe') {{english_level}}
                    mu-list-item(:disableRipple='true',title="兴趣爱好")
                        span(slot='describe') {{hobby}}
                    p
                    mu-sub-header 监护人信息
                    mu-list-item(:disableRipple='true',title="第一监护人姓名")
                        span(slot='describe') {{guardian_01_name}}
                    mu-list-item(:disableRipple='true',title="第一监护人关系")
                        span(slot='describe') {{guardian_01_relation}}
                    mu-list-item(:disableRipple='true',title="第一监护人联系方式")
                        span(slot='describe') {{guardian_01_cellphone}}
                    mu-list-item(:disableRipple='true',title="第二监护人姓名")
                        span(slot='describe') {{guardian_02_name}}
                    mu-list-item(:disableRipple='true',title="第二监护人关系")
                        span(slot='describe') {{guardian_02_relation}}
                    mu-list-item(:disableRipple='true',title="第二监护人联系方式")
                        span(slot='describe') {{guardian_02_cellphone}}
</template>

<script>
export default {
    name: 'my-profile',
    data() {
        return {
            name: '张卓',
            sex: '男',
            dob: '1985-10-1',
            id_number: '43010231023123121',
            cellphone: '13901231231',
            email: 'asd@qq.com',
            province: '湖南',
            city: '长沙',
            address: '远大3路1号P8',
            zipcode: '410000',
            diploma: '本科',
            graduate_school: '湖南大学',
            major: '计算机',
            minor: '无',
            english_level: 'CET-6',
            hobby: '钢琴',
            guardian_01_name: '',
            guardian_01_relation: '',
            guardian_01_cellphone: '',
            guardian_02_name: '',
            guardian_02_relation: '',
            guardian_02_cellphone: ''
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
.inlist {
    top: 8px;
    text-align: center;
}
</style>