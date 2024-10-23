<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useWatermark } from "@/hooks/useWatermark"

const { setWatermark, clearWatermark } = useWatermark()

const classes = ref({
  showGreyMode: true,
  showColorWeakness: true
})

/** 开启或关闭系统水印 */
setWatermark('测试项目')
// clearWatermark()


</script>

<template>
  <div :class="classes">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.showGreyMode {
  filter: grayscale(1);
}

.showColorWeakness {
  filter: invert(0.8);
}
</style>
