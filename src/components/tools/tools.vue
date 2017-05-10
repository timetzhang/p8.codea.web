<template lang="jade">
    div
        mu-paper.page.title
                mu-content-block
                    mu-flat-button(label="Web 前端工具",icon="dashboard",primary,style='font-weight:bold', fullWidth)
        mu-row(gutter)
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') HTML 压缩/解压工具
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/js.png")
                        span(slot="title", style='font-size:12px;') JS 压缩/解压工具
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/css3.png")
                        span(slot="title", style='font-size:12px;') CSS 压缩/解压工具
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/json.png")
                        span(slot="title", style='font-size:12px;') JSON 在线解析
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') 进制转换器
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') 图片转BASE64编码
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') HTML/CSS/JS 工具
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') 随机密码生成器
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') HTML 编码/解码
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') Base64 编码/解码
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') URL 编码/解码
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') SQL 格式化/压缩工具
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') MD5 加密
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') SHA 加密
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') XML、JSON 在线转换
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') XML 在线格式化
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') Markdown 在线编辑器
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/h5.png")
                        span(slot="title", style='font-size:12px;') html转js在线工具
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/unix_timestamp.png")
                        span(slot="title", style='font-size:12px;') UNIX 时间戳转换
                        
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/regular_expression.png")
                        span(slot="title", style='font-size:12px;') 正则表达式在线测试
                        
                        mu-icon-button(icon="play_arrow",slot="action")
        br
        mu-paper.page.title
            mu-content-block
                mu-flat-button(label="Colors 颜色转换工具",icon="dashboard",primary,style='font-weight:bold', fullWidth)
        mu-row(gutter)
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/rgb.png")
                        span(slot="title", style='font-size:12px;') RGB转16进制工具
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/hsv.png")
                        span(slot="title", style='font-size:12px;') RGB HSV 转换
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/cmyk.png")
                        span(slot="title", style='font-size:12px;') RGB CMYK 转换工具
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/cmyk.png")
                        span(slot="title", style='font-size:12px;') HEX CMYK 转换工具
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/hsv.png")
                        span(slot="title", style='font-size:12px;') HEX HSV 转换工具
                        mu-icon-button(icon="play_arrow",slot="action")
            mu-col(desktop="20", width="50")
                a(href='/#/tools/html_compressor')
                    mu-grid-tile.tile
                        img(src="/static/img/course/hsv.png")
                        span(slot="title", style='font-size:12px;') HSV CMYK 转换工具
                        mu-icon-button(icon="play_arrow",slot="action")
</template>

<script>
export default {
    name: 'tools',
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
.tile {
    margin-bottom: 20px;
}
</style>