<template>
    <div>
        <detail-header :back="true">图书详情</detail-header>
        <div class="detail">
            <ol>
                <li>
                    <label>书名<input type="text" v-model="book.bookName" /></label>
                </li>
                <li>
                    <label>作者<input type="text" v-model="book.author" /></label>
                </li>
                <li>
                    <label>价格<input type="text" v-model="book.bookPrice" /></label>
                </li>
                <li>
                    <label>介绍<textarea v-model="book.bookDesc"></textarea></label>
                </li>
                <li>
                    <button @click="save(book.bookId)">保存</button>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import DetailHeader from '../base/common/Header';
import {getBook,updateBook} from '../api/index.js'
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
            //假如是空对象，跳转到列表页
            if(!this.book.bookId) this.$router.push('/list');
        },
        async save(id) {
            //修改书籍信息
            await updateBook(id,this.book);
            //返回list页
            this.$router.push('/list');
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
            margin-left: .2rem;
            input,textarea {
                width: 5rem;
                line-height: .56rem;
                margin-left: .2rem;
            }
            textarea {
                height: 3rem;
            }
            button {
                outline: none;
                background-color: #f40;
                width: 1rem;
                height: .5rem;
                line-height: .5rem;
                border-radius: .1rem;
            }
        }
    }
</style>