<template>
  <div class="container">
    <img class="icon-image" src="../../assets//login//beauty.png" alt="">
    <p class="title">Sign in to Orange</p>
    <div class="main-form">
      <el-form ref="FormRef" :model="form" label-width="auto" label-position="top" :hide-required-asterisk="true">
        <el-form-item label="Username or email address" prop="username" :rules="[{ required: true, message: 'Username or email address is required' }]">
          <el-input v-model="form.username" placeholder="admin" clearable/>
        </el-form-item>
        <el-form-item prop="password" :rules="[{ required: true, message: 'Password is required' }]">
          <template #label>
            <div style="position: relative;">
              <span>Password</span>
              <el-link type="primary" :underline="false" class="forget-password">Forgot Password</el-link>
            </div>
          </template>
          <el-input v-model="form.password" type="password" show-password placeholder="123"/>
        </el-form-item>
        <el-form-item label="Code">
          <el-input v-model="form.code" style="width: calc(100% - 90px)"/>
          <span class="ver-code" @click="handleRefreshCode">{{ codeNumber }}</span>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" style="width: 100%;" @click="handleLogin">Sign in</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { useUserStore } from '@/store/modules/user'
  import { getAccount, getRefreshCode } from '@/api/login/index'
  import { useRouter } from 'vue-router'

  const FormRef = ref()
  const codeNumber = ref('')
  const form = reactive({
    username: '',
    password: '',
    code: ''
  })
  onMounted(() => {
    getAccountInfo()
  })

  const handleRefreshCode = () => {
    getRefreshCode().then(res => {
      codeNumber.value = res.data.verCode
    })
  }

  const getAccountInfo = () => {
    getAccount().then(res => {
      if (res.code === 0){
        codeNumber.value = res.data.verCode
        form.username = res.data.username
        form.password = res.data.password
        form.code = res.data.verCode
      }
    })
  }

  const UserStore = useUserStore()
  const router = useRouter()
  const handleLogin = () => {
    FormRef.value.validate( async(valid, fields) => {
      if (valid) {
        await UserStore.login(form)
        await UserStore.getInfo()
        router.push('/')
      }
    })
  }

</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-image {
      width: 80px;
      margin-top: 60px;
    }
    .title {
      font-size: 24px;
    }
    .main-form {
      width: 300px;
      padding: 20px;
      border: 1px solid;
      border-color: rgba(209, 217, 224, 0.7);
      background-color: rgb(246, 248, 250);
      border-radius: 6px;
    }
    .ver-code {
      margin-left: 10px;
      border: 1px solid rgba(209, 217, 224, 0.7);
      border-radius: 4px;
      width: 80px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
    }
    .forget-password {
      position: absolute;
      right: 0;
    }
  }
</style>
