<template>
  <div class="header">
    <div class="logo-content">
      <img class="logo" src="@/assets/images/u7.png" alt="" />
      <div class="title">作业风险AI督察机器人</div>
      <el-button v-if="!hiddenQa" type="primary" size="small" class="robot-chat" @click="handleHeaderClick('openAi')">
        <i class="iconfont icon-robot"></i> 问数
      </el-button>
      <!-- <div class="aniIcon" @click="handleHeaderClick('openAi')">
        <i class="iconfont icon-robot"></i>
      </div> -->
    </div>
    <div class="corners">
      <!-- <i class="iconfont icon-quanping1" @click="handleHeaderClick('screen')"></i> -->
      <el-icon :size="20" @click="handleHeaderClick('close')">
        <CloseBold />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['handleHeaderClick'])
const handleHeaderClick = (str) => {
  emits('handleHeaderClick', str)
}
const props = defineProps({
  hiddenQa: { default: false }
})
</script>

<style lang="scss" scoped>
.header {
  flex-shrink: 0;
  position: relative;
  font-size: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: linear-gradient( 180deg, #76b4f3, #e2effc);
  // background: linear-gradient( 180deg, #97c6f6, #fff);
  // background: linear-gradient(#97c6f6, #fff);
  background: linear-gradient( 180deg, rgba(33, 134, 235, 0.62), rgba(208, 229, 251, 0.62) 42px, #fff);

  .logo-content {
    display: flex;
    align-items: center;
    user-select: none;

    .logo {
      width: 30px;
    }

    .title {
      margin-left: 8px;
      // color: #2590ff;
      color: #000;
      font-size: 16px;
      letter-spacing: 1px;
    }

    .robot-chat {
      margin-left: 10px;
      .icon-robot {
        margin-right: 6px;
        font-size: 20px;
        // color: #409EFF;
      }
    }

    .aniIcon {
      margin-left: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #409eff;
      line-height: 30px;
      text-align: center;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      user-select: none;
      // animation: ani1 2s infinite;

      @keyframes ani1 {
        0% {
          transform: scale(1);
        }
        25% {
          transform: scale(1.15) translateY(-4px);
        }
        50% {
          transform: scale(1);
        }
        75% {
          transform: scale(1.15) translateY(-4px);
        }
        100% {
          transform: scale(1);
        }
      }

      > .icon-robot {
        color: #fff;
        font-size: 18px;
      }
    }

    .aniIcon:hover {
      animation: ani1 2s infinite;
    }
  }

  .corners {
    display: flex;
    align-items: center;

    i+i {
      margin-left: 6px;
    }

    >i {
      color: #707070;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }

    .icon-quanping1 {
      font-size: 16px;
      color: #707070;
    }
  }
}
</style>