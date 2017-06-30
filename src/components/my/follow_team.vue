<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-row(gutter, v-for="team, index in teams", :key="index")
                    mu-col(desktop="15",table="50",width="100")
                        img(:src="team.logo", style='border:1px solid #eee',width="100%")
                    mu-col(desktop="85",table="50",width="100")
                        h2(style="margin-top:10px;") {{team.name}}
                            span(style="font-size:12px;font-weight: normal;float:right")
                        p 关注时间：{{team.time}}
                        p {{team.intro}}
                        div.right.aligned
                            mu-raised-button(label="进入项目组首页",secondary, :to="'/team/id=' + team.id")
                        br
                    mu-divider
                    br
</template>

<script>
import DateTime from '@/common/datetime'

export default {
    name: 'school-contact',
    data() {
        return {
            teams: []
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getTeam();
    },
    methods: {
        getTeam() {
            var _this = this;
            this.$db.getStudentFollowTeam(this, { student_id: this.$cookie.getCookie('sid') }).then(res => {
                _this.teams = res;
                _this.teams.forEach(function (element) {
                    element.time = DateTime.dateFormat(element.time);
                    element.join_time = DateTime.dateFormat(element.join_time);
                }, this);

            });

        }
    }
}
</script>

<style scoped>

</style>