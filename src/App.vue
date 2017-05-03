<template lang="jade">
    div.app
        mu-flexbox.menu
            mu-flexbox-item
                a(href='/#/')
                    img(src='/static/img/logo.png',style='vertical-align:-2px; cursor: pointer')
                a(href='/#/school')
                    mu-flat-button.item(label='学校', color="white")
                a(href='/#/course')
                    mu-flat-button.item(label='教程', color="white")
                a(href='/#/sdk')
                    mu-flat-button.item(label='SDK', color="white")
                a(href='/#/tools')
                    mu-flat-button.item(label='工具', color="white")
            mu-flexbox-item(style='text-align:right')
                mu-text-field.search-box(hintText="搜索", hintTextClass='search-hint', inputClass='search-input')
                mu-icon-button(icon='search', tooltip="搜索", style='color:white')
        router-view.content
        mu-row.bottom(gutter)
            mu-col(desktop="50")
                p 地址：长沙远大三路远大城J57
                p 电话：0731-84086832
                p 邮箱：p8@joinp8.com
            mu-col(desktop="50",style="text-align:right")
                mu-icon(value="chat")
                mu-icon(value="book")
                mu-icon(value="favorite")
            mu-divider
            mu-col(desktop="100")
                p ©长沙噼啪星球文化传媒有限公司 / 湘ICP备16002937号
</template>

<script>
import Browser from './common/browser'

export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<style>
.app {
    background-color: #f4f4f4;
}

.menu {
    background-color: #424242;
}

.menu .item {
    height: 54px;
    vertical-align: 17px;
    border-left: 1px solid #383838;
}

.search-box {
    vertical-align: 13px;
    font-size: 10px;
}

.search-hint {
    font-size: 12px;
    color: #888 !important;
}

.search-input {
    font-size: 12px !important;
    color: white !important;
}

.content {
    padding: 10px;
}

.bottom {
    background-color: #424242;
    color: #888;
    padding: 10px;
    font-size: 12px;
}
</style>