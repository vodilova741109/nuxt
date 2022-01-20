<template>
  <v-col class="text-center">
    <BarChart :chartData="getStatus()"/>
    <div class="canvas">
    <div class="legend">
      <p class="title">Статистика просмотров</p>
      <ul class="caption-list" v-for="item in desserts" :key="item.name">
        <div class="block-flex">
          <i v-bind:style="{color: item.stroke}" class="mdi mdi-circle font-size-10 mt-1 "></i>
        <li class="caption-item">{{ item.name }} - {{ item.percent }}%</li>
        </div>
      </ul>
    </div>

    <svg class="chart" width="400" height="400" viewBox="0 0 50 50"  >
      <circle class="unit" r="15.9" cx="50%" cy="50%" v-bind:style="{stroke: item.stroke}" :stroke-dasharray="item.dasharray"
              :stroke-dashoffset="item.dashoffset" v-for="item in desserts" :key="item.name">{{ item.name }}</circle>
    </svg>
</div>
    </v-col>

</template>

<script>
export default {
  data() {
  return {

      desserts: [
        {
          id:1,
          name: 'Понедельник',
          stroke:"#86cfa3",
          dashoffset:"0",
          dasharray: "8 100",
          percent: 8,
        },
        {
          id:2,
          name: 'Вторник',
          stroke:"#a2c6e0",
          dashoffset:"-8",
          dasharray: "11 100",
          percent: 11,
        },
        {
          id:3,
          name: 'Среда',
          stroke:"#ffc7ec",
          dashoffset:"-19",
          dasharray: "31 100",
          percent: 31,

        },
        {
          id:4,
          name: 'Четверг',
          stroke:"#f8faa0",
          dashoffset:"-50",
          dasharray: "14 100",
          percent: 14,
        },
        {
          id:5,
          name: 'Пятница',
          stroke:"#adffd8",
          dashoffset:"-64",
          dasharray: "11 100",
          percent: 11,
        },
        {
          id:6,
          name: 'Суббота',
          stroke:"#f2c48f",
          dashoffset:"-75",
          dasharray: "10 100",
          percent: 10,
        },
        {
          id:7,
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
                label: 'График просмотров',
                borderWidth: 1,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
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

             console.log(chartData.datasets[0].data)
          return chartData
      },
  },
   mounted(){
      // this.getStatus()
  }
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

.canvas {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
}

.legend {
  max-width: 250px;
  margin-left: 30px;
}

.title {
  font-family: "Verdana", sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #96b4a2;
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
/* ё */


</style>

