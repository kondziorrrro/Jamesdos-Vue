<template>
  <div :class="[`container-40`, className || ``]">
    <div class="label valign-text-middle worksans-normal-eerie-black-16px">{{ labelName }}</div>
    <div class="input">
      <div class="container-38">
        <p class="your valign-text-middle worksans-normal-suva-gray-14px">{{ yourNameNicknameOrEtc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container12",
  props: ["labelName", "yourNameNicknameOrEtc", "className"],
};
</script>

<style>
.container-40 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.69px;
  height: 71px;
  position: relative;
  width: 328px;
}

.label {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.input {
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

.container-38 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  opacity: 0.5;
  position: relative;
}

.your {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.container-40.container-41,
.container-40.container-43 {
  margin-top: 21px;
}

.container-40.container-42 {
  margin-top: -1px;
}
</style>
