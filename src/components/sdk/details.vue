<template lang="jade">
    div.padded
        mu-paper(style="padding:10px")
            mu-content-block.para
                mu-row(gutter)
                    mu-col(desktop="35",table="50",width="100")
                        img(:src="item.logo_url", style='border:1px solid #eee')
                    mu-col(desktop="65",table="50",width="100")
                        h2(style="margin-top:10px;") {{item.name}}
                        p(v-html="item.brief")
                        p.right.aligned
                            mu-raised-button(label='收藏',icon='favorite', :secondary='faved', @click='favSDK')
                    mu-col(desktop="100")
                        mu-chip(v-for='tag in tags', :key='tag') {{tag}}
        br
        mu-divider
        h2 官方入口
        a(:href="item.official_website", target='_blank') {{item.official_website}}
        p
        mu-divider
        p(v-html='item.details')
</template>

<script>
export default {
    name: 'course',
    data() {
        return {
            item: {},
            tags: [],
            sdk_id: this.$route.params.id,
            faved: false
        }
    },
    mounted: function () {
        this.loadSDKDetails();
        if (this.$cookie.getCookie('sid')) {
            this.isStudentFavSDK();
        }
    },
    methods: {
        loadSDKDetails() {
            var _this = this;
            this.$db.getSDKDetails(this, { id: this.$route.params.id }).then(res => {
                _this.item = res[0];
                _this.tags = res[0].tags.split(',');
            });
        },
        favSDK() {
            if (this.$cookie.getCookie('sid')) {
                var _this = this;
                if (this.faved) { //如果已经收藏了课程，删除收藏的课程
                    this.$db.delStudentFavSDK(this, { student_id: this.$cookie.getCookie('sid'), sdk_id: this.sdk_id }).then(res => {
                        if (res.affectedRows > 0) {
                            _this.faved = false;
                        };
                    });
                }
                else { //如果没有收藏，加入收藏
                    this.$db.newStudentFavSDK(this, { student_id: this.$cookie.getCookie('sid'), sdk_id: this.sdk_id }).then(res => {
                        if (res.affectedRows > 0) {
                            _this.faved = true;
                        };
                    });
                }
            }
            else {
                this.$router.push('/login');
            }

        },
        isStudentFavSDK() {
            var _this = this;
            this.$db.isStudentFavSDK(this, { student_id: this.$cookie.getCookie('sid'), sdk_id: this.sdk_id }).then(res => {
                if (res == '1')
                    _this.faved = true;
                else
                    _this.faved = false;
            });
        }
    }
}
</script>

<style scoped>
.sdkimg {
    display: inline-block;
    width: 150px;
    height: 150px;
    padding: 4px;
    margin-bottom: 10px;
}

.sdkimg img {
    width: 142px;
    height: 142px;
}

.mu-chip {
    margin: 4px;
}
</style>