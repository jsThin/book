<template>
    <div>
        <home-header :back='back'>首页</home-header>
    </div>
</template>

<script>
import HomeHeader from '../base/common/Header';
export default {
    name: 'Home',
    components: {
        HomeHeader
    },
    data() {
        return {
            'back': false
        }
    }
}
</script>

<style lang="less" scoped>

</style>

