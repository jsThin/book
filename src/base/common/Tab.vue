<template>
    <div class="tab">
        <router-link to="home">
            <i class="iconfont">&#xe61e;</i>
            <span>首页</span>
        </router-link>
        <router-link to="list">
            <i class="iconfont">&#xe600;</i>
            <span>列表</span>
        </router-link>
        <router-link to="add">
            <i class="iconfont">&#xe684;</i>
            <span>添加</span>
        </router-link>
        <router-link to="collect">
            <i class="iconfont">&#xe635;</i>
            <span>收藏</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Tab'
}
</script>

<style lang="less" scoped>
    .tab {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height:.86rem;
        background-color: #fff;
        display: flex;
        a {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #000;
            span {
                padding-top: .08rem;
            }
        }
        a.router-link-active {
            color: #f00;
        }
    }
</style>

