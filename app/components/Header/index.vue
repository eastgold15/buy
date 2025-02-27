<script lang="ts">
import { HeaderNavItem } from '#build/components'

const navitems = ref([
  { icon: 'i-ep:search', text: 'NEW ARRIVAL' },
  { icon: 'i-ep:search', text: 'OTHING' },
  { icon: 'i-ep:search', text: 'EYOND TRAVEL' },
])
</script>

<template>
  <div class="header">
    <div class="board">
      <div class="left">
        icon
      </div>
      <h1 class="text-3xl">
        BoSton Repsas
      </h1>
      <nav class="icon-nav">
        <div class="i-ep:search">
          11
        </div>
        <div class="i-ep:sell" />
        <div class="i-ep:avatar" />
        <DarkToggle />
        <GitHubLink />
      </nav>
    </div>

    <div class="nav">
      <HeaderNavItem />
      <span v-for="(item, index) in navitems" :key="index">
        <HeaderNavItem :icon="item.icon" :text="item.text" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  color: white;
  background-color: #0a0a0a;
  width: 100%;
  height: 70px;

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

  .nav {
    display: flex;
    justify-content: center;

    .nav-item {
      text-align: center;
      padding-right: 10px;
    }
  }
}
</style>
