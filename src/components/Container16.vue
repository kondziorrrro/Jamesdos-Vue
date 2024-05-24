<template>
  <div :class="[`container-153`, className || ``]">
    <div class="label-5 valign-text-middle worksans-normal-eerie-black-16px">{{ labelName }}</div>
    <div class="input-3">
      <div class="container-152">
        <p class="your-3 valign-text-middle worksans-normal-suva-gray-14px">{{ yourNameNicknameOrEtc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container16",
  props: ["labelName", "yourNameNicknameOrEtc", "className"],
};
</script>

<style>
.container-153 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.69px;
  height: 71px;
  position: relative;
  width: 494px;
}

.label-5 {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.input-3 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--jamesdoscomseashell);
  display: flex;
  height: 48px;
  justify-content: center;
  margin-bottom: -0.6px;
  padding: 16px;
  position: relative;
  width: 100%;
}

.container-152 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  opacity: 0.5;
  position: relative;
}

.your-3 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.container-153.container-154 {
  margin-top: 21px;
}
</style>
