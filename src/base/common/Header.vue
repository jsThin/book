<template>
    <div class="home_header">
        <router-link to="/">
            <i class="iconfont back">&#xe629;</i>
        </router-link>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="less" scoped>
    .home_header {
        width: 100%;
        height: .86rem;
        line-height: .86rem;
        font-size: .4rem;
        background-color: #00BCD4;
        text-align: center;
        position: relative;
        .back {
            position: absolute;
            left: .2rem;
            top: 0;

            font-size: .46rem;
            color: #000;
        }
    }
</style>
