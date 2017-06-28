<template lang="jade">
    div
        mu-paper
            mu-content-block
                mu-list(style='overflow: hidden;')
                    mu-list-item(title="HTML5 机")
                        img(:src='logo_img',slot='left', style='width:60px; height:40px;')
                        span(slot="describe")
                            span(style="color: #444 !important") Myron Liu - 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        mu-icon-menu(slot="right",icon="more_vert",tooltip="操作")
                            mu-menu-item(title="查看")
                            mu-menu-item(title="删除")
                    mu-list-item(title="HTML5 机")
                        img(:src='logo_img',slot='left', style='width:60px; height:40px;')
                        span(slot="describe")
                            span(style="color: #444 !important") Myron Liu - 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        mu-icon-menu(slot="right",icon="more_vert",tooltip="操作")
                            mu-menu-item(title="查看")
                            mu-menu-item(title="删除")
</template>

<script>
export default {
    name: 'my-fav-course',
    data() {
        return {
            logo_img: '/static/img/course/h5.png'
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
.inlist {
    top: 8px;
    text-align: center;
}
</style>