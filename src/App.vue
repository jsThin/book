<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.KeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.KeepAlive"></router-view>
    <tab></tab>
  </div>
</template>

<script>
import Tab from './base/common/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>
 
<style></style>

