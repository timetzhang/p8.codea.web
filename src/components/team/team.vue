<template lang="jade">
div.container
    mu-paper(style='padding:10px 30px; margin-bottom: 15px')
        mu-text-field(label="搜索项目组",style='width:100%',v-model="keyword")
    mu-paper
        mu-list(v-for="team in teams", :key="team.id")
            mu-list-item(:title="team.name",:href="'/team/id='+team.id")
                mu-avatar(:src="team.logo",slot="leftAvatar")
                span(slot="describe")
                    span {{team.intro}}
                mu-icon-menu(slot="right" icon="more_vert" tooltip="进入")
            mu-divider(inset)
</template>

<script>
export default {
    name: 'team',
    data() {
        return {
            teams: [],
            keyword: '',
            teamPageCurrent: 0
        }
    },
    mounted: function () {
        this.getTeam();
        document.title = '项目组 - ' + this.$config.title;
    },
    methods: {
        getTeam() {
            var _this = this;
            this.$db.getTeam(this, { keyword: this.keyword, pagenum: this.teamPageCurrent, pagesize: 10 }).then(res => {
                _this.teams = res;
            });
        }
    },
    watch: {
        keyword: function () {
            this.getTeam();
        }
    }
}
</script>

<style scoped>

</style>