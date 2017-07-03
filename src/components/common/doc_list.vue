<template lang="jade">
    div.doc_list
        mu-avatar(:src="headimg",:size="30",style="vertical-align:middle;")
        div.name
            span {{name}}
            span.time {{time}}
            mu-badge(v-if="type === '2' && isSolved === '1'",content="已解决" secondary)
            mu-badge(v-else-if="type === '1'",content="文章" secondary)
            mu-badge(v-else-if="type === '2'",content="提问" secondary)
            mu-badge(v-else-if="type === '3'",content="文档" secondary)
        div(style="float:right")
            mu-icon(value="visibility",style="vertical-align:middle;",:size="20")
            label {{views}}&nbsp;&nbsp;
            mu-icon(value="speaker_notes",style="vertical-align:middle;",:size="20")
            label {{comments}}&nbsp;&nbsp;
            mu-icon(value="favorite",style="vertical-align:middle;",:size="20")
            label {{isLike}}&nbsp;&nbsp;
        div
            h2 {{title}}
            p {{breif}}
            br
            div
                mu-badge(:content="tags" secondary)
        br
        hr
</template>
<script>
export default {
    name:"doc_list",
    props: {
        headimg:{
            type:String,
            default:''
        },
        name:{
            type:String,
            default:''
        },
        time:{
            type:String,
            default:''
        },
        views:{
            type:Number,
            default:0
        },
        comments:{
            type:Number,
            default:0
        },
        isLike:{
            type:Number,
            default:0
        },
        title:{
            type:String,
            default:''
        },
        breif:{
            type:String,
            default:''
        },
        tags:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:1
        },
        isSolved: {
            type:String,
            default:'0'
        }

    }
}
</script>
<style scoped>
.doc_list{
    padding: 20px;
    padding-bottom: 0px;
    font-size: 13px;
}

.doc_list h2 {
    margin: 4px 0 4px 0;
}

.doc_list p {
    margin: 4px 0 4px 0;
}

.doc_list .name{
    display: inline-block;
    margin-left: 5px;
}

.doc_list .name .time {
    display: inline-block;
    padding:0 5px 0 3px;
    color: #969696;
}
</style>
