<template>
  <div id="app">
      <router-view></router-view>
      <v-loading v-show="isLoading"></v-loading>
  </div>
</template>

<script>
import Loading from './component/_loading'
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  components: {
    'v-loading': Loading
  }
}
</script>
 
<style></style>

