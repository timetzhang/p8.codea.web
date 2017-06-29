<template lang="jade">
    div
        mu-paper
            mu-content-block
                p.center.aligned(style='padding: 30px 0')
                    mu-avatar(:src="student.head_image", style='width:120px; height:120px')
                mu-sub-header 
                    b 基本信息
                mu-text-field(v-model="student.name",:fullWidth="true",label="姓名",@blur="updateDetails")
                mu-text-field(v-model="student.title",:fullWidth="true",label="头衔",@blur="updateDetails")
                mu-select-field(v-model="student.sex",label="性别",:fullWidth="true",@blur="updateDetails")
                    mu-menu-item(value="男",title="男")
                    mu-menu-item(value="女",title="女")
                mu-date-picker(label="出生年月", v-model="student.dob",@blur="updateDetails")
                mu-text-field(v-model="student.id_number",label="身份证号码(不能修改)",:fullWidth="true",disabled)
                p
                mu-sub-header 
                    b 联系信息
                mu-text-field(v-model="student.cellphone",label="手机号码(不能修改)",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.email",label="Email(不能修改)",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.province",label="省份",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.city",label="城市",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.address",label="地址",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.zipcode",label="邮政编码",:fullWidth="true",@blur="updateDetails")
                p
                mu-sub-header 
                    b 学历背景
                mu-select-field(v-model="student.diploma",label="学历", :fullWidth='true',@change="updateDetails")
                    mu-menu-item(value="小学",title="小学")
                    mu-menu-item(value="初中",title="初中")
                    mu-menu-item(value="中专",title="中专")
                    mu-menu-item(value="高中",title="高中")
                    mu-menu-item(value="大专",title="大专")
                    mu-menu-item(value="本科",title="本科")
                    mu-menu-item(value="硕士",title="硕士")
                    mu-menu-item(value="博士",title="博士")

                mu-text-field(v-model="student.graduate_school",label="毕业学校",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.major",label="主修专业",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.minor",label="辅修专业",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.english_level",label="英语水平",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.hobby",label="兴趣爱好",:fullWidth="true",@blur="updateDetails")
                p
                mu-sub-header 
                    b 监护人信息
                mu-text-field(v-model="student.guardian_01_name",label="第一监护人姓名",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.guardian_01_relation",label="第一监护人关系",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.guardian_01_cellphone",label="第一监护人联系方式",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.guardian_02_name",label="第二监护人姓名",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.guardian_02_relation",label="第二监护人关系",:fullWidth="true",@blur="updateDetails")
                mu-text-field(v-model="student.guardian_02_cellphone",label="第二监护人联系方式",:fullWidth="true",@blur="updateDetails")
</template>

<script>
import DateTime from '@/common/datetime'

export default {
    name: 'my-profile',
    data() {
        return {
            student: {}
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
                _this.student = res[0];
                _this.student.dob = DateTime.dateFormat(_this.student.dob).substring(0, 10);
            });
        },
        updateDetails(){
            var _this = this;
            this.$db.setStudentDetails(this, this.student).then(res => {
                console.log(res);
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