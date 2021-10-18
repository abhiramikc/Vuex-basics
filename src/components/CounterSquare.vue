<template>
      <div>
      {{$store.state.counter}} <sup>2</sup> = {{ $store.getters.countersquare}}
    </div>
</template>
<script>
export default {
    
}
</script>