<template>
  <div :class="[`heading-6-3`, className || ``]">
    <div class="wordpress valign-text-middle jamesdoscommuseomodernoblack-20">
      <span
        ><span class="span0-4 jamesdoscommuseomodernoblack-20">{{ spanText1 }}</span
        ><span class="span1-4 jamesdoscommuseomodernobold-20">{{ spanText2 }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading6",
  props: ["spanText1", "spanText2", "className"],
};
</script>

<style>
.heading-6-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 9px;
  padding: 0px 99.04px 0px 99.03px;
  position: relative;
}

.wordpress {
  align-self: stretch;
  color: var(--jamesdoscomnero);
  font-weight: 400;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.span0-4 {
  font-weight: 900;
}

.span1-4 {
  font-weight: 700;
}

.heading-6-3.heading-6-4 {
  margin-top: 13px;
  padding: 0px 100px;
}

.heading-6-3.heading-6-5 {
  margin-top: 17px;
  padding: 0px 100px;
}
</style>
