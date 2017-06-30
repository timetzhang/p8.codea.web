<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-list(v-for="course, index in courses",:key="index")
                    mu-list-item(:title="course.name")
                        mu-avatar(:src="course.logo" slot="leftAvatar")
                        span(slot="describe") {{course.brief}}
                        mu-icon-menu(slot="right" icon="more_vert" tooltip="操作")
                            mu-menu-item(title="查看",:to="'/course/id=' + course.id")
                            mu-menu-item(title="删除",@click="confirmDelete(course.id, course.name)")    
                    mu-divider
        mu-dialog(:open="isDialogDeleteFavDisplay",title="提示",@close="closeDeleteFavConfirmDialog") 是否删除收藏的课程 <b>{{toDeleteFav}}</b>
            mu-flat-button(slot="actions",@click="closeDeleteFavConfirmDialog",primary,label="取消")
            mu-flat-button(slot="actions",secondary,@click="deleteFav",label="确定")
</template>

<script>
export default {
    name: 'my-fav-course',
    data() {
        return {
            courses:[],
            toDeleteFav:'',
            toDeleteFavId:0,
            isDialogDeleteFavDisplay: false,
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getFavCourse();
    },
    methods: {
        getFavCourse(){
            var _this = this;
            this.$db.getStudentFavCourse(this, {student_id: this.$cookie.getCookie('sid')}).then(res=>{
                this.courses = res;
            });
        },
        confirmDelete(id, name){
            this.toDeleteFav = name;
            this.toDeleteFavId = id;
            this.isDialogDeleteFavDisplay = true;
        },
        closeDeleteFavConfirmDialog(){
            this.isDialogDeleteFavDisplay = false;
        },
        deleteFav(){
            var _this = this;
            this.$db.delStudentFavCourse(this, {course_id: this.toDeleteFavId, student_id: this.$cookie.getCookie('sid')}).then(res=>{
                if(res.affectedRows > 0){
                    _this.closeDeleteFavConfirmDialog()
                    _this.getFavCourse();
                }
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