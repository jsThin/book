<template>
    <div class="box">
        <div :id="id">{{number + 1}}</div>
        <button v-bind:disabled="false" v-on:[eventName]="dosomething">点击</button>
        <a v-bind:[attributeName]="title">vueJs</a>
        <div class="red" :class="{green: isgreen}"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            id: 'info',
            number: 1,
            url: 'https://cn.vuejs.org/v2/guide/syntax.html',
            title: '222222',
            attributeName: 'title',
            eventName: 'click',
            isgreen: false
        }
    },
    methods: {
        dosomething() {
            this.isgreen = !this.isgreen
        }
    }
}
</script>
<style scoped>
    .box {
        width: 400px;
        padding: 50px;
    }
    .red {
        width: 200px;
        height: 50px;
    }
    .green {
        background-color: green;
    }
</style>
