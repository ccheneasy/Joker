<template>
  <div class="typhoon-container">
    <Header />
    <div class="content">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['typhoon-list']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Header from "./header.vue"
</script>

<style lang="scss" scoped>
.typhoon-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color: #eeeeee;
  background-color: #f4f6fc;

  .content {
    flex: 1;
    overflow: hidden;
    padding: 10px;
    font-size: 14px;
  }
}
</style>
