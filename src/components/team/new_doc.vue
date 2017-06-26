<template lang="jade">
div
    vue-editor(v-model="team.details" v-if="isEditDisplay")
</template>

<script>

import { VueEditor } from 'vue2-editor'
import StudentTeamDB from '@/db/student.team'
import Config from '@/common/config'

export default {
    name: 'team',
    components: {
        VueEditor
    },
    data() {
        return {
            teams: []
        }
    },
    mounted: function () {
        this.loadTeam();
        document.title = '撰写新小组文档 - ' + Config.title;
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