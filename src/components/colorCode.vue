<template>
  <div>
    <input type="text" placeholder="Enter the color code" v-model="colorCode" />
  </div>
</template>
<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        console.log(newValue);
        return this.$store.dispatch("changeColor", newValue);
      },
    },
  },
};
</script>
