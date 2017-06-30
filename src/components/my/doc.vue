<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-list(v-for="doc,index in docs",:key="index")
                    mu-list-item(:title="doc.name",:describeText="doc.brief",:href="'/doc/id='+doc.id")
                        mu-avatar(icon="assignment",backgroundColor="blue",slot="leftAvatar")
                        span(slot="after") {{doc.time}}
</template>

<script>
import DateTime from '@/common/datetime'
export default {
    name: 'my-fav-course',
    data() {
        return {
            docs: []
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getDocs();
    },
    methods: {
        getDocs(){
            var _this = this;
            this.$db.getStudentDocument(this,{student_id: this.$cookie.getCookie('sid')}).then(res=>{
                _this.docs = res;
                _this.docs.forEach(function(element) {
                    element.time = DateTime.dateFormat(element.time)
                }, this);
            });
        }
    }
}
</script>

<style scoped>
.inlist {
    top: 8px;
    text-align: center;
}
</style>