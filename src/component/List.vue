<template>
    <div>
        <list-header :back="true">列表</list-header>
        <div class="listContent" @scroll="loadMore" ref="scroll">
            <ul>
                <router-link 
                    class="list" 
                    v-for="book in allBooks" 
                    :key="book.bookId"
                    tag="li"
                    :to="{name:'detail',params:{bid:book.bookId}}"
                >
                    <div class="book-img">
                        <img :src="book.bookCover" :alt="book.bookName">
                    </div>
                    <div class="book-msg">
                        <b>{{book.bookName}}</b>
                        <p class="desc">{{book.bookDesc}}</p>
                        <p class="price">{{book.bookPrice}}</p>
                        <!-- .stop处理事件冒泡 -->
                        <button class="remove" @click.stop="remove(book.bookId)">删除</button>
                    </div>
                </router-link>
            </ul>
            <button class="more" @click="getMore">加载更多</button>
        </div>
    </div>
</template>

<script>
import ListHeader from '../base/common/Header';
import { getPage,removeBook } from '../api/index.js'
export default {
    name: 'List',
    data() {
        return {
            allBooks: [],
            index: 0,
            hasMore: true,
            hasLoad: true
        }
    },
    created() {
        this.getBooks(this.index);
    },
    methods: {
        loadMore() {
            //清除定时器，保证只有一个定时器在使用
            clearTimeout(this.timer);
            //设置定时器，实现事件节流
            this.timer = setTimeout(() => {
                //clientHeight(clientWidth)  可视高度(宽度)
                //scrollTop(scrollTop)     卷走的高度(宽度)
                //scrollHeight(scrollWidth)  盒子的真实高度(宽度)
                let {clientHeight,scrollTop,scrollHeight} = this.$refs.scroll;
                //条件，当可视高度及卷走高度相加还剩20到达scrollHeight时发送请求
                if((clientHeight + scrollTop + 20) >= scrollHeight) {
                    this.getMore();
                }
            },30);
        },
        getMore() {
            this.getBooks(this.index)
        },
        //获取部分图书信息
        async getBooks(index) {
            //有更多数据或者加载完成之后请求数据
            if(this.hasMore && this.hasLoad) {
                this.hasLoad = false;
                let {hasMore,books} = await getPage(index);
                //合并图书
                this.allBooks = [...this.allBooks,...books];
                this.hasMore = hasMore;
                this.index = this.allBooks.length;
                this.hasLoad = true;
            }
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
    .listContent {
        width: 100%;
        position: fixed;
        top: .86rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
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
    .more {
        margin-bottom: 1rem;
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        background-color: #00BCD4;
        font-size: 16px;
        text-align: center;

    }
</style>

