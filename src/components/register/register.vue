<template lang="jade">
    div
        mu-appbar(title='注册 Register')
        mu-paper(style='padding:20px')
            mu-stepper(:activeStep="activeStep",orientation="vertical")
                mu-step
                    mu-step-label 基本信息
                    mu-step-content
                        p 
                            mu-text-field(label="姓名", :fullWidth='true', v-model='name', :errorText="nameErrorText")
                            br
                            mu-select-field(v-model="sex",label="性别",:fullWidth='true')
                                mu-menu-item(value="男",title="男")
                                mu-menu-item(value="女",title="女")
                            br
                            mu-date-picker(v-model="dob",label="出生年月", :fullWidth='true', :errorText="dobErrorText")
                            br
                            mu-text-field(v-model="id_number",label="身份证号码", :fullWidth='true', :errorText="idnumberErrorText")
                            br
                        mu-raised-button(label="下一步",@click="validBasic",secondary)
                mu-step
                    mu-step-label 联系与登录信息
                    mu-step-content
                        p
                            mu-text-field(v-model="cellphone",label="手机号码", :fullWidth='true', :errorText="cellphoneErrorText", @blur='validCellphone')
                            br
                            mu-text-field(v-model="email",label="Email", :fullWidth='true', :errorText="emailErrorText", @blur='validEmail')
                            br
                            mu-text-field(v-model="password",label="密码", :fullWidth='true', type="password", :errorText="passwordErrorText", @blur='validPassword')
                            br
                            mu-text-field(v-model="passwordConfirm",label="重复密码", :fullWidth='true', type="password", :errorText="passwordConfirmErrorText", @blur='validPassword')
                            br
                    mu-raised-button(label="下一步",@click="validContact",secondary)
                    mu-flat-button(label="上一步",@click="handlePrev")
                mu-step
                    mu-step-label 地址
                    mu-step-content
                        p
                            mu-picker(:slots="addressSlots",:visible-item-count="5",@change="addressChange",:values="city")
                            p 您选择的城市是： {{addressProvince}} {{addressCity}}
                            br
                            mu-text-field(v-model="add",label="地址", :fullWidth='true', :errorText="addressErrorText")
                            br
                            mu-text-field(v-model="zipcode",label="邮政编码", :fullWidth='true')
                    mu-raised-button(label="下一步",@click="validAddress",secondary)
                    mu-flat-button(label="上一步",@click="handlePrev")
                mu-step
                    mu-step-label 知识背景
                    mu-step-content
                        p
                            mu-select-field(v-model="diploma",label="学历", :fullWidth='true')
                                mu-menu-item(value="小学",title="小学")
                                mu-menu-item(value="初中",title="初中")
                                mu-menu-item(value="中专",title="中专")
                                mu-menu-item(value="高中",title="高中")
                                mu-menu-item(value="大专",title="大专")
                                mu-menu-item(value="本科",title="本科")
                                mu-menu-item(value="硕士",title="硕士")
                                mu-menu-item(value="博士",title="博士")
                            br
                            mu-text-field(v-model="graduate_school",label="学校", :fullWidth='true')
                            br
                            mu-text-field(v-model="major",label="主修专业", :fullWidth='true')
                            br
                            mu-text-field(v-model="minor",label="辅修专业", :fullWidth='true')
                            br
                            mu-select-field(v-model="english_level",label="英语水平", :fullWidth='true')
                                mu-menu-item(value="无",title="无")
                                mu-menu-item(value="高中",title="高中")
                                mu-menu-item(value="CET-4",title="CET-4")
                                mu-menu-item(value="CET-6",title="CET-6")
                                mu-menu-item(value="TOEFL/IELTS",title="TOEFL/IELTS")
                                mu-menu-item(value="专业",title="专业")
                            br
                            mu-text-field(v-model="hobby",label="兴趣与爱好", :fullWidth='true',:multiLine='true',:rows="3",:rowsMax="6")
                    mu-raised-button(label="下一步",@click="validDiploma",secondary)
                    mu-flat-button(label="上一步",@click="handlePrev")
                mu-step
                    mu-step-label 监护人信息（未成年人填写）
                    mu-step-content
                        p
                            mu-text-field(v-model="guardian_01_name",label="第一监护人姓名", :fullWidth='true')
                            br
                            mu-text-field(v-model="guardian_01_relation",label="第一监护人关系", :fullWidth='true')
                            br
                            mu-text-field(v-model="guardian_01_cellphone",label="第一监护人联系方式", :fullWidth='true')
                            br
                            mu-text-field(v-model="guardian_02_name",label="第二监护人姓名", :fullWidth='true')
                            br
                            mu-text-field(v-model="guardian_02_relation",label="第二监护人关系", :fullWidth='true')
                            br
                            mu-text-field(v-model="guardian_02_cellphone",label="第二监护人联系方式", :fullWidth='true')
                    mu-raised-button(label="完成",@click="register",primary)
                    mu-flat-button(label="上一步",@click="handlePrev")
        mu-dialog(:open="submitDialog",title="完成") 提交成功, 是否进入"入学考试"?
            mu-flat-button(label="好的",slot="actions",primary,@click="goEntrance")
            mu-flat-button(label="取消",slot="actions",primary,@click="closeSubmitDialog")
        mu-dialog(:open="noticeDialog",title="提示") {{notice}}
            mu-flat-button(label="好的",slot="actions",primary,@click="closeNoticeDialog")
</template>

<script>
import StudentDB from '@/db/student'
import Config from '@/common/config'

const address = {
    '北京': ['北京'],
    '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
    '上海': ['上海'],
    '天津': ['天津'],
    '重庆': ['重庆'],
    '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
    '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
    '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
    '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
    '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
    '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
    '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
    '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
    '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
    '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
    '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
    '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
    '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
    '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
    '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
    '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
    '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
    '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
    '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
    '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
    '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
    '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
    '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
    '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
    '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
    '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
    '香港': ['香港'],
    '澳门': ['澳门'],
    '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
}
export default {
    name: 'school-contact',
    data() {
        return {
            activeStep: 0,
            noticeDialog: false,
            notice: '您还有未填写的项',
            valid: false,
            submitDialog: false,
            name: '',
            sex: '男',
            head_image: '',
            dob: '',
            id_number: '',
            cellphone: '',
            email: '',
            password: '',
            passwordConfirm: '',
            addressSlots: [
                {
                    width: '100%',
                    textAlign: 'right',
                    values: Object.keys(address)
                }, {
                    width: '100%',
                    textAlign: 'left',
                    values: ['北京']
                }
            ],
            city: ['北京', '北京'],
            addressProvince: '北京',
            addressCity: '北京',
            add: '',
            zipcode: '',
            diploma: '',
            graduate_school: '',
            major: '',
            minor: '',
            english_level: '',
            hobby: '',
            guardian_01_name: '',
            guardian_01_relation: '',
            guardian_01_cellphone: '',
            guardian_02_name: '',
            guardian_02_relation: '',
            guardian_02_cellphone: '',
            //验证信息
            nameErrorText: '',
            dobErrorText: '',
            idnumberErrorText: '',
            cellphoneErrorText: '',
            emailErrorText: '',
            passwordErrorText: '',
            passwordConfirmErrorText: '',
            addressErrorText: ''
        }
    },
    mounted: function () {
        document.title = '注册 - ' + Config.title;
    },
    methods: {
        //判断cellphone
        validCellphone() {
            var _this = this;
            if (!this.cellphone) {
                this.cellphoneErrorText = '这是必填项';
                this.valid = false;
            }
            else {
                this.cellphoneErrorText = null;
                this.valid = true;
                //判断cellphone是否符合格式
                if (/^1[34578]\d{9}$/.test(this.cellphone) == false) {
                    this.cellphoneErrorText = '请输入正确的手机号码';
                    this.valid = false;
                }
                else {
                    this.cellphoneErrorText = null;
                    this.valid = true;
                    //判断cellphone是否存在
                    StudentDB.isStudentCellphoneExist(this, { cellphone: this.cellphone }).then(res => {
                        if (res == 1) {
                            _this.valid = false;
                            _this.cellphoneErrorText = '此手机号码已经存在';
                        }
                    });
                }

            }
        },
        //判断email
        validEmail() {
            var _this = this;
            if (!this.email) {
                this.emailErrorText = '这是必填项';
                this.valid = false;
            }
            else {
                this.emailErrorText = null;
                this.valid = true;
                if (/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.email) == false) {
                    this.emailErrorText = '请输入正确的Email';
                    this.valid = false;
                }
                else {
                    this.emailErrorText = null;
                    this.valid = true;
                    //判断cellphone是否存在
                    StudentDB.isStudentEmailExist(this, { email: this.email }).then(res => {
                        if (res == 1) {
                            _this.valid = false;
                            _this.emailErrorText = '此Email已经存在';
                        }
                    });
                }
            }
        },
        validPassword() {
            if (!this.password) {
                this.passwordErrorText = '这是必填项';
                this.valid = false;
            }
            else {
                this.passwordErrorText = null;
                this.valid = true;
                if (this.password.length < 6) {
                    this.passwordErrorText = '密码至少需要6位';
                    this.valid = false;
                }
                else {
                    this.passwordErrorText = null;
                    this.valid = true;
                    if (!this.passwordConfirm) {
                        this.passwordConfirmErrorText = '这是必填项';
                        this.valid = false;
                    }
                    else {
                        this.passwordConfirmErrorText = null;
                        this.valid = true;
                        if (this.password != this.passwordConfirm) {
                            this.passwordConfirmErrorText = '两次密码输入不同';
                            this.valid = false;
                        }
                        else {
                            this.passwordConfirmErrorText = null;
                            this.valid = true;
                        }
                    }

                }
            }
        },
        validBasic() {
            if (!this.name) {
                this.nameErrorText = '这是必填项';
                this.valid = false;
            }
            else {
                this.nameErrorText = null;
                this.valid = true;
            }
            if (!this.dob) {
                this.dobErrorText = '这是必填项';
                this.valid = false;
            }
            else {
                this.dobErrorText = null;
                this.valid = true;
            }
            if (!this.id_number) {
                this.idnumberErrorText = '这是必填项';
                this.valid = false;
            }
            else {
                this.idnumberErrorText = null;
                this.valid = true;
            }
            if (this.valid) {
                this.activeStep++;
            }
        },
        validContact() {
            this.validCellphone();
            this.validEmail();
            this.validPassword();

            if (this.valid) {
                this.activeStep++;
            }
        },
        validAddress() {
            if (!this.add) {
                this.addressErrorText = '这是必填项';
                this.valid = false;
            }
            else {
                this.addressErrorText = null;
                this.valid = true;
            }
            if (this.valid)
                this.activeStep++
        },
        validDiploma() {
            if (this.valid)
                this.activeStep++
        },
        handlePrev() {
            this.activeStep--
        },
        reset() {
            this.activeStep = 0
        },
        addressChange(value, index) {
            switch (index) {
                case 0:
                    this.addressProvince = value
                    const arr = address[value]
                    this.addressSlots[1].values = arr
                    this.addressCity = arr[0]
                    break
                case 1:
                    this.addressCity = value
                    break
            }
            this.address = [this.addressProvince, this.addressCity];
        },
        register() {
            if (this.valid) {
                StudentDB.newStudent(this, {
                    name: this.name,
                    sex: this.sex,
                    dob: this.dob,
                    id_number: this.id_number,
                    head_image: this.head_image,
                    cellphone: this.cellphone,
                    email: this.email,
                    password: this.password,
                    address: this.add,
                    city: this.addressCity,
                    province: this.addressProvince,
                    country: '中国',
                    zipcode: this.zipcode,
                    diploma: this.diploma,
                    graduate_school: this.graduate_school,
                    major: this.major,
                    minor: this.minor,
                    english_level: this.english_level,
                    hobby: this.hobby,
                    guardian_01_name: this.guardian_01_name,
                    guardian_01_relation: this.guardian_01_relation,
                    guardian_01_cellphone: this.guardian_01_cellphone,
                    guardian_02_name: this.guardian_02_name,
                    guardian_02_relation: this.guardian_02_relation,
                    guardian_02_cellphone: this.guardian_02_cellphone,
                    note: ''
                }).then(res => {
                    if (res > 0) {
                        this.submitDialog = true;
                        this.$cookie.setCookie('sid', res)
                    }
                    else {
                        this.submitDialog = false;
                    }
                });
            }
            else {
                this.noticeDialog = true;
            }
        },
        goEntrance() {
            this.$router.push('/school/entrance');
        },
        closeSubmitDialog() {
            this.submitDialog = false;
        },
        closeNoticeDialog() {
            this.$router.push('/school');
        }
    },
    computed: {
        finished() {
            return this.activeStep > 2
        }
    }
}
</script>

<style scoped>

</style>