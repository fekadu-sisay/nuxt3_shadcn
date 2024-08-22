<script setup>
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
const props = defineProps(["card"]);
const card = props.card;
</script>

<template>
  <Card v-if="props.card">
    <CardHeader class="px-4 pb-2 pt-4">
      <div class="flex items-center justify-between">
        <p>{{ card.title }}</p>
        <Badge class="bg-green-400">+{{ card.progression }}%</Badge>
      </div>
    </CardHeader>
    <CardContent class="flex items-center justify-end border-b px-4 pb-2 pt-0">
      <div class="text-[48px] font-[800]">
        <span class="text-neutral-300">$</span>
        <span class="text-black">{{ card.amount }}</span>
      </div>
    </CardContent>
    <CardFooter class="flex items-center justify-between gap-2 px-2 py-2">
      <div
        class="flex h-8 w-8 items-center justify-center rounded bg-neutral-100"
      >
        <Icon size="20" :name="card.icon" color="black" />
      </div>
      <p class="grow text-xs">{{ card.description }}</p>
      <Button variant="outline">{{ card.label }}</Button>
    </CardFooter>
  </Card>
</template>
