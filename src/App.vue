<template>
  <div class="container mx-auto p-4">
    <range-input v-model="value"></range-input>
    <p>Wealth Visualisation</p>

    <h1>Value: ${{ valueLog }}</h1>
  </div>
</template>

<script>
import Range from "./components/range-input.vue";

export default {
  name: "app",
  components: {
    'range-input': Range
  },
  data() {
    return {
      value: 50
    };
  },
  computed: {
    valueLog: function() {
      const position = this.value;
      // position will be between 0 and 100
      const minp = 0;
      const maxp = 100;

      // The result should be between 100 an 10000000
      const minv = Math.log(100);
      const maxv = Math.log(100000000000000);

      // calculate adjustment factor
      const scale = (maxv - minv) / (maxp - minp);

      const val = Math.exp(minv + scale * (position - minp));
      return (+val.toPrecision(2)).toLocaleString();
    }
  }
};
</script>

