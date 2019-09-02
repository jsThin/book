<template>
    <div>
        <Select class="sel" v-model="model8" ref="resetSelect" clearable>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button class="search-btn" type="primary">搜索</Button>
        <Button class="search-btn" type="default" @click="searchClear">清空</Button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    }
                ]
            }
        },
        methods: {
        	searchClear() {
        		this.$refs.resetSelect.clearSingleSelect();
        		//或 this.$refs['resetSelect'].clearSingleSelect();
        		//或 this.$refs.resetSelect.query = '';
        	}
        }
    }
</script>
<style>
  .sel {
      width: 200px;
      
  }
</style>
