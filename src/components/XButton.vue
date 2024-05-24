<template>
  <div class="button"><div class="submit valign-text-middle worksans-normal-white-16px">Submit</div></div>
</template>

<script>
export default {
  name: "XButton",
};
</script>

<style>
.button,
.button-1 {
  align-items: center;
  background-color: var(--jamesdoscomamethyst);
  border-radius: 999px;
  display: inline-flex;
  justify-content: center;
  margin-top: 22px;
  max-width: 328px;
  overflow: hidden;
  padding: 14px 36px;
  position: relative;
}

.submit,
.submit-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
