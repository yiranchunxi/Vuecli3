<template>
  <div class="about">
    <h1>This is an about page</h1>
    <mt-button type="primary" size="large">primary</mt-button>
  </div>
</template>
<script>
    // 按需导入 Toast 组件
    import { Toast } from "mint-ui";
    export default {
        name:'about',
        data() {
          return {
            toastInstanse:null
          }
        },
        created(){
          this.getList();
        },
        methods:{
            getList() {
                // 模拟获取列表的 一个 AJax 方法
                // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
                this.show();
                setTimeout(() => {
                  //  当 3 秒过后，数据获取回来了，要把 Toast 移除
                  this.toastInstanse.close();
                }, 3000);
              },
            show() {
              // Toast("提示信息");
              this.toastInstanse = Toast({
                message: "这是消息",
                duration: -1, // 如果是 -1 则弹出之后不消失
                position: "bottom",
                iconClass: "glyphicon glyphicon-heart", // 设置 图标的类
                className: "mytoast" // 自定义Toast的样式，需要自己提供一个类名
              });
            }
        }
    }
</script>
<style lang="less">

</style>
