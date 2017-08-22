<template lang="jade">
    mu-paper.padded
        mu-content-block
            a(:href="'/team/id=' + team.id", v-for="team, index in teams", :key="index")
                br
                mu-row.item(gutter)
                    mu-col(desktop="20",table="50",width="50")
                        img(:src="team.logo", width="100%")
                    mu-col(desktop="80",table="50",width="50")
                        h2(style="margin-top:10px;") {{team.name}}
                            span(style="font-size:12px;font-weight: normal;float:right")
                        p 关注时间：{{team.time}}
                        p {{team.intro}}
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
                }, this);
                
            });

        }
    }
}
</script>

<style scoped>
    .item:hover{
        background-color: #f0f0f0;
    }
</style>