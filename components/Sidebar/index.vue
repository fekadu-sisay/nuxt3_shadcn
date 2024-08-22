<script setup>
const open = ref(true);
</script>

<template>
  <div>
    <div
      class="z-50 flex h-full w-full items-center justify-between p-4 lg:hidden"
    >
      <Logo />
      <Icon
        class="left-2 top-2 z-50 cursor-pointer"
        size="30"
        name="iconamoon:menu-burger-horizontal"
        @click="open = true"
      />
      <div
        v-if="open"
        class="fixed left-0 top-0 z-[999] h-full h-screen w-full bg-white"
      >
        <Icon
          class="absolute right-4 top-4 z-50 cursor-pointer"
          size="30"
          name="material-symbols:close"
          @click="open = false"
        />
        <SidebarMenu />
      </div>
    </div>
    <div
      class="flex hidden h-screen w-[250px] flex-col justify-between border-r lg:flex"
    >
      <SidebarMenu />
      <div>
        <UserItem />
      </div>
    </div>
  </div>
</template>
