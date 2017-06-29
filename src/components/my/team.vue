<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-row(gutter)
                    mu-col(desktop="15",table="50",width="100")
                        img(:src="team.logo", style='border:1px solid #eee',width="100%")
                    mu-col(desktop="85",table="50",width="100")
                        h2(style="margin-top:10px;") {{team.name}}
                            span(style="font-size:12px;font-weight: normal;float:right")
                        p 成立时间：{{team.time}}
                        p 加入时间：{{team.join_time}}
                        p {{team.intro}}
                        div.right.aligned
                            mu-raised-button(label="进入项目组首页",secondary, :to="'/team/id=' + team.id")
                        br
</template>

<script>
import DateTime from '@/common/datetime'

export default {
    name: 'school-contact',
    data() {
        return {
            team:{}
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getTeam();
    },
    methods: {
        getTeam(){
            var _this = this;
            this.$db.getStudentTeam(this,{student_id: this.$cookie.getCookie('sid')}).then(res=>{
                _this.team = res[0];
                _this.team.time = DateTime.dateFormat(_this.team.time);
                _this.team.join_time = DateTime.dateFormat(_this.team.join_time);
            });
        }
    }
}
</script>

<style scoped>

</style>