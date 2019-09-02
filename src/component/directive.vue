<template>
    <div>
       <div v-jsthin="color">{{msg}}</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.directive('jsthin',function(el,binding,vnode) {
        el.style="color: " + binding.value
    })
    export default {
        data () {
            return {
                msg: 'directive 自定义vue指令',
                color: 'blue'
            }
        },
        methods: {
        	
        }
    }
</script>
<style>
</style>
