<template>
  <div :class="[`heading-3-3`, className || ``]">
    <div class="perpetually-contemplative-individual valign-text-middle jamesdoscommuseomodernoblack-33">
      <span
        ><span class="span0-2 jamesdoscommuseomodernoblack-33">Perpetually <br />contemplative<br /> </span
        ><span class="span1-2 jamesdoscommuseomodernoblack-33">INDIVIDUAL</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading3",
  props: ["className"],
};
</script>

<style>
.heading-3-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.perpetually-contemplative-individual {
  align-self: stretch;
  color: transparent;
  font-weight: 900;
  line-height: 39.6px;
  margin-top: -1px;
  position: relative;
}

.span0-2 {
  color: var(--jamesdoscomnero);
}

.span1-2 {
  color: var(--jamesdoscomwoodsmoke);
}

.heading-3-3.heading-3-4 {
  align-self: unset;
  flex: unset;
  width: unset;
}
</style>
