<template>
  <div class="header-container">
    <div class="title"></div>
    <div class="menu">
      <div
        v-for="item in menu"
        :class="['item', { active: item.mainRoute === local.mainRoute }]"
        @click="handleClick(item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

const list = [
  {
    label: "督查概览",
    name: "overview",
    mainRoute: "overview"
  },
  {
    label: "作业安全督查",
    name: "operations-safety",
    mainRoute: "operations-safety",
    hidden: true
  },
  {
    label: "人员负荷预控",
    name: "people-burden",
    mainRoute: "people-burden",
    hidden: true
  },
  {
    label: "特殊作业预控",
    name: "special-operation",
    mainRoute: "special-operation"
  },
  {
    label: "定时任务",
    name: "timing-task",
    mainRoute: "timing-task"
  }
]

const menu = computed(_ => list.filter(it => !it.hidden))
const route = useRoute()
const local = computed(_ => {
  const map = new Map(list.map(it => [it.name, it]))
  return map.get(route.name)
})
const router = useRouter()
const handleClick = item => {
  if (local.name === item.name) return
  router.hasRoute(item.name) && router.push({ name: item.name })
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 72px;
  flex-shrink: 0;
  padding: 12px 0;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #e4e7ed;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

  .title {
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #1d2129;
    font-weight: 600;
    user-select: none;
    letter-spacing: 0.1em;
  }

  .menu {
    height: 100%;
    display: flex;
    align-items: center;

    .item {
      width: 120px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1d2129;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      transition: all 0.4s;
    }

    .item + .item {
      margin-left: 10px;
    }

    .active {
      background-color: #1664ff;
      color: #fff;
    }
  }
}
</style>
