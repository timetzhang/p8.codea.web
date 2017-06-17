<template lang="jade">
div.padded
    mu-paper(style="padding:10px")
        mu-content-block.para
            mu-row.center.aligned(gutter)
                mu-col(desktop="100")
                    mu-raised-button(label="前往文档中心",href="/doc",style="float:left")
                    br
                    h1 {{title}}
                    span {{student}}建立于{{time}}
                    p(v-html="detail")
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
    name: 'details',
    components: {
        VueEditor
    },
    data() {
        return {
            title:"团队介绍整体资料",
            student:"秀逗",
            time:"2017-6-8",
            detail:"<h2>具体详情介绍</h2><p>图文介绍</p>"
        }
    },
    mounted: function () {
        
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>