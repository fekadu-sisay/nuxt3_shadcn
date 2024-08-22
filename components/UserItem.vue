<script setup>
const name = ref("Don John");
const description = ref("CTO & Youtuber");
</script>

<template>
  <div
    class="m-4 flex cursor-pointer items-center justify-center gap-2 rounded border p-2 transition hover:bg-neutral-50"
  >
    <div
      class="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 font-bold text-white"
    >
      {{ name[0] }}
    </div>
    <div>
      <p class="leading-1 m-0 text-sm font-bold text-black">{{ name }}</p>
      <p class="m-0">{{ description }}</p>
    </div>
  </div>
</template>
