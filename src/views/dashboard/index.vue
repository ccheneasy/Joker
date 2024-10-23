<template>
  <div class="container">
    仪表盘首页
    <el-button type="primary" size="small" @click="handleLoginOut">清除</el-button>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { useUserStore } from '@/store/modules/user'
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const handleLoginOut = async () => {
    const userStore = useUserStore()
    await userStore.logout()
    router.replace({
      path: '/theme'
    })
  }
  
</script>

<style lang="scss" scoped>
  .container {
    
  }
</style>