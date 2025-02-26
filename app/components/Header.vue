<template>
  <div class="header">

    <div class="board">
      <div class="left">icon</div>
      <div class="text-3xl">BoSton Repsas</div>
      <div class="icon-nav">
        <div class="i-ep:search">11</div>
        <div class="i-ep:sell"></div>
        <div class="i-ep:avatar"></div>
        <DarkToggle />
      </div>
    </div>
    <div class="nav">
      <div class="nav-item">
        <div class="nav-item-icon">
          <div class="i-ep:home"></div>
        </div>
        <div class="nav-item-text">NEW ARRIVAL</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon">
          <div class="i-ep:home"></div>
        </div>
        <div class="nav-item-text">OTHING9拖拽至此上传</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon">
          <div class="i-ep:home"></div>
        </div>
        <div class="nav-item-text">EYOND TRAVEL</div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.header {
  color: black;

  .board {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;

    .left {
      justify-self: start;
    }

    .center {
      justify-self: center;
    }

    .icon-nav {
      justify-self: end;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  width: 100%;
  height: 70px;
  background-color: yellow;

  .nav {
    display: flex;
    justify-content: center;
    .nav-item{
      text-align: center;
      padding-right: 10px;
    
    }
  }
}
</style>
