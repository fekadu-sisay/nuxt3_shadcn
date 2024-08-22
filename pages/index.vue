<script setup>
let data = ref([]);
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

let currentCategory = ref("today");

const generateRandomData = (number = 7) => {
  let values = [];
  for (let i = 0; i < number; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  data.value = values;
};

const setCategory = (e) => {
  let v = e.target.innerText.toLowerCase();
  currentCategory.value = v;
  switch (v) {
    case "today":
      generateRandomData(24);
      break;
    case "week":
      generateRandomData(7);
      break;
    case "month":
      generateRandomData(31);
      break;
    case "year":
      generateRandomData(12);
      break;
  }
};

onMounted(() => {
  generateRandomData(24); // Initially generate data for "today"
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
      <Tabs defaultValue="Today">
        <TabsList class="max-w-[400px]" @click="setCategory">
          <TabsTrigger
            v-for="list in lists"
            :key="list.title"
            :value="list.title"
          >
            {{ list.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="list in lists"
          :key="list.title"
          :value="list.title"
        >
          <Chart :currentCategory="currentCategory" :data="data" />
        </TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="flex items-center gap-4">
        <div
          v-for="item in 3"
          :key="item"
          class="h-[260px] w-full bg-neutral-200"
        ></div>
      </div>
    </footer>
  </div>
</template>
