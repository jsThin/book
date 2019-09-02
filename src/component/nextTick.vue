<template>
  <div>
    <div ref="msg">{{message}}</div>
    <button @click="handleClick">点我</button>
    <input v-if="isShow" ref="input" type="text">
  </div>
</template>
<script>
  import Vue from 'vue'
  import {api} from '../api/index.js'
  export default {
    data() {
      return {
          message: 'begin',
          isShow: false
      }
    },
    methods: {
        handleClick() {
           this.message = 'end'
           this.isShow = true
           Vue.nextTick(() => {
            //    console.log(this.$refs.msg.innerHTML)
            this.$refs.input.focus()
           })
        }
    }
  }
</script>
<style scoped> 
</style>