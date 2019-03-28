<template>
    <div>
        <add-header :back='true'>增加</add-header>
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
        }
    }
}
</script>

<style lang="less" scoped>

</style>