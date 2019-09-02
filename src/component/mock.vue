<template>
  <div class="main">
    <ul>
        <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  import {api} from '../api/index.js'
  export default {
    data() {
      return {
          list: []
      }
    },
    created() {
        let _this = this
        api.get('/news/index').then(function (response) {
            _this.list = response.data.list
        }).catch(function (error) {
            console.log(error);
        });
    }
  }
</script>
<style scoped> 
</style>