<template>
  <div ref="containerRef" class="virtual-list-container" @scroll="handleScroll">
    <div class="placeholder" :style="{ height: totalHeight + 'px' }"></div>
    <div :class="['content', contentClass]" :style="{ transform: `translateY(${offsetY}px)` }" >
      <slot name="item" :realList="realList"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { throttle } from 'lodash-es'

const { list, itemHeight } = defineProps(['list', 'itemHeight', 'contentClass']);
const containerRef = ref(null);
const containerHeight = ref(0);
const scrollTop = ref(0);
const buffer = 2

const totalHeight = computed(() => {
  return list.length * itemHeight;
})

const startIndex = computed(() => {
  return Math.max(0, Math.floor(scrollTop.value / itemHeight) - buffer)
})
const endIndex = computed(() => {
  return Math.min(list.length, startIndex.value + Math.ceil(containerHeight.value / itemHeight) + buffer * 2)
})

const realList = computed(() => {
  return list.slice(startIndex.value, endIndex.value)
})

const offsetY = computed(() => {
  return startIndex.value * itemHeight;
})

let rafId = null
const handleScroll = throttle((e) => {
  if (e.target instanceof HTMLElement) {
    rafId = requestAnimationFrame(() => {
      scrollTop.value = e.target.scrollTop
    })
  }
}, 16)

onMounted(() => {
  containerRef.value && (containerHeight.value = containerRef.value.clientHeight)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})

</script>

<style scoped lang="scss">
.virtual-list-container {
  position: relative;
  // height: 600px;
  height: 100%;
  overflow-y: auto;

  .content {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;

    transform: translateY(0);
    will-change: transform;
    backface-visibility: hidden;
  }
}
</style>