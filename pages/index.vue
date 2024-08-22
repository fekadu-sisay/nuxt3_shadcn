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

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 84.44,
    label: "View sales",
    description: "Sales for March 2024",
    icon: "solar:ticket-sale-outline",
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View refunds",
    description: "Refunds since beginning of year",
    icon: "heroicons-outline:receipt-refund",
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 899.99,
    label: "View Payouts",
    description: "Payouts for this week",
    icon: "tabler:zoom-money",
  },
];

onMounted(() => {
  generateRandomData(24);
});
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back John !</p>
        <h1>Dashboard</h1>
      </div>
      <ProductNew />
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
          <Chart
            v-if="data.length > 0"
            :currentCategory="currentCategory"
            :data="data"
          />
        </TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="grid gap-4 lg:grid-cols-3">
        <Card v-for="(item, index) in cards" :key="index" :card="item" />
      </div>
    </footer>
  </div>
</template>
