<script setup>
const lists = [
  {
    title: "Today",
    component: resolveComponent("TabsToday"),
  },
  {
    title: "Week",
    component: "<div>Week</div>",
  },
  {
    title: "Month",
    component: "<div>Month</div>",
  },
  {
    title: "Year",
    component: "<div>Year</div>",
  },
];
let data = ref([
  16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8,
]);
let categories = {
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
  ], // Months of the year
};
let currentCategory = ref("today");

const options = computed(() => ({
  chart: {
    type: "line",
    animation: {
      enabled: false,
    },
  },
  legend: {
    enabled: false,
  },
  title: {
    text: "",
  },
  xAxis: {
    gridLineColor: "transparent",
    categories: categories[currentCategory.value],
  },
  yAxis: {
    gridLineColor: "transparent",
    title: {
      text: "",
    },
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "line",
      lineWidth: "4px",
      color: {
        linearGradient: {},
        stops: [
          [0, "rgba(252,176,69,1)"],
          [0.33, "rgba(253,29,29,1)"],
          [0.66, "rgba(131,58,180,1)"],
          [1, "rgba(29,217,83 ,1)"],
        ],
      },
      data: data.value,
    },
  ],
}));

const generateRandomData = (number = 7) => {
  let values = [];
  for (let i = 0; i < number + 1; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  data.value = values;
  return values;
};

const setCategory = (e) => {
  let v = e.target.innerText.toLowerCase();
  currentCategory.value = v;
  switch (v) {
    case "today":
      generateRandomData(23);
      break;
    case "week":
      generateRandomData(6);
      break;
    case "month":
      generateRandomData(30);
      break;
    case "year":
      generateRandomData(11);
      break;
    default:
      generateRandomData(7);
      break;
  }
};

onMounted(() => {
  generateRandomData(23);
});
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back John !</p>
        <h1>Dashboard</h1>
      </div>
      <div class="h-[36px] w-[120px] bg-neutral-200"></div>
    </header>
    <main class="grid gap-4">
      <!-- <div class="flex items-center gap-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="h-[36px] w-[120px] bg-neutral-200"
        ></div>
      </div> -->
      <!-- <section>
        <div class="h-[360px] w-full bg-neutral-200"></div>
      </section> -->
      <Tabs defaultValue="Today" @click="setCategory">
        <TabsList class="max-w-[400px]">
          <TabsTrigger :value="list.title" v-for="list in lists" :key="list">{{
            list.title
          }}</TabsTrigger>
        </TabsList>
        <TabsContent :value="list.title" v-for="list in lists" :key="list">
          <!-- <component :is="list.component" /> -->
          <highchart :options="options" />
        </TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="flex items-center gap-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="h-[260px] w-full bg-neutral-200"
        ></div>
      </div>
    </footer>
  </div>
</template>
