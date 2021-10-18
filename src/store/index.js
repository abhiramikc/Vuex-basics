import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    counter:0,
    colorCode: 'red',
  },
  mutations: {
    incrementCounter(state,random)
    {
      console.log("random number",random);
      state.counter+=random;
    },
    decrementCounter(state,randomnum)
    {
      state.counter-=randomnum;
    },
    colorChange(state,random)
    {
      console.log("colorChange");
      state.colorCode=random;
     }
  },
  actions: {
    incrementCounter({commit})
    {
      console.log('incrementCounter inside actions');
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response=>{
        console.log('response',response);
        commit('incrementCounter', response.data);
      })
    },
    decrementCounter({commit})
    {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response=>{
        console.log('response',response);
        commit('decrementCounter', response.data);
      })
    },
    changeColor({commit},newv)
    {
      commit('colorChange',newv)
    },
  },
  getters:{
    countersquare(state)
    { 
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
