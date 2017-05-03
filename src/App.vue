<template lang="jade">
    div.app
        div.menu
            mu-row.container
                mu-col(desktop='50')
                    router-link(to='/home')
                        mu-flat-button.item(style='vertical-align:-19px')
                            img(src="/static/img/logo.png")
                    router-link(to='/school')
                        mu-flat-button.item(label='学校')
                    router-link(to='/course')
                        mu-flat-button.item(label='教程')
                    router-link(to='/sdk')
                        mu-flat-button.item(label='SDK')
                    router-link(to='/tools')
                        mu-flat-button.item(label='工具')
                mu-col(desktop='50',style='text-align:right')
                    mu-text-field.search-box(hintText="搜索", hintTextClass='search-hint', inputClass='search-input')
                    mu-icon-button(icon='search', tooltip="搜索", style='color:white')
        router-view.container.content
        div.bottom
            mu-row.container(gutter)
                mu-col(desktop="50")
                    p 地址：长沙远大三路远大城J57
                    p 电话：0731-84086832
                    p 邮箱：p8@joinp8.com
                mu-col(desktop="50",style="text-align:right")
                mu-divider
                mu-col(desktop="100")
                    p ©长沙噼啪星球文化传媒有限公司 / 湘ICP备16002937号
</template>

<script>
import Browser from './common/browser'

export default {
    data() {
        return {
            curMenu: this.$route.path.split('/')[1]
        };
    },
    mounted:function(){
        
    },
    beforeUpdate: function(){

    },
    methods: {
    }
}
</script>

<style>
.app{
    background-color: #f4f4f4;
}

.menu {
    background-color: #424242;
}

.menu .item {
    line-height: 54px;
    height: 54px;
    color:white;
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
    padding: 10px 0;
}

.bottom {
    background-color: #424242;
    color: #888;
    padding: 10px;
    font-size: 12px;
}

.router-link-active .mu-flat-button-wrapper{
    background-color: #d00000;
    color: white;
    border-bottom: 2px solid #d00000;
}

.router-link-active{
    background-color: #d3d3d3;
}
</style>