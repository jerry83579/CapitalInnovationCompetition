<template>
<div id="app" >
  <v-app id="inspire">
    <div>
       <v-card>
         <Navbar :menu="menu"></Navbar>
<!-- 導覽行 -->
    
    <v-sheet
        id="layout"
      >
  <v-layout style="height:650px">
       <v-container class="mt-15">
       
    
       </v-container>
</v-layout>
 <!-- 主要內容 -->
        <!-- <v-footer style="background-color:#4f86c6;height:200px"></v-footer> -->
         <!-- 頁尾 -->
        </v-sheet>
       </v-card>
    </div>
     
  </v-app>
</div>
</template>




<script>

import Navbar from '../components/Navbar.vue'
// import axios from 'axios';

export default {
    /*eslint-disable*/
    components:{
        Navbar
    },
    data() {
        return {
            taiwanCountry:[],
             tabs: null,
            
        menu: [
        { 
          index: "0", title: "首頁" ,href:"/test"
          },
        {
          index: "1",
          title: "熱門觀星景點",href:"/stargazingSpot"
        },
        {
          index: "2",
          title: "天文知識",href:"/astronomicalKnowledge"
        },
        {
          index: "3",
          title: "天文影音",href:""
        },
        {
          index: "4",
          title: "意見箱",href:""
        },
        {
          index: "5",
          title: "Q&A",
        },
        
      ],
        }
    },
}

 

</script>


<style>
 



/* var(--color-gold); */
</style>