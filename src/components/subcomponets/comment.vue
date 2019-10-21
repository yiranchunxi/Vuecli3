<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论的内容(最多BB120字)"  v-model="cminfo"></textarea>
        <mt-button type="primary" size="large" @click="add_comment">提交</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                <div class="cmt-title">
                   <span> {{index+1}}#  用户:{{item.user}}</span> <span> 发表时间: {{item.time | dateFormat}}</span> 
                </div>
                <div class="cmt-body">
                    {{item.info}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                comments:[
                    {
                      user:"呵呵哒",
                      time:new Date(),
                      info:"评论内容啊撒大声地"     
                    },
                    {
                      user:"呵呵哒",
                      time:new Date(),
                      info:"评论内容啊撒大声地"     
                    },
                    {
                      user:"呵呵哒",
                      time:new Date(),
                      info:"评论内容啊撒大声地"     
                    },
                    {
                      user:"呵呵哒",
                      time:new Date(),
                      info:"评论内容啊撒大声地"     
                    },
                    {
                      user:"呵呵哒",
                      time:new Date(),
                      info:"评论内容啊撒大声地"     
                    }
                ],
                cminfo:'法国南部'
            }
        },
        props:["id"],
        created(){
            console.log(this.id);
        },
        methods: {
            loadMore(){
                console.log(11111);
                let arr=[...this.comments]
                 console.log(arr);
                this.comments=[...arr,...this.comments];
            },
            add_comment(){
                let comm={ user:"YYF",
                      time:new Date(),
                      info:this.cminfo}
                      this.comments.unshift(comm)
                this.cminfo='';      
            }
        },
    }
</script>
<style lang="less" scoped>
    .cmt-container{
        margin-bottom: 300px;
        h3{
            font-size: 18px;
            text-align: left;
        }
        textarea{
            height: 85px;
            font-size: 14px;
            margin: 0;
        }
        .cmt-list{
            font-size: 12px;
            margin: 5px 0;
            .cmt-item{

            }
            .cmt-title{
               background: #cccccc; 
               line-height: 30px;
               display: flex;
               justify-content: space-between;
            }
            .cmt-body{
               line-height: 35px; 
               text-indent: 2em;
               text-align: left;    
            }
        }
    }
</style>