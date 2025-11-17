<template>
  <div class="btns">
    <slot>
      <el-button class="back" type="primary" icon="ArrowLeft" @click="command">返回列表</el-button>
    </slot>
  </div>
</template>

<script setup>
const emits = defineEmits(['command'])
const command = () => {
  emits('command', 'list')
}
</script>

<style lang="scss" scoped>
.btns {
  // text-align: right;
  display: flex;
  position: relative;
  padding: 15px 20px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(91, 117, 162, 0.21);
}
</style>