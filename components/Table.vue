<template>
<div>
<Spark :value="getPrice()"/>  
<!-- <Circular :value="getStatus()"/>   -->
    <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">No</th>
              <th class="text-left">Product's Name</th>
              <th class="text-left">Variant</th>
               <th class="text-left">Type</th>
              <th class="text-left">Stock</th>
              <th class="text-left">Price</th>
              <th class="text-left">Sales</th>
              <th class="text-left">Status</th>             
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td class="text-left">{{ item.id }}</td>              
              <td class="text-left">{{ item.name }}</td>
              <td class="text-left">{{ item.variant}}</td>
              <td class="text-left">{{ item.type }}</td>
              <td class="text-left">{{ item.stock}}</td>
              <td class="text-left">{{ item.price }}$ </td>
              <td class="text-left"><progress v-bind:value='item.status' max="100"></progress></td>
              <td class="text-left">{{ item.status}}</td>
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
          sales: 1500,
          status: 30,
        },
        {
         id:3,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 200,
          sales: 300,
          status: 70,
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
          status: 50,
        },
        {
          id:6,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 200,
          sales: 900,
          status: 100,
        },
        {
          id:7,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 700,
          sales: 200,
          status: 50,
        },
        {
         id:8,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1200,
          sales: 900,
          status: 30,
        },
        {
          id:9,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 3200,
          sales: 900,
          status: 50,
        },
        {
         id:10,
          name: 'Frozen Yogurt',
          variant: 'Gray',
          type: 'Electronic',
          stock: 1.564,
          price: 1200,
          sales: 900,
          status: 50,
        },
      ],    
    }
     
  },
  methods: {
      getPrice(){
          let priceArr = []
          priceArr = this.desserts.map(function(dessert) {
            return dessert.price;
            });       
          return priceArr
      },
        getStatus(){
          let statusArr = []
          statusArr = this.desserts.map(function(dessert) {
            return dessert.status;
            }); 
            console.log(statusArr)      
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
  progress::-webkit-progress-bar, progress::-moz-progress-bar, progress::-webkit-progress-value {
    background-color: #33a186;   
    border-radius: 20px;
  }
</style>
