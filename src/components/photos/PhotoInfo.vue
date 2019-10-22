<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>    
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>

        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
             <vue-preview :slides="list" class="imgPrev"></vue-preview>
            <!--<img  class="preview-img"  v-for="(item,index) in list" :src="item.src" height="100" @click="$preview.open(index,list)" :key="index"> !-->
        </div>
        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="id"></cmt-box>    
    </div>
</template>
<script>
    import comment from "../subcomponets/comment.vue";
    export default {
        data() {
            return {
                id:this.$route.params.id,
                photoinfo:{
                    title:"Carolla",
                    add_time:new Date(),
                    click:10086
                },
                list:[
                    {
                        src:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        msrc:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1909276645.jpg",
                        w:600,
                        h:400
                    },
                    {
                        src:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        msrc:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        w:600,
                        h:400
                    },
                    {
                        src:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        msrc:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        w:600,
                        h:400
                    },
                    {
                        src:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        msrc:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        w:600,
                        h:400
                    },
                    {
                        src:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        msrc:"http://img0.imgtn.bdimg.com/it/u=632904080,1815005326&fm=26&gp=0.jpg",
                        w:600,
                        h:400
                    },
                    {
                        src:"http://img0.imgtn.bdimg.com/it/u=3500887370,1653181154&fm=26&gp=0.jpg",
                        msrc:"http://img0.imgtn.bdimg.com/it/u=3500887370,1653181154&fm=26&gp=0.jpg",
                        w:600,
                        h:400
                    },
                
                ]
            }
        },
        created(){
            console.log(this.id);
        },
        methods: {
            
        },
        components:{
            "cmt-box":comment
        }
    }
</script>
<style lang="less" scoped>
    .photoinfo-container{
        padding: 3px;
        h3{
            color:#26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        
    }
</style>
<style lang="less">
    .thumbs{
            .imgPrev{
                .my-gallery{
                display: flex !important;
                flex-wrap: wrap !important;
                    figure{
                            width: 30% !important;
                            margin: 5px !important;
                            img{
                                width: 100%;
                            }                     
                        }
                   } 
            }
            
            
        }

</style>
