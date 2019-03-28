<template>
    <div>
        <collect-header :back='true'>收藏</collect-header>
    </div>
</template>

<script>
import CollectHeader from '../base/common/Header';
export default {
    name: 'Collect',
    components: {
        CollectHeader
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>

</style>