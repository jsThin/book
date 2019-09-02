<template>
    <div>
       <author></author>
    </div>
</template>

<script>
    import Vue from 'vue'
    // Vue.directive('jsthin',function(el,binding,vnode) {
    //     el.style="color: " + binding.value
    // })
    let authorExtend = Vue.extend({
        template: "<p><a :href='authorUrl'>{{authorName}}</a></p>",
        data: function() {
            return {
                authorName: 'jsthin',
                authorUrl: 'https://www.cnblogs.com/linhongjie/'
            }
        }
    })
    new authorExtend().$mount('author')
    export default {
        data () {
            return {}
        },
        components: {
            author
        }
    }
</script>
<style>
</style>
