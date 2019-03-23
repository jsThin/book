<template>
    <div>
        <list-header :back='back'>列表</list-header>
    </div>
</template>

<script>
import ListHeader from '../base/common/Header';
export default {
    name: 'List',
    components: {
        ListHeader
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

