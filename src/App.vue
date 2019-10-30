<template>
  <div v-bind:style="{backgroundColor: backgroundColor}">
  <div class="container mx-auto p-4">
    <p class="font-serif text-center font-thin text-3xl">3D Wealth Visualizer</p>
    <div class="py-2">
      <hr />
    </div>
    <p class="font-serif text-center italic mb-4">Input your wealth to visualize it's physicality...</p>

    <table class="table-fixed w-full">
      <tbody>
        <tr class="table-odd">
          <td class="border px-4 py-2 font-bold">Text Input</td>
          <td class="border px-4 py-2">
            <div class="flex flex-row items-center" >
              <span class="mr-1 font-bold">$</span>
              <input
                type="number"
                v-model="textModel"
                class="w-full border border-blue-500 rounded"
              />
            </div>
          </td>
        </tr>
        <tr class="table-even">
          <td class="border px-4 py-2 w-1/4 font-bold">Range Input</td>
          <td class="border px-4 pt-2">
            <range-input v-model="rangeModel" @change="calculateFromRange"></range-input>
          </td>
        </tr>
        <tr class="table-odd">
          <td class="border px-4 py-2 font-bold">Current Value</td>
          <td class="border px-4 py-2 font-bold font-serif italic text-xl">${{ valueLogFormatted }}</td>
        </tr>
      </tbody>
    </table>
    <div class="relative w-full">
      <wealth-3d :value="valueLog" />
    </div>
    <app-footer />
  </div>
  </div>
</template>

<style scoped>
.table-odd {
  background-color: rgba(100, 100, 100, 0.1);
}
.table-even {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

<script>
import Range from "./components/range-input";
import Select from "./components/select-input";
import Wealth3d from "./components/wealth-3d";
import AppFooter from "./components/footer";
import * as interpolate from "color-interpolate";

export default {
  name: "app",
  components: {
    "range-input": Range,
    "select-input": Select,
    "wealth-3d": Wealth3d,
    "app-footer": AppFooter
  },
  data() {
    return {
      rangeModel: 50,
      textModel: 100,
      selectModel: 'AUD',
      valueLog: 0,
      currencies: ['AUD', 'USD', 'NZD'],
      backgroundColorMap: interpolate(['white', '#e9f4e9' ,'#bbf1bb']),
      backgroundColor: '#ff0000'
    };
  },
  watch: {
    textModel(newValue) {
      this.calculateFromText()
    }
  },
  computed: {
    valueLogFormatted: function() {
      return this.valueLog.toLocaleString();
    }
  },
  mounted: function() {
    this.calculateFromRange();
  },
  methods: {
    calculateFromRange: function() {
      this.valueLog = this.convertToLog(this.rangeModel);
      this.textModel = this.valueLog;
      this.setBackgroundColor();
    },
    calculateFromText: function() {
      this.valueLog = +this.textModel;
      this.rangeModel = this.convertFromLog(this.textModel);
      this.setBackgroundColor();
      console.log("calculateFromText", {
        valueLog: this.valueLog,
        rangeModel: this.rangeModel
      });
    },
    calculateFromCurrency: function() {
    },
    setBackgroundColor: function() {
      const val = this.rangeModel;
      this.backgroundColor = this.backgroundColorMap(val / 100);
    },
    convertFromLog: function(input) {
      const position = +input;
      // position will be between 0 and 100
      const minp = 0;
      const maxp = 100;
      // The result should be between 100 an 10000000
      const minv = Math.log(100);
      const maxv = Math.log(10000000000);
      // calculate adjustment factor
      const scale = (maxv - minv) / (maxp - minp);
      const val = (Math.log(position) - minv) / scale + minp;
      // position will be between 0 and 100
      const value = +val;
      return value;
    },
    convertToLog: function(input) {
      const position = +input;
      // position will be between 0 and 100
      const minp = 0;
      const maxp = 100;
      // The result should be between
      const minv = Math.log(100);
      const maxv = Math.log(10000000000);
      // calculate adjustment factor
      const scale = (maxv - minv) / (maxp - minp);

      const val = Math.exp(minv + scale * (position - minp));
      const value = +val.toPrecision(1);
      return value;
    }
  }
};
</script>

