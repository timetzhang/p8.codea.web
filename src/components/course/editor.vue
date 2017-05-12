<template lang="jade">
    div
        vue-html5-editor(:content="content",:height="300",:show-module-name="showModuleName",@change="updateData",ref="editor")
        br
        .center.aligned
            mu-raised-button(label='提 交', primary, style='width:200px', @click='submit')
</template>

<script>
import VueHtml5Editor from 'vue-html5-editor'
const editor = new VueHtml5Editor({
    showModuleName: false
})

export default {
    name: 'course-editor',
    components: {
        'vue-html5-editor': editor
    },
    data() {
        return {
            content: "",
            showModuleName: false,
        }
    },
    created: function () {

    },
    methods: {
        updateData(data) {
            // sync content to component
            this.content = data
        },
        submit() {
            console.log(this.content);
        }
    }
}
</script>

<style>

</style>