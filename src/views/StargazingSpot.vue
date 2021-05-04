    <template>
      <div id="app">
        <v-app id="inspire">
        <Navbar></Navbar>
        <v-main>
        <v-container fluid>
        <v-row class="sectionone" align="center">
        <v-col class="ml-6" cols="9">
        <p class="containertext"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        >夜晚的好去處，絕佳的觀星景點
        </p>
        </v-col>
        <v-col class="ml-6" cols="9">
        <p class="mb-3 containertext"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        >一覽無遺，讓你暫且
        </p>
        </v-col>
        <v-col class="ml-6" cols="9">
        <p class="containertext"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="900"
        data-aos-once="true"
        >忘卻所有煩惱。
        </p>
        </v-col>
        </v-row>
        <!--  -->

        <v-row style="background-color:#e9c46a;" >
        <v-col v-for="i in 6" :key="i.name">
        <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
        >
        <template slot="progress">
        <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
        ></v-progress-linear>
        </template>
        <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-title>Cafe Badilico</v-card-title>
        <v-card-text>
        <v-row
        align="center"
        class="mx-0"
        >
        <v-rating
        :value="4.5"
        color="amber"
        dense
        half-increments
        readonly
        size="14"
        ></v-rating>
        <div class="grey--text ml-4">
        4.5 (413)
        </div>
        </v-row>
        <div class="my-4 subtitle-1">
        $ • Italian, Cafe
        </div>
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-title>Tonight's availability</v-card-title>
        <v-card-text>
        <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
        >
        <v-chip>5:30PM</v-chip>
        <v-chip>7:30PM</v-chip>
        <v-chip>8:00PM</v-chip>
        <v-chip>9:00PM</v-chip>
        </v-chip-group>
        </v-card-text>
        <v-card-actions>
        <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
        >
        Reserve
        </v-btn>
        </v-card-actions>
        </v-card>
        </v-col>
        </v-row>
        
        
       

        
        </v-container>  
    </v-main>
   </v-app>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '../components/Navbar.vue'
import axios from 'axios';
import AOS from 'aos';

export default {
 
   /*eslint-disable*/
   components:{
    Navbar
   },
    data() {
        return {
        position:
        {
        C10017: "310 30",
        C65: "280 65",
        C63: "288 30",
        C68: "240 55",  
        C10004: "235 95",
        C10018: "210 80",
        C10005: "210 130",
        C66: "180 170",
        C10008: "220 200",
        C10007: "150 210",
        C10009: "130 235",
        C10010: "170 265",
        C10020: "142 265",
        C67: "130 320",
        C64: "130 380",
        C10013: "170 420",
        C10014: "225 350",
        C10015: "275 220",
        C10002: "300 115",
        C09007: "20 80",
        C09020: "20 150",
        C10016: "15 250"}
        ,
        taiwanCountry:[],   
      
     
      planetContent:[
        { 
          name:"水星",
          content:"由寶瓶座經雙魚座至白羊座，順行。接近太陽不易看見，視星等: -0.4→-2.3→-1.2，15日過中天時刻為11時46分。"
        },
        {
          name:"金星",
          content:"由雙魚座至白羊座，順行。接近太陽不易看見，視星等: -4.0→-3.9，15日過中天時刻為12時21分。"
        },
        {
          name:"火星",
          content:"由金牛座至雙子座，順行。日沒後見於西方附近天空，約於夜晚22-23時沒入西偏北方地平，視星等: +1.3→+1.5，15日過中天時刻為16時03分。"
        },
        {
          name:"木星",
          content:"在摩羯座至寶瓶座，順行。上、下半月分別約於凌晨3-4、2-3時由東偏南方地平升起，日出前見於東南方附近天空，視星等: -2.1→-2.2，15日過中天時刻為8時20分。"
        },
        {
          name:"土星",
          content:"在摩羯座，順行。上、下半月分別約於凌晨2-3、1-2時由東偏南方地平升起，日出前見於東南至南方附近天空，視星等: +0.8→+0.7，15日過中天時刻為7時26分。"
        },
        {
          name:"天王星",
          content:"在白羊座，順行，視星等: +5.9，15日過中天時刻為12時56分。"
        },
        {
          name:"海王星",
          content:"在寶瓶座，順行，視星等: +8.0→+7.9，15日過中天時刻為9時58分。"
        },
      ],
      top:false,
       
      
        }
    },
     computed: {
      height () {
        alert(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return '100px'
          case 'xl': return 800
        }
      },
    },
    mounted() {
       window.addEventListener('scroll',this.windowScrollListener); 


        console.log("this.$d3",this.$d3)
   
       //   console.log(`${positionId}`)
       // console.log("1",_this.position[`${positionId}`])
       // console.log("2",_this.position[positionId])
    var paths = document.querySelectorAll('path');
        let _this = this 
        paths.forEach(e => {
            e.onmouseover = function () {
            console.log(_this.position)
            var positionId=e.id
            if(positionId!=""){
          $('#position').attr("transform", "translate(" + _this.position[positionId]+ ")");
            }
            //防止點到座標圖示
               _this.filter = this.dataset.name
             $('#text').html(_this.filter) 
            }
        })

     var svg=this.$d3.select('#svg')
            .attr('width', 400)
            .attr('height', 540)
            .attr('viewbox',0,0,400,350)
            console.log("svg",svg)
 

    },
   created: function(){   
     
     AOS.init({
 duration: 1200
});

console.log(AOS)
         axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', {
          headers: {
            Accept: 'application/json',
        }  
          })
           .then(({ data }) => {
               console.log(data)
             
             
           })
    },
    methods: {
       jumpPage(city){
       this.$router.push({ path:"/'${{city}}" , query:{city}})
       },
       windowScrollListener(){
       var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
       if(scrollTop >= 300){
         this.top = true;
       }
       else{
        this.top = false;
      }
      },
      gotoTop(){
        scrollTo(0,0)
      }

 
}
}

</script>

<style>
  .containertext{
    color: rgb(255, 255, 255);
    font-size: 2.2rem;
    text-shadow: 2px 5px 5px rgb(0, 0, 0);
  }
  .sectionone{
  height: 400px;
  background:url("../assets/night名.png") no-repeat;
  }
  
</style>
