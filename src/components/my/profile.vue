<template lang="jade">
    div
        mu-paper
            mu-content-block
                p.center.aligned(style='padding: 30px 0')
                    mu-avatar(src="/static/img/my/noheadimg.png", style='width:120px; height:120px')
                mu-list(style='overflow: hidden;')
                    mu-sub-header 
                        b 基本信息
                    mu-list-item(:disableRipple='true',title="姓名")
                        span(slot='describe') {{data.name}}
                    mu-list-item(:disableRipple='true',title="性别")
                        span(slot='describe') {{data.sex}}
                    mu-list-item(:disableRipple='true',title="出生年月")
                        span(slot='describe') {{ data.dob }}
                    mu-list-item(:disableRipple='true',title="身份证号码")
                        span(slot='describe') {{data.id_number}}
                    p
                    mu-divider
                    p
                    mu-sub-header 
                        b 联系信息
                    mu-list-item(:disableRipple='true',title="手机号码")
                        span(slot='describe') {{data.cellphone}}
                    mu-list-item(:disableRipple='true',title="Email")
                        span(slot='describe') {{data.email}}
                    mu-list-item(:disableRipple='true',title="地址")
                        span(slot='describe') {{data.province}}{{data.city}}{{data.address}}
                    mu-list-item(:disableRipple='true',title="邮政编码")
                        span(slot='describe') {{data.zipcode}}
                    p
                    mu-divider
                    p
                    mu-sub-header 
                        b 学历背景
                    mu-list-item(:disableRipple='true',title="学历")
                        span(slot='describe') {{data.diploma}}
                    mu-list-item(:disableRipple='true',title="毕业学校")
                        span(slot='describe') {{data.graduate_school}}
                    mu-list-item(:disableRipple='true',title="主修专业")
                        span(slot='describe') {{data.major}}
                    mu-list-item(:disableRipple='true',title="辅修专业")
                        span(slot='describe') {{data.minor}}
                    mu-list-item(:disableRipple='true',title="英语水平")
                        span(slot='describe') {{data.english_level}}
                    mu-list-item(:disableRipple='true',title="兴趣爱好")
                        span(slot='describe') {{data.hobby}}
                    p
                    mu-divider
                    p
                    mu-sub-header 
                        b 监护人信息
                    mu-list-item(:disableRipple='true',title="第一监护人姓名")
                        span(slot='describe') {{data.guardian_01_name}}
                    mu-list-item(:disableRipple='true',title="第一监护人关系")
                        span(slot='describe') {{data.guardian_01_relation}}
                    mu-list-item(:disableRipple='true',title="第一监护人联系方式")
                        span(slot='describe') {{data.guardian_01_cellphone}}
                    mu-list-item(:disableRipple='true',title="第二监护人姓名")
                        span(slot='describe') {{data.guardian_02_name}}
                    mu-list-item(:disableRipple='true',title="第二监护人关系")
                        span(slot='describe') {{data.guardian_02_relation}}
                    mu-list-item(:disableRipple='true',title="第二监护人联系方式")
                        span(slot='describe') {{data.guardian_02_cellphone}}
</template>

<script>
import DateTime from '@/common/datetime'

export default {
    name: 'my-profile',
    data() {
        return {
            data: {}
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.loadProfile();
    },
    methods: {
        loadProfile() {
            var _this = this;
            this.$db.getStudentDetails(this, { sid: this.$cookie.getCookie('sid') }).then(res => {
                _this.data = res[0];
                _this.data.dob = DateTime.dateFormat(_this.data.dob).substring(0, 10);
            });
        }
    }
}
</script>

<style scoped>
.inlist {
    top: 8px;
    text-align: center;
}
</style>