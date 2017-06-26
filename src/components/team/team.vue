<template lang="jade">
div
    mu-paper(style='padding:10px 30px; margin-bottom: 15px')
        mu-text-field(label="搜索项目组",style='width:100%')
    mu-paper
        mu-list(v-for="team in teams", :key="team.id")
            mu-list-item(:title="team.name",:href="'/team/id='+team.id")
                mu-avatar(:src="team.logo_url",slot="leftAvatar")
                span(slot="describe")
                    span {{team.intro}}
                mu-icon-menu(slot="right" icon="more_vert" tooltip="进入")
            mu-divider(inset)
</template>

<script>
import StudentTeamDB from '@/db/student.team'
import Config from '@/common/config'

export default {
    name: 'team',
    data() {
        return {
            teams: []
        }
    },
    mounted: function () {
        this.loadTeam();
        document.title = '项目组 - ' + Config.title;
    },
    methods: {
        loadTeam() {
            var _this = this;
            StudentTeamDB.getStudentTeam(this).then(res => {
                _this.teams = res;
            });
        }
    }
}
</script>

<style scoped>

</style>