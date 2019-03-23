<template>
    <div>
        <collect-header :back='back'>收藏</collect-header>
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
            'back': true
        }
    }
}
</script>

<style lang="less" scoped>

</style>