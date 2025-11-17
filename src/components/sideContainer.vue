<template>
  <div class="side-container">
    <div class="vessel">
      <slot name="header"></slot>
      <div class="main">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .vessel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #303133;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    // background: linear-gradient( 180deg, rgba(33, 134, 235, 0.62), rgba(208, 229, 251, 0.62) 7.617%, #fff 14.146%);

    .main {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>