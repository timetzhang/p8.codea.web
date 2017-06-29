<template lang="jade">
    div
        mu-paper
            div.center.aligned(style="background: url('/static/img/profile/profile.jpg'); padding:30px 0")
                mu-avatar(:src="student.head_image", style='width:120px; height:120px')
                p
                i.icon.olive.large.gender(:class="sexIcon")
                p.center.aligned.name.box {{student.name}}
                p
                p.center.aligned.name.box {{student.title}}
                p
                p.center.aligned.name.box {{student.province}} {{student.city}}
            mu-tabs(:value="activeTab",@change="handleTabChange")
                mu-tab(value="tab1",title="信息")
                mu-tab(value="tab2",title="文档")
                mu-tab(value="tab3",title="小组")
            div(v-if="activeTab === 'tab1'")
                mu-content-block
                    h2 fgh
                    p 这是第一个 tab
            div(v-if="activeTab === 'tab2'")
                mu-content-block
                    h2 fgh
                    p 这是第一个 tab
            div(v-if="activeTab === 'tab3'")
                mu-content-block
                    h2 fgh
                    p 这是第一个 tab
</template>

<script>
import DateTime from '@/common/datetime'

export default {
    name: 'profile',
    data() {
        return {
            student: {},
            activeTab: 'tab1',
            sexIcon: ''
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getProfile();
    },
    methods: {
        handleTabChange(value){
            this.activeTab = value;
        },
        getProfile() {
            var _this = this;
            this.$db.getStudentProfile(this, { id: this.$route.params.id }).then(res => {
                _this.student = res[0];
                if(_this.student.sex == '男'){
                    _this.sexIcon = 'man';
                }
                else{
                    _this.sexIcon = 'woman';
                }
            });
        }
    }
}
</script>

<style scoped>
    .name.box{
        padding:3px;
        background-color: rgba(44,44,44,0.4);
        color:white;
        margin:auto;
        width: 200px
    }
    .gender{
        position: relative;
        bottom:40px;
        left:60px;
    }
</style>