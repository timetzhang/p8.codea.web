<template lang="jade">
    div.doc_list
        router-link(:to="studentHref")
            mu-avatar(:src="headimg",:size="30",style="vertical-align:middle;")
        div.name
            router-link(:to="studentHref",style="color:black")
                span {{name}}
            span.time {{time}}
            a(@click="pushType")
                mu-badge(:content="typeStr",:color="typeColor")
            a(v-if="is_star == 1")
                span &nbsp;&nbsp;
                mu-badge(content="精华",color="gold")
            a(v-if="is_top != null")
                span &nbsp;&nbsp;
                mu-badge(content="置顶",color="purple600")
        div(style="float:right")
            mu-icon(value="visibility",style="vertical-align:middle;",:size="20")
            label &nbsp;{{views}}&nbsp;&nbsp;
            mu-icon(value="speaker_notes",style="vertical-align:middle;",:size="20")
            label &nbsp;{{comments}}&nbsp;&nbsp;
            mu-icon(value="favorite",style="vertical-align:middle;",:size="20")
            label &nbsp;{{isLike}}&nbsp;&nbsp;
        div
            router-link(:to="docHref")
                h2 {{title}}
            p {{brief}}
            br
            div
                a(v-for="(item,index) in tagItems",:key="item.index",@click="pushTag(item)")
                    mu-badge(:content="item",secondary,style="margin-right:5px;")
        br
        hr
</template>
<script>
import DateTime from '@/common/datetime'
export default {
    name:"doc_list",
    props: {
        studentHref:{
            type:String,
            default:''
        },
        docHref:{  //详情跳转地址
            type:String,
            default:''
        },
        headimg:{  //学生头像
            type:String,
            default:''
        },
        name:{  //学生姓名
            type:String,
            default:''
        },
        time:{  //发布时间
            type:String,
            default:''
        },
        views:{  //浏览量
            type:Number,
            default:0
        },
        comments:{  //评论量
            type:Number,
            default:0
        },
        isLike:{  //点赞量
            type:Number,
            default:0
        },
        title:{  //list标题
            type:String,
            default:''
        },
        brief:{  //list简介
            type:String,
            default:''
        },
        tags:{  //关键词
            type:String,
            default:''
        },
        type:{  //list类型
            type:Number,
            default:1
        },
        isSolved: {  //提问是否被解决
            type:String,
            default:'0'
        },
        is_star: {
            type:Number,
            default: 0
        },
        is_top: {
            type:Number,
            default:null
        }
    },
    data() {
        return {
            tagItems:[],//关键词数组
            typeStr:'',//doc类型
            typeColor:'',//类型颜色
        }
    },
    methods: {
        pushType:function(){
            this.$emit('listen-type',this.type);//获取点击的文档类型id
        },
        pushTag:function(data){
            this.$emit('listen-tag',data);//获取点击的tag
        }
    },
    mounted() {
        var tag = this.tags.replace(/，/g,",");
        this.tagItems = tag.split(',');
        switch (this.type) {
            case 1:
                this.typeStr = '文档';
                this.typeColor = 'blue400';
                break;
            case 2:
                if(this.isSolved == '1'){
                    this.typeStr = '提问已解决';
                    this.typeColor = 'green400';
                }else{
                    this.typeStr = '提问';
                    this.typeColor = 'red400';
                }
                break;
            default:
                break;
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
    overflow: hidden;
 	text-overflow: ellipsis;
 	display: -webkit-box;
 	-webkit-line-clamp: 2;
 	-webkit-box-orient: vertical;
}

.doc_list label{
    font-size:12px;
    color: #969696;
}

.doc_list .name{
    display: inline-block;
    margin-left: 5px;
}

.mu-icon{
    color: #969696;
}

.doc_list .name .time {
    display: inline-block;
    padding:0 5px 0 3px;
    color: #969696;
}

a {
    cursor: pointer;
}
</style>
