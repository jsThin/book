<template>
    <div>
        <add-header :back='back'>增加</add-header>
    </div>
</template>

<script>
import AddHeader from '../base/common/Header';
export default {
    name: 'Add',
    components: {
       AddHeader 
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