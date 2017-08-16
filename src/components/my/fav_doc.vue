<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-list(v-for="doc,index in docs",:key="index")
                    mu-list-item(:title="doc.name",:describeText="doc.brief",:href="'/doc/id='+doc.id")
                        mu-avatar(icon="assignment",backgroundColor="blue",slot="leftAvatar")
                        span(slot="after") {{doc.time}}
                div.center.aligned(v-if="isMoreDoc")
                    mu-flat-button(label="点击载入更多",@click="getMoreDoc")
        mu-snackbar.snackbar(v-if="isSnackbarDisplay",:message="snackbarMessage",action="关闭",@actionClick="hideSnackbar",@close="hideSnackbar")
</template>

<script>
import DateTime from '@/common/datetime'
export default {
    name: 'my-fav-course',
    data() {
        return {
            docs: [],
            currentPage: 0,
            isMoreDoc: true,

            //snackbar
            isSnackbarDisplay: false,
            snackbarMessage: '',
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getDocs();
    },
    methods: {
        getDocs() {
            var _this = this;
            this.$db.getStudentFavDocument(this,
                {
                    student_id: this.$cookie.getCookie('sid'),
                    pagenum: this.currentPage,
                    pagesize: 10
                })
                .then(res => {
                    if (res.length > 0) {
                        res.forEach(function (element) {
                            element.time = DateTime.dateFormat(element.time)
                            this.docs.push(element)
                        }, this)
                    }
                    else {
                        this.showSnackbar('没有更多文档了')
                        this.isMoreDoc = false
                    }
                });
        },
        getMoreDoc() {
            this.currentPage++;
            this.getDocs();
        },

        /* SNACKBAR ***********************************************************************************************************/
        showSnackbar(content) {
            this.snackbarMessage = content;
            this.isSnackbarDisplay = true
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.isSnackbarDisplay = false }, 2000)
        },
        hideSnackbar() {
            this.isSnackbarDisplay = false
            if (this.snackTimer) clearTimeout(this.snackTimer)
        },
    }
}
</script>

<style scoped>
.inlist {
    top: 8px;
    text-align: center;
}
</style>