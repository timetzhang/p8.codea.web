<template lang="jade">
div
    mu-paper(style='padding:10px 30px; margin-bottom: 15px')
        mu-text-field(label="搜索项目组",style='width:100%')
    mu-paper
        mu-list(v-for="team in teams", :key="team.id")
            mu-list-item(:title="team.name")
                mu-avatar(:src="team.logo_url",slot="leftAvatar")
                span(slot="describe")
                    span {{team.intro}}
                mu-icon-menu(slot="right" icon="more_vert" tooltip="操作")
                    mu-menu-item(title="回复")
                    mu-menu-item(title="标记")
                    mu-menu-item(title="删除")
            mu-divider(inset)
</template>

<script>
export default {
    name: 'team',
    data() {
        return {
            teams: []
        }
    },
    mounted: function () {
        this.loadTeam();
    },
    methods: {
        loadTeam() {
            var _this = this;
            this.$db.getStudentTeam(this).then(res => {
                _this.teams = res;
                console.log(res);
            });
        }
    }
}
</script>

<style scoped>

</style>