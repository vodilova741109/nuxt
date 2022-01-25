<template>


  <v-col class="text-center">
    <div class="canvas">
    <BarChart :chartData="getStatus()"/>      
     
    <div class="legend">
      <p class="title">Статистика просмотров</p>   
      <ul class="caption-list" v-for="item in desserts" :key="item.name">
        <div class="block-flex">
          <i v-bind:style="{color: item.stroke}" class="mdi mdi-circle font-size-10 mt-1 "></i>
        <li class="caption-item">{{ item.id }} - {{ item.percent }}%</li>
        </div>
      </ul>
    </div>
    <svg class="chart" width="400" height="400" viewBox="0 0 50 50"  >
      <circle class="unit" r="15.9" cx="50%" cy="50%" v-bind:style="{stroke: item.stroke}" :stroke-dasharray="item.dasharray"
              :stroke-dashoffset="item.dashoffset" v-for="item in desserts" :key="item.name">{{ item.name }}</circle>
    </svg>  
    </div>  
    <div class="cluster">
      <h2>Данные кластера</h2>
       <v-simple-table>
          <thead>
            <tr class="header">
              <th class="text-left">cluster name</th>
              <th class="text-left">status</th>
              <th class="text-left">timed out</th>
               <th class="text-left">number of nodes</th>
              <th class="text-left">number of data nodes</th>
              <th class="text-left">active primary shards</th>
              <th class="text-left">active shards</th>
              <th class="text-left">relocating shards</th>
              <th class="text-left">unassigned shards</th>
              <th class="text-left">active shards percent as number</th>
            </tr>
          </thead>
          <tbody>
            <tr>            
              <td class="text-left">{{health.cluster_name}}</td>
              <td class="text-left">{{health.status}}</td>
              <td class="text-left">{{health.timed_out}}</td>
              <td class="text-left">{{health.number_of_nodes}}</td>
              <td class="text-left">{{health.number_of_data_nodes}}</td>
              <td class="text-left">{{health.active_primary_shards }}</td>
              <td class="text-left">{{health.active_shards }}</td>
              <td class="text-left">{{health.relocating_shards}}</td>
              <td class="text-left">{{health.unassigned_shards }}</td>
              <td class="text-left"><progress v-bind:value='health.active_shards_percent_as_number' max="100"></progress></td>
            </tr>
          </tbody>
        </v-simple-table>     
    </div>
    <br>

       <div class="cluster">
         <h2>Данные Яндекс-метрики</h2>
       <v-simple-table>         
          <thead>
            <tr class="header">
              <th class="text-left">Dimensions</th>
              <th class="text-left">Metrics</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in metrica.data" :key="item.name">  
              <td class="text-left">{{item.dimensions}}</td>  
              <td class="text-left">{{item.metrics}}</td>            
              
            </tr>
          </tbody>
        </v-simple-table>     
    </div>
     
       
    </v-col>

 
    


</template>

<script>
import axios from 'axios'
import TableCluster from './TableCluster.vue'
export default {
  components: { TableCluster },
  data() {
    return {    
        health: {},
        metrica: [],
        desserts: [
          {
            id:0,
            name: 'Понедельник',
            stroke:"#86cfa3",
            dashoffset:"0",
            dasharray: "8 100",
            percent: this.getParams()[0],
          },
          {
            id:1,
            name: 'Вторник',
            stroke:"#a2c6e0",
            dashoffset:"-8",
            dasharray: "11 100",
            percent: 11,
          },
          {
            id:2,
            name: 'Среда',
            stroke:"#ffc7ec",
            dashoffset:"-19",
            dasharray: "31 100",
            percent: 31,

          },
          {
            id:3,
            name: 'Четверг',
            stroke:"#f8faa0",
            dashoffset:"-50",
            dasharray: "14 100",
            percent: 14,
          },
          {
            id:4,
            name: 'Пятница',
            stroke:"#adffd8",
            dashoffset:"-64",
            dasharray: "11 100",
            percent: 11,
          },
          {
            id:5,
            name: 'Суббота',
            stroke:"#f2c48f",
            dashoffset:"-75",
            dasharray: "10 100",
            percent: 10,
          },
          {
            id:6,
            name: 'Воскресенье',
            stroke:"#e3bfe2",
            dashoffset:"-85",
            dasharray: "15 100",
            percent: 15,
          },

        ],
      }
  }, 
  methods: {
   getStatus(){
          const chartData = {
              labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
              ],
              datasets:[
                {
                label: 'Просмотров',
                borderWidth: 1,
                backgroundColor: [
                // "#3980c0","#51af98", "#4bafe1", "#B4B4B5", "#f1f3f4",
                  // 'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)',
                  // 'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  // 'rgba(255,99,132,1)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)',
                  // 'rgba(255,99,132,1)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
                ],
                pointBorderColor: '#2554FF',
                data: []
              }]
            }
          let statusArr = []
          statusArr = this.desserts.map(function(dessert) {
             chartData.datasets[0].data.push(dessert.percent)
            return dessert.percent;
            });
          let colorArr = []
          colorArr = this.desserts.map(function(dessert) {
            chartData.datasets[0].borderColor.push(dessert.stroke)
             chartData.datasets[0].backgroundColor.push(dessert.stroke)
            return dessert.stroke;
            });



            //  console.log(chartData.datasets[0].data)
          return chartData
      },
    getParams() {
      const result = [];
      const Sum = 100;
      let num = 14;
      let total = -1;
      const max = Math.floor(1);
      const min = Math.ceil(0.9);
      function addRandomNub(){
          for (let i = 1; i < 7; i++ ) {
        let db = num * ( Math.random() * (max - min) + min);
        result.push( db );
        total -= db;    
        // console.log(total)
        };
      result.push(Sum + total);
      // console.log(total)  
      // let item = result[6]      
      // console.log(item)  
      return result
      } 
      let Arr = addRandomNub();
      // console.log(Arr[6])
      return Arr
     
      },  
   
  },
  mounted(){    
    //  console.log(this.health)
      this.getParams()
      // this.getElastic()
  },
  async fetch() {
    const health = await axios.get('http://localhost:3000/api/health')      
    this.health = health.data;  
    const metrica = await axios.get('https://api-metrika.yandex.net/stat/v1/data?preset=sources_summary&id=44147844')      
    this.metrica = metrica.data; 
    console.log(this.metrica.data[0]) 
  },
 
}
</script>

<style scoped>

@keyframes render {
  0% {
    stroke-dasharray: 0 100;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #eedcf2;
}
.text-center{
  display: block;
}
.text-center[data-v-2a183b29]{
  display: block;
  
}
.cluster{
  
}
.canvas {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
}

.legend {
  max-width: 250px;
  margin-left: 30px;
}

.title {
  font-family: "Verdana", sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #f8faa0;
}

.caption-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.block-flex{
  display: flex;
  align-items: center;
  justify-content: start;
}
.caption-item {
  position: relative;
  margin: 20px 0;
  padding-left: 30px;
  font-family: "Verdana", sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: #cfc2cf;
  cursor: pointer;
}

.caption-item:hover {
  opacity: 0.8;
}

.caption-item::before {
  content: "";

  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 8px;
}
.chart {
  min-width: 400px;
}

.unit {
  fill: none;
  stroke-width: 10;
  cursor: pointer;
  animation-name: render;
  animation-duration: 1.5s;
  transition-property: all;
  transition-duration: 1.5s;
}

.unit:hover,
.hovered {
  opacity: 0.8;
  stroke-width: 12;
}



</style>

