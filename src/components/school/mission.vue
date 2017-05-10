<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-flat-button(label="MISSION 目标",class="demo-flat-button",icon="dashboard",primary,style='font-weight:bold')
        br
        mu-paper.center.aligned(style='padding:100px 0px; font-size:19px') 
            mu-content-block
                mu-icon(value='settings_input_component', :size='64')
            div 每年持续为国家，为行业提供300位以上的优质程序员
</template>

<script>
export default {
    name: 'school-mission',
    data() {
        return {

        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    methods: {

    }
}
</script>

<style scoped>
.content {
    padding: 20px;
}
</style>