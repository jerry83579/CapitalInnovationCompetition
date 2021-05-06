<template>
    <div>
        <v-app-bar
        app>
        <v-app-bar-title><a href="/home"  style="color:black;text-decoration:none">觀星氣象大師</a></v-app-bar-title>
        <v-divider vertical class="ml-3 "></v-divider>
        <v-col cols="2"></v-col>
        <a style="text-decoration:none" 
        class="d-none d-lg-flex d-xl-flex"
        v-scroll-to="{
        el: items.position,
        duration: 500,
        lazy: false,
        easing: 'linear',
        offset: -200,
        force: true,
        cancelable: true,
        x: false,
        y: true
        }"
        v-for="(items,index) in menu" :key="index.name"><ul class="mt-3 mx-4 menutext" >
        <li>{{items.title}}</li>
        </ul></a>
        <v-col  class="mt-3 col-sm-4 col-lg-3 offset-sm-2 offset-lg-0">
        <v-autocomplete 
        class="d-lg-none d-md-flex d-lg-flex"
        prepend-icon="mdi-magnify" hide-no-data  hide-selected  
        label="搜尋欲前往地區">
        </v-autocomplete>
        </v-col>
        <div class="d-lg-none d-md-flex">123</div>
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
          position:"#starPosition"
        },
        {
          index: "2",
          title: "每月天象",
          position:"#asPosition"
        },
        {
          index: "3",
          title: "天文影音",
          position:"#vedioPosition",
        },
        {
          index: "4",
          title: "意見箱",
          position:"#sugPosition"
        },
        {
          index: "5",
          title: "Q&A",
          position:"#qaPosition"
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