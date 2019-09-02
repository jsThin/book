<template>
  <div class="main">
  <!--   <rich-text></rich-text>
    <ul>
      <li v-for="(item,index) in book" :key="index">{{item.name}}</li>
    </ul>
    <v-mock></v-mock>
    <div>{{count}}</div>
    <next-tick></next-tick>
    <v-select></v-select>
    <v-test></v-test> -->
    <!-- <Socket></Socket> -->
    <directive></directive>
    <extend></extend>
  </div>
</template>
<script>
  import {api} from '../api/index.js'
  import RichText from './richText.vue'
  import NextTick from './nextTick.vue'
  import Select from './select.vue'
  import Socket from './socket.vue'
  import directive from './directive.vue'
  import extend from './extend.vue'
  // import Test from './test.vue'
  import Mock from './mock'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        book:[]
      }
    },
    components: {
      NextTick,
      RichText,
      Socket,
      "v-mock": Mock,
      'v-select': Select,
      // 'v-test': Test,
      directive,
      extend
    },
    created() {
      let _this = this
      api.post('/info/index', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        _this.book = response.data.book
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    /* computed:mapState({
        count: state => state.count
    }) */
    // computed: mapState(['count'])
    computed: mapState({
      count: 'count'
    })

  }
</script>
<style scoped> 
</style>