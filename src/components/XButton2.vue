<template>
  <div :class="[`button-2`, className || ``]">
    <div class="horizontal-divider-container">
      <div class="horizontal-divider"></div>
      <div class="horizontal-divider"></div>
      <div class="horizontal-divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XButton2",
  props: ["className"],
};
</script>

<style>
.button-2 {
  height: 18px;
  left: 334px;
  position: absolute;
  top: 24px;
  width: 24px;
}

.horizontal-divider-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 18px;
}

.horizontal-divider {
  background-color: var(--jamesdoscomnero);
  border-radius: 2px;
  height: 2px;
  width: 24px;
}

.button-2.button-3 {
  left: 712px;
}
</style>
