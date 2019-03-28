<template>
    <div>
        <detail-header :back="true">图书详情</detail-header>
        <div class="detail">
            <ol>
                <li>
                    <label>书名<input type="text" :value="book.bookName" /></label>
                </li>
                <li>
                    <label>作者<input type="text" :value="book.author" /></label>
                </li>
                <li>
                    <label>价格<input type="text" :value="book.bookPrice" /></label>
                </li>
                <li>
                    <label>介绍<textarea :value="book.bookDesc"></textarea></label>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import DetailHeader from '../base/common/Header';
import {getBook} from '../api/index.js'
export default {
    name: 'Detail',
    data() {
        return {
            book: {}
        }
    }, 
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            this.book = await getBook(this.$route.params.bid);
        }
    },
    components: {
        DetailHeader
    }
}
</script>

<style lang="less" scoped>
    .detail {
        background: #ccc;
        position: absolute;
        top: .86rem;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 99;
        li {
            line-height: .86rem;
            input,textarea {
                width: 5rem;
                line-height: .56rem;
                margin-left: .2rem;
            }
            textarea {
                height: 3rem;
            }
        }
    }
</style>