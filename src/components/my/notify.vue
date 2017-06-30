<template lang="jade">
    div
        mu-paper
            mu-tabs(:value="activeTab",@change="handleTabChange",style="border-top:1px solid #999")
                mu-tab(value="tab1",icon="phone",:title="'最新 (' + unreadTotal + ')'",@click='getUnreadNotify')
                mu-tab(value="tab2",icon="favorite",:title="'已读 (' + readTotal + ')'",@click='getReadNotify')
            mu-content-block
                div(v-if="activeTab == 'tab1'")
                    mu-list(v-for="notify, index in notifies", :key="index")
                        mu-list-item(:title="notify.name")
                            mu-avatar(icon="notifications",slot="leftAvatar",backgroundColor="blue")
                            span(slot="describe") {{notify.details}}
                            span(slot="after", v-if="notify.is_global == 1") 全局
                            mu-icon-menu(slot="right" icon="more_vert" tooltip="操作")
                                mu-menu-item(title="查看", @click='handleUnreadNotify(notify.id, notify.event_url)')
                                mu-menu-item(title="标为已读", @click="setNotifyRead(notify.id)")
                                mu-menu-item(title="删除", @click="delNotify(notify.id)")
                        mu-divider(inset)
                    mu-pagination(:total="unreadTotal",:current="unreadCurrent",@pageChange="handleUnreadPageClick")
                div(v-if="activeTab == 'tab2'")
                    mu-list(v-for="notify, index in readNotifies", :key="index")
                        mu-list-item(:title="notify.name")
                            mu-avatar(icon="notifications",slot="leftAvatar")
                            span(slot="describe") {{notify.details}}
                            span(slot="after", v-if="notify.is_global == 1") 全局
                            mu-icon-menu(slot="right" icon="more_vert" tooltip="操作")
                                mu-menu-item(title="查看", :to="notify.event_url")
                                mu-menu-item(title="删除", @click="delNotify(notify.id)")
                        mu-divider(inset)
                    mu-pagination(:total="readTotal",:current="readCurrent",@pageChange="handleReadPageClick")
                    
</template>

<script>
import DateTime from '@/common/datetime'

export default {
    name: 'school-contact',
    data() {
        return {
            notifies: [],
            readNotifies: [],
            activeTab: 'tab1',
            unreadTotal: 0,
            unreadCurrent: 1,
            readTotal: 0,
            readCurrent: 1
        }
    },
    mounted: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.getUnreadNotify();
    },
    methods: {
        handleTabChange(val) {
            this.activeTab = val;
        },
        handleUnreadNotify(id, url) {
            var _this = this;
            this.$db.setStudentNotifyRead(this, { id: id }).then(res => {
                this.$router.push(url);
            });
        },
        handleUnreadPageClick(val) {
            this.unreadCurrent = val;
            this.getUnreadNotify();
        },
        handleReadPageClick(val) {
            this.readCurrent = val;
            this.getReadNotify();
        },
        setNotifyRead(id){
            this.$db.setStudentNotifyRead(this, { id: id }).then(res => {
                this.getUnreadNotify();
            });
        },
        delNotify(id){
            this.$db.delStudentNotify(this, { id: id }).then(res => {
                this.getUnreadNotify();
                this.getReadNotify();
            });
        },
        getUnreadNotify() {
            var _this = this;
            this.$db.getStudentUnreadNotifyCount(this, { student_id: this.$cookie.getCookie('sid') }).then(res => {
                _this.unreadTotal = res[0].count;
                this.$db.getStudentUnreadNotify(this, { student_id: this.$cookie.getCookie('sid'), pagesize: 10, pagenum: (this.unreadCurrent - 1) }).then(res => {
                    _this.notifies = res;
                    _this.notifies.forEach(function (element) {
                        element.time = DateTime.dateFormat(element.time);
                    }, this);
                });
            });
        },
        getReadNotify() {
            var _this = this;
            this.$db.getStudentReadNotifyCount(this, { student_id: this.$cookie.getCookie('sid') }).then(res => {
                _this.readTotal = res[0].count;
                this.$db.getStudentReadNotify(this, { student_id: this.$cookie.getCookie('sid'), pagesize: 10, pagenum: (this.readCurrent - 1) }).then(res => {
                    _this.readNotifies = res;
                    _this.readNotifies.forEach(function (element) {
                        element.time = DateTime.dateFormat(element.time);
                    }, this);
                });
            });
        }
    }
}
</script>

<style scoped>

</style>