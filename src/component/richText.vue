<template>
  <div class="components-container">
    <vue-ueditor-wrap v-model="content" :config="myConfig"></vue-ueditor-wrap>
  </div>
</template>
<script>
  import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    components: {VueUeditorWrap},
    data() {
      return {
        content: 'hello world',
        msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
        myConfig: { 
          // 编辑器不自动被内容撑高 
          autoHeightEnabled: false, 
          // 初始容器高度 
          initialFrameHeight: 500, 
          // 初始容器宽度 
          initialFrameWidth: '100%', 
          // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！） 
          serverUrl: 'http://35.201.165.105:8000/controller.php', 
          // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，
          //vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2 UEDITOR_HOME_URL: '/static/UEditor/'
          /* 
            步骤
            1 下载 UEditor/php 最新版
            2 将解压的文件夹重命名UEditor，将UEditor放到项目static文件夹中
            3 设置ueditor.comfig.js 中的 UEDITOR_HOME_URL属性为UEditor路径  UEDITOR_HOME_URL: '/static/UEditor/'
            4 项目中安装使用 vue-ueditor-wrap --save    npm i vue-ueditor-wrap
          */
        }
      }
    }
  }
</script>
<style scoped> 
.components-container {
  width: 65%;
  margin: 50px auto;
}
</style>