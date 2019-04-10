<template>
   <div class="add">
      <Header :back="true">添加</Header>
      <ul>
              <li>
                书名 <input type="text" v-model="book.bookName"/>
              </li>
              <li>
                作者 <input type="text" v-model="book.author"/>
              </li>
              <li>
                简介 <input type="text" v-model="book.bookDesc"/> 
              </li>
              <li>
                 价格 <input type="text" v-model="book.bookPrice"/>
              </li> 
              <li>
                封面 <input type="text" v-model="book.bookCover"/> 
              </li>
              <li>
                  <button @click="saveBook">保存</button>
              </li>
           </ul>    
   </div>
</template>
<script>
   import Header from "../base/common/Header.vue"
   import {addBook} from "../api/index.js"
   export default {
       data() {
           return {
               book: {}
           }
       },
       methods: {
           async saveBook() {
               let data = await addBook(this.book);
               // 跳转到列表
               this.$router.push("/list");
           }
       },
       components: {
           Header
       }
   }
</script>
<style lang="less" scoped>
   .add ul {
        position: absolute;
        top: .86rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: lightgreen;
    }
    .add ul li {
        font-size: 17px;
        padding: 20px;
        width: 90%;
        input {
            height: .4rem;
            width: 80%;
        }
    }
    .add button {
        margin-top: 10px;
        outline: none;
        border: none;
        width: 80px;
        height: 30px;
        border-radius: 8px;
        background: #afd9ee;
        font-size: 18px;
    }
</style>
