<template>
<div>
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
            <tr v-for="item in health" :key="item.cluster_name">
              <td class="text-left">{{health.active_shards_percent_as_number}}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-left">{{ item.variant}}</td>
              <td class="text-left">{{ item.type }}</td>
              <td class="text-left">{{ item.stock}}</td>
              <td class="text-left">{{ item.price }} $ </td>
              <td class="text-left">{{ item.sales}} $</td>
              <td class="text-left"><progress v-bind:value='item.status' max="100"></progress></td>
            </tr>
          </tbody>
        </v-simple-table>
 <!-- https://themesbrand.com/symox/layouts/layouts-horizontal-dark.html -->

        <!-- https://www.chartjs.org/   https://vue-chartjs.org/guide/#browser   https://developer.mozilla.org/ru/docs/Web/HTML/Element/progress-->
</div>
</template>


<script>
import Circular from './Circular.vue';

export default {
  components: { Circular },

  data() {
    return {
       health: {},
      desserts: [
        { id:1,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1200,
          sales: 900,
          status: 10,
        },
        {
         id:2,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1200,
          sales: 1000,
          status: 60,
        },
        {
         id:3,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 200,
          sales: 100,
          status: 20,
        },
        {
          id:4,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1800,
          sales: 900,
          status: 90,
        },
        {
         id:5,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1200,
          sales: 900,
          status: 30,
        },
        {
          id:6,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 900,
          sales: 700,
          status: 100,
        },
        {
          id:7,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 700,
          sales: 500,
          status: 30,
        },
        {
         id:8,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1200,
          sales: 900,
          status: 70,
        },
        {
          id:9,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 3200,
          sales: 2900,
          status: 100,
        },
        {
         id:10,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1200,
          sales: 900,
          status: 20,
        },
      ],
    }

  },
  methods: {
    
        getStatus(){
          let statusArr = []
          statusArr = this.desserts.map(function(dessert) {
            return dessert.status;
            });
            // console.log(statusArr)
          return statusArr
      },
      //  getPricePercent(){
      //    let priceArr = this.getPrice()
      //    console.log(priceArr);
      //     let PricePercentArr = []
      //     // PricePercentArr = priceArr.map(function(item) {
      //     //   return item/100;
      //     //   });
      //     // console.log(priceArr.length)
      //     return priceArr.length
      // }
  },
  mounted(){
      this.getPrice()
  }
}
</script>

<style scoped>
  .table > :not(:first-child) {
    border-top: 0 solid #eff0f2;
  }
  .table{
      color: #6f7d86;
  }
  tbody, thead{
    text-align: center;
  }
  .card-body {
    background-color: #272727;
  }
  progress {
    height: 7px;
    width: 75px;
    border-radius: 20px;
    border: none;
  }
  progress::-moz-progress-bar {
    background-color: #33a186;
    border-radius: 20px;
  }

  progress::-webkit-progress-bar {
  background-color: #fff;
    border-radius: 20px;
  }
  progress::-webkit-progress-value {
    background-color: #33a186;
      border-radius: 20px;
  }
  .header{
    background-color: #18614f;
  }
</style>
