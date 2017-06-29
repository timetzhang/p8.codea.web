<template lang="jade">
    div
        mu-paper
            mu-content-block
                h3 说明
                p 我们会根据您所在项目组的项目内容和您所负责开发的部分，来一对一个性化定制您需要学习的课程，如果下面没有任何课程显示，请与您的导师联系。
                p 我们鼓励您学习更多的项目之外的课程，这也是成为一个“全栈工程师”的必经之路，您也可以与导师联系与探讨，来定制学习计划。
                mu-list
                    mu-row(v-for="course, index in courses",:key="index")
                        mu-col.vertical.center.aligned(:desktop="20", :width="20", style="vertical-align: middle")
                            img.item(:src='course.logo',style="width:100%")
                        mu-col(:desktop="80", :width="80")
                            mu-list-item(:disableRipple='true',:title="course.name + ' (完成度: ' + course.finish_percentage + '%)'")
                                mu-linear-progress(:size="20",color="lightBlue700", mode="determinate", :value='course.finish_percentage', style='margin-top:10px', slot='describe')
                                p.right.aligned 开始学习时间：{{course.time}}
</template>

<script>
import DateTime from '@/common/datetime'
export default {
    name: 'my-course',
    data() {
        return {
            logo_img: '',
            courses:[]
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        this.getCourseTake();
    },
    methods: {
        getCourseTake(){
            var _this = this;
            this.$db.getStudentCourseTake(this,{student_id: this.$cookie.getCookie('sid')}).then(res=>{
                _this.courses =res;
                _this.courses.forEach(function(element) {
                    element.time = DateTime.dateFormat(element.time).substring(0,10)
                }, this);
            });
        }
    }
}
</script>

<style scoped>
.vertical.centered.aligned{
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}
</style>
