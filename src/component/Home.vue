<template>
    <div>
        <home-header :back="false">首页</home-header>
        <div class="carrousel">
            <home-swiper :sliders='sliders'></home-swiper>
        </div>
        <h3>热门图书</h3>
        <ul>
            <li class="hot-book" v-for="book in hotBooks" :key="book.bookID">
                <div class="book-img">
                    <img :src="book.bookCover" :alt="book.bookName">
                </div>
                <div class="book-msg">
                    <b>{{book.bookName}}</b>
                    <p class="author">作者 {{book.author}}</p>
                    <p class="price">{{book.bookPrice}}</p>
                    <p class="desc">{{book.bookDesc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import HomeHeader from '../base/common/Header';
import HomeSwiper from '../base/home/Swiper';
import { getSliders,getHotBooks } from '../api/index.js';
export default {
    name: 'Home',
    created() {
        this.getSlider();
        this.getHot();
    },
    data() {
        return {
            sliders: [],
            hotBooks: []
        }
    },
    components: {
        HomeHeader,
        HomeSwiper
    },
    methods: {
        async getSlider() {
             this.sliders = await getSliders();
        },
        async getHot() {
            this.hotBooks = await getHotBooks();
        }
    }
}
</script>

<style lang="less" scoped>
    ul {
        padding-bottom: 1rem;
    }
    h3 {
        margin-left: .2rem;
        height: .8rem;
        line-height: .8rem;
        font-weight: 700;
    }
    .hot-book {
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
            .author {
                line-height: .56rem;
            }
            .price {
                line-height: .56rem;
                color:#FF0036;
            }
            .desc {
                line-height: .44rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
        }
    }
</style>

