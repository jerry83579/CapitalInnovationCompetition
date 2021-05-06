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
        >使用觀星氣象大師，幫助你找出想去的
        </p>
        </v-col>
        <v-col class="ml-6" cols="9">
        <p class="mb-3 containertext"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        >觀星景點，且提供天文知識影音，
        </p>
        </v-col>
        <v-col class="ml-6" cols="9">
        <p class="containertext"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="900"
        data-aos-once="true"
        >讓你知道及時天氣。
        </p>
        </v-col>
        </v-row>
        <!--  -->
  
        <v-row
        align="center"
        class="text-center"
        style="background-color:#e5e5e5;"
        >
        <v-col>
        <v-btn 
        id="dd"
        rounded dark elevation="5" x-large href="/findStarGazingSpots" 
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-once="true"
        style="text-decoration:none">
        找尋觀星景點
        <v-icon
        dark
        right
        >
        mdi-checkbox-marked-circle
        </v-icon>
        </v-btn>
        <div 
        id="toTopButton"
        v-scroll-to="{
        el: '#app',
        duration: 500,
        lazy: false,
        easing: 'linear',
        offset: -200,
        force: true,
        cancelable: true,
        x: false,
        y: true
        }"
        @clcik="toTop(e)" style="position:fixed;z-index:500;cursor:pointer;left:96%;display:none"><svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg></div>
        </v-col>
        </v-row>
        <!--  -->


        <v-row id="starPosition" sm12 style="background-color:#e9c46a;" 
        >
        <v-col>
        <v-card 
        data-aos-once="true"
        data-aos="fade-up"
        class="mx-auto"
        max-width="370"
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
        src="../assets/武嶺.jpg"
        ></v-img>
        <v-card-title></v-card-title>
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
        <h5>台中武嶺農場</h5>
        </div>
        <div>標高3275公尺，是台灣公路海拔的最高點，此地正位於合歡山主峰與東峰之間的埡口鞍部</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
        <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
        >
        <v-chip>5:30PM</v-chip>
        </v-chip-group>
        </v-card-text>
        </v-card>
        </v-col> 
        <v-col>
        <v-card
        data-aos-once="true"
        data-aos="fade-up"
        class="mx-auto"
        max-width="370"
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
        src="../assets/望高瞭.jpg"
        ></v-img>
        <v-card-title></v-card-title>
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
        <h5>台中望高瞭觀景平台</h5>
        </div>
        <div>望高寮又稱「王田坎」，站在眺望平台可以看到三地萬家燈火的夜景</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
        <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
        >
        <v-chip>5:30PM</v-chip>
        </v-chip-group>
        </v-card-text>
        </v-card>
        </v-col>
        <v-col>
        <v-card
        data-aos-once="true"
        data-aos="fade-up"
        class="mx-auto"
        max-width="370"
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
        src="../assets/清境農場.jpg"
        ></v-img>
        <v-card-title></v-card-title>
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
        <h5>南投清境農場</h5>
        </div>
        <div>國際認可為「暗空公園」。白天有著綠油油美麗的風景，一到了晚上更是令人談為觀止！</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
        <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
        >
        <v-chip>5:30PM</v-chip>
        </v-chip-group>
        </v-card-text>
        </v-card>
        </v-col>
        </v-row>
        <!--  -->

        <v-row class="text-center" align="end" style="height:150px;background-color:#edf6f9">
        <v-col>
        <h2 
        data-aos="zoom-in-down"
        data-aos-once="true"><v-icon large>mdi-arrow-down-thick</v-icon>天象詳細資料</h2>
        </v-col>
        </v-row>
        <!--  -->

        <v-row id="asPosition">
        <v-expansion-panels>
        <v-expansion-panel>
        <v-row justify="center" >
        <v-col>
        <v-card rounded elevation="5" color="#81b29a">
        <v-card-title style="font-size:2rem">七大行星</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-row v-for="(items,index) in planetContent" :key="index.name">
        <v-col class="mx-3">
        <v-card-text style="font-size:1.6rem">{{items.name}}</v-card-text>
        <v-card-text
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        style="font-size:1.1rem">{{items.content}}</v-card-text>
        <v-divider class="mx-8"></v-divider>
        </v-col>
        </v-row>
        </v-card>  
        </v-col>
        </v-row>
        <v-expansion-panel-header hide-actions color="#81b29a">
        <v-icon>mdi-arrow-down-drop-circle</v-icon>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="#81b29a">
        <v-simple-table style="background-color:#81b29a">
        <template v-slot:default>
        <thead>
        <tr>
        <th class="text-left" style="font-size:1.1rem">
        國歷日期
        </th>
        <th class="text-left" style="font-size:1.1rem">
        農歷日期
        </th>
        <th class="text-left" style="font-size:1.1rem">
        天文現象
        </th>
        </tr>
        </thead>
        <tbody>
        <tr
        v-for="item in 30"
        :key="item.name"
        >
        <td></td>
        <td></td>
        <td></td>
        </tr>
        </tbody>
        </template>
        </v-simple-table>
        </v-expansion-panel-content >
        </v-expansion-panel>
        </v-expansion-panels>
        </v-row>
        <!--  -->
        
        <v-row id="vedioPosition" class="text-center" align="end" style="height:150px;background-color:#edf6f9">
        <v-col>
        <h2 
        data-aos="zoom-in-down"
        data-aos-once="true"><v-icon large>mdi-film</v-icon>影音視頻</h2>
        </v-col>
        </v-row>
        <!--  -->

        <v-row style="background-color:#e9c46a;">
        <v-col class="text-center">
        <video data-aos="zoom-out-right" data-aos-duration="1000" data-aos-once="true" controls height="500px" width="800px">
        <source src="../assets/cc.mp4" type="video/mp4">
        <source src="../assets/cc.mp4" type="video/ogg">
        </video>
        </v-col>
        <v-col data-aos="zoom-out-left" data-aos-duration="1000" data-aos-once="true" style="background-color:rgba(255,255,255,0.3)">
        <h4>影片介紹</h4>
        <v-card style="background-color:rgba(255,255,255,0.5)">
        <v-card-title>sdjisdjsidj</v-card-title>
        <v-divider class="mr-10"></v-divider>
        <v-card-text>1231easdasdasfsadfsdfasdfsfd</v-card-text>
        </v-card>
        </v-col>
        <!-- <v-col cols="8">
        <VideoPlayer
        id="cc"
        class="vjs-custom-skin"
        :options="playerOptions"
        :playsinline="true"
        />
        </v-col> -->
        </v-row>
        <!--  -->



        
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
        ops: {
        rail: {
          opacity: '0.2',
          background: undefined,
          border: '1px solid #cecece',
          size: '15px'
        },
        bar: {
          background: '#00ff00',
          keepShow: false,
          size: '10px',
          minSize: 0.2
        },
        scrollButton: {
          enable: true,
          background: '#cecece'
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 200
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: false,
          locking: true,
          checkShifKey: true
        }
      },
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
      
      alert(this.$vuetify.breakpoint.name)
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
         $('#toTopButton').fadeIn()
       }
       else{
          $('#toTopButton').fadeOut();
      }
      },
      

 
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
