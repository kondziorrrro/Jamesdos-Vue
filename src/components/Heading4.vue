<template>
  <div class="heading-4-4">
    <div class="education valign-text-middle jamesdoscommuseomodernoblack-28">{{ education }}</div>
  </div>
</template>

<script>
export default {
  name: "Heading4",
  props: ["education"],
};
</script>

<style>
.heading-4-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 0px 0.79px;
  position: relative;
  width: 100%;
}

.education,
.experience {
  align-self: stretch;
  color: var(--jamesdoscomblack);
  font-weight: 900;
  line-height: 33.6px;
  margin-top: -1px;
  position: relative;
}
</style>
