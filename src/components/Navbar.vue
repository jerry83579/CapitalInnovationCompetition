<template>
    <div>
        <v-app-bar
        app>
        <v-app-bar-title><a href="home" style="color:black;text-decoration:none">觀星氣象大師</a></v-app-bar-title>
        <v-divider vertical class="ml-3 "></v-divider>
        <v-col cols="2" class="d-md-none d-lg-flex d-none"></v-col>
        <a style="text-decoration:none" v-for="(items,index) in menu" :key="index.name" :href="items.href"><ul class="mt-3 mx-4 menutext d-none d-lg-flex d-xl-none" >
        <li>{{items.title}}</li>
        </ul></a>
        <v-col cols="3" class="mt-3">
        <v-autocomplete 
        class="d-none d-lg-flex d-xl-none"
        prepend-icon="mdi-magnify" hide-no-data  hide-selected  
        label="搜尋欲前往地區">
        </v-autocomplete>
        </v-col>
        </v-app-bar>

     
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data() {
      return {
          menu: [
        {
          index: "1",
          title: "熱門觀星景點",
          href:"/stargazingSpot",
        },
        {
          index: "2",
          title: "每月天象",
          href:"/AstronomicalKnowledge",
        },
        {
          index: "3",
          title: "天文影音",href:"",
        },
        {
          index: "4",
          title: "意見箱",href:"",
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
  .menutext{
  transition: 0.3s;
  font-size: 1.12rem;
  list-style-type:none;
  color: #0077b6;
  cursor: pointer;
  text-decoration: none;
  }
  
 .menutext:hover{
    transform: translate(-3px, -3px);
 }
</style>