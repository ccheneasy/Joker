<template>
  <div class="container">
    LOgin
    <div class="verCode">{{ code }}</div>
    <el-button type="primary" size="small">刷新</el-button>
    <el-button type="primary" size="small" @click="handleLogin">点击</el-button>
    <el-button type="primary" size="small" @click="handleLoginOut">清除</el-button>
    <el-button type="primary" size="small" @click="handleSetTheme">切换</el-button>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { useUserStore } from '@/store/modules/user'
  import { useRouter } from 'vue-router';
  import { getLoginCodeApi } from '@/api/login'
  import { ElMessage } from 'element-plus'
  import { useTheme } from '@/hooks/useTheme'
  const userStore = useUserStore()
  // useRouter一定要放在setup方法内的顶层，否则作用域改变useRouter()执行返回的是undefined。
  const router = useRouter()
  const code = ref('')
  const handleLogin = async () => {
    await userStore.login({ username: 'admin', password: '123', code: code.value })
    await userStore.getInfo()
    router.replace({
      path: '/'
    })
  }
  const handleLoginOut = () => {
    const userStore = useUserStore()
    userStore.logout()
  }
  const getVerificationCode = async () => {
    try {
      const data =  await getLoginCodeApi()
      code.value = data.data.VerCode
    } catch (error){
      ElMessage(error)
    }
  }

  const handleSetTheme = () => {
    const { setTheme } = useTheme()
    setTheme('dark')
  }
  onMounted(() => {
    getVerificationCode()
  })
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    .verCode {
      width: 160px;
      height: 90px;
      text-align: center;
      line-height: 90px;
    }
  }
</style>
