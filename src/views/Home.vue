<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter/>
  <CounterSquare></CounterSquare>
    <div class="buttons">
      <!-- <button @click="$store.commit('decrementCounter')">-</button> -->
      <button @click="$store.dispatch('decrementCounter')">-</button>
      <button @click="$store.dispatch('incrementCounter')">+</button>
    </div>
   <colorCode></colorCode>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '../components/Counter.vue';
import CounterSquare from '../components/CounterSquare.vue';
import colorCode from '../components/colorCode.vue';
export default {
  name: 'Home',
  components: {
    Counter,CounterSquare,colorCode,
  },
  data(){
    return{
      counter:'',
      }
  },
 
  methods:{
  
  }
}
</script>
<style>
div{
  margin-bottom: 10px;
}
.counter {
  font-size:80px;
}
.buttons button{
font-size: 40px;
width: 100px;
margin: 0 10px;
}
</style>