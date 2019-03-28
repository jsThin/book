<template>
    <div>
        <list-header :back='back'>列表</list-header>
        <ul>
            <li class="list" v-for="book in allBooks" :key="book.bookId">
                <div class="book-img">
                    <img :src="book.bookCover" :alt="book.bookName">
                </div>
                <div class="book-msg">
                    <b>{{book.bookName}}</b>
                    <p class="desc">{{book.bookDesc}}</p>
                    <p class="price">{{book.bookPrice}}</p>
                    <button class="remove" @click="remove(book.bookId)">删除</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ListHeader from '../base/common/Header';
import { getAllBooks,removeBook } from '../api/index.js'
export default {
    name: 'List',
    data() {
        return {
            'back': true,
            allBooks: []
        }
    },
    created() {
        this.getAll();
    },
    methods: {
        //获取图书信息
        async getAll() {
            this.allBooks = await getAllBooks();
        },
        //删除某本图书
        async remove(id) {
            await removeBook(id);
            //前台处理删除
            this.allBooks = this.allBooks.filter(item => item.bookId !== id);
        }
    },
    components: {
        ListHeader
    }
}
</script>

<style lang="less" scoped>
    ul {
        padding-bottom: 1rem;
    }
    .list {
        width: 100%;
        padding: .1rem 0;
        border-top: .02rem solid #ccc;
        display: flex;
        .book-img {
            flex: 1;
            img {
                width: 80%;
            }
        }
        .book-msg {
            flex: 1;
            padding-right: .1rem;
            b {
                font-weight: 700;
                line-height: .56rem;
            }
            .price {
                line-height: .66rem;
                color:#FF0036;
            }
            .desc {
                line-height: .44rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
            .remove {
               width: 1.6rem;
               height: .66rem;
               line-height: .66rem;
               background-color: #f40;
               border-radius: .1rem;
               font-size: 15px;
            }
        }
    }
</style>

