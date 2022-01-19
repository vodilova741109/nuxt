<template>
  <div class="text-ridht">
    <div class="card-body">
      <div class="d-flex flex-wrap align-items-center">
        <h5 class="card-title mb-0">Sales By Category</h5>
        <div class="ms-auto">      
        </div>
      </div>

      <div class="text-center mt-4">
          <svg
            width="500px"
            height="300px"
            viewBox="0 0 42 42"
            class="donut"
            aria-labelledby="beers-title beers-desc"
            role="img"
          >
          <title id="beers-title">Beers in My Cellar</title>
          <desc id="beers-desc">            
          </desc>
          <circle
            class="donut-hole"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="#fff"
            role="presentation"
          ></circle>
          
          <circle
            class="donut-ring"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="rgba(var(--bs-secondary-rgb)"
            stroke-width="3"
            role="presentation"
          ></circle>
          
          <circle
            class="donut-segment"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="rgba(var(--bs-primary-rgb)"
            stroke-width="3"
            stroke-dasharray="40 60"
            stroke-dashoffset="25"
            aria-labelledby="donut-segment-1-title donut-segment-1-desc"
          >            
          </circle>
          <circle
            class="donut-segment"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="rgba(25,135,84)"
            stroke-width="3"
            stroke-dasharray="20 80"
            stroke-dashoffset="85"
          >           
          </circle>
          <circle
            class="donut-segment"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="rgba(var(--bs-info-rgb)"
            stroke-width="3"
            stroke-dasharray="30 70"
            stroke-dashoffset="60"          >          
          </circle>

          <circle
            class="donut-segment"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="#cd88b0"
            stroke-width="3"
            stroke-dasharray="30 70"
            stroke-dashoffset="35"          >          
          </circle>
          <!-- unused 10% -->
          <g class="chart-text">
            <text x="50%" y="50%" class="chart-number">10</text>
            <text x="50%" y="50%" class="chart-label">Category</text>
          </g>
        </svg>
      </div>

      <div class="row mt-4"  v-for="item in desserts" :key="item.name">
        <div class="col">
          <div class="px-2">
            <div class=" d-flex justify-content-between  align-items-center  mt-sm-0 mt-2" >
              <div class="d-flex">
                <i v-bind:style="{color: item.stroke}" class="mdi mdi-circle font-size-10 mt-1 "></i>
                <div class="flex-1 ms-2">
                  <p class="mb-0 text-truncate">{{ item.name }}</p>
                </div>
              </div>
              <div>
                <span class="fw-bold">{{ item.dashoffset }}%</span>
              </div>
            </div>           
          </div>
        </div>      
      </div>
    </div>
  
  </div>
  <!-- <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="90"
      :size="100"
      :width="15"
      :value="value"
      color="red"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="180"
      :size="100"
      :width="15"
      :value="value"
      color="pink"
    >
      {{ value }}
    </v-progress-circular>
  </div> -->
</template>

<script>
export default {
  data() {
  return {
      desserts: [        
        { 
          id:1, 
          name: 'Watch OS 8',
          stroke:"rgba(var(--bs-info-rgb)",            
          dashoffset:"30",
        },
        {
          id:2,
          name: 'Iphone 12',
          stroke:"#cd88b0",            
          dashoffset:"35",
         
        },
        {
          id:3,
          name: 'Horror Book',
          stroke:"rgba(var(--bs-primary-rgb)",            
          dashoffset:"10",
         
        },
        {
          id:4,
          name: 'Smart 4k TV',
          stroke:"rgba(25,135,84)",            
          dashoffset:"20",        
        },           
        
      ],    
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}

body {
  font: 16px/1.4em 'Montserrat', Arial, sans-serif;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.chart-text {
  /*font: 16px/1.4em "Montserrat", Arial, sans-serif;*/
  fill: #000;
  -moz-transform: translateY(0.25em);
  -ms-transform: translateY(0.25em);
  -webkit-transform: translateY(0.25em);
  transform: translateY(0.25em);
}
.chart-number {
  font-size: 0.6em;
  line-height: 1;
  text-anchor: middle;
  -moz-transform: translateY(-0.25em);
  -ms-transform: translateY(-0.25em);
  -webkit-transform: translateY(-0.25em);
  transform: translateY(-0.25em);
}
.chart-label {
  font-size: 0.2em;
  text-transform: uppercase;
  text-anchor: middle;
  -moz-transform: translateY(0.7em);
  -ms-transform: translateY(0.7em);
  -webkit-transform: translateY(0.7em);
  transform: translateY(0.7em);
}
figure {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: -15px;
  margin-right: -15px;
}
@media (min-width: 768px) {
  figure {
    flex-direction: row;
  }
}
.figure-content,
.figure-key {
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  align-self: center;
}
.figure-content svg {
  height: auto;
}
.figure-key {
  min-width: calc(8 / 12);
}
.figure-key [class*='shape-'] {
  margin-right: 6px;
}
.figure-key-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.figure-key-list li {
  margin: 0 0 8px;
  padding: 0;
}
.shape-circle {
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>

