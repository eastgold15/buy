<script lang="ts" setup>
interface Props {
  icon: string
  text: string
}
const props = withDefaults(defineProps<Props>(), {
  icon: 'i-ep:dish-dot',
  text: '餐具',
})

const showModal = ref(false)

function handleMouseEnter() {
  showModal.value = true
}

function handleMouseLeave() {
  showModal.value = false
}
</script>

<template>
  <div>
    <div class="nav-item" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="nav-item-icon">
        <div :class="props.icon" />
        ssssss
      </div>
      <div class="nav-item-text">
        {{ text }}
      </div>
      <div v-if="showModal" class="nav-item-modal">
        更多信息
      </div>
    </div>
  </div>
</template>

<style>
.nav-item {
  position: relative;
  padding: 10px;
  cursor: pointer;
}

.nav-item-more {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-item:hover .nav-item-more {
  display: block;
}
</style>
