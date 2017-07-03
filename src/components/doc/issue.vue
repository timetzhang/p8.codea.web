<template lang="jade">
div.padded
    mu-paper(style="padding:10px")
        div
            h1 Different behavior async/await in almost the same methods?
        div
            
        div
            h4 发表你的评论
            quill-editor(ref="editor")
            br
            mu-raised-button(label="发表",primary)
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'

export default {
    name: 'details',
    components: {
        quillEditor
    },
    data() {
        return {
            
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