<template>
     <div>
         <h1>新闻详情---{{$route.params.id}}</h1>

         <comment-box  :id="$route.params.id"></comment-box>
     </div>
</template>
<script>
    import comment from '../subcomponets/comment.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            "comment-box":comment
        }
    }
</script>
<style lang="less" scoped>

</style>