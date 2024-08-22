<script setup>
import { ref, computed, onMounted } from "vue";

let props = defineProps(["currentCategory", "data"]);
let categories = ref({
  today: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ],
  week: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  year: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  month: [], // This will be generated dynamically
});

let options = computed(() => ({
  chart: {
    type: "line",
    animation: {
      enabled: false,
    },
  },
  title: {
    text: "",
  },
  xAxis: {
    gridLineColor: "transparent",
    categories: categories.value[props.currentCategory],
  },
  yAxis: {
    gridLineColor: "transparent",
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      name: "line",
      lineWidth: "4px",
      color: {
        linearGradient: { y1: 0, y2: 0, y3: 0, y4: 0 },
        stops: [
          [0, "rgba(252,176,69,1)"],
          [0.33, "rgba(253,29,29,1)"],
          [0.66, "rgba(131,58,180,1)"],
          [1, "rgba(29,217,93,1)"],
        ],
      },
      data: props.data,
    },
  ],
}));
</script>

<template>
  <div class="rounded-lg border p-4">
    <highchart v-if="data.length > 0" :options="options" />
  </div>
</template>
