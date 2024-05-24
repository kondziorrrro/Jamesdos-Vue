<template>
  <div :class="[`container-32`, className || ``]">
    <div class="paragraph-2 worksans-normal-black-14px">
      <div class="x2015-2018-the-i-tpro valign-text-middle">
        2015-2018<br />The IT profession<br />TEB Edukacja College
      </div>
      <div class="x2017-2017-microsoft valign-text-middle">
        2017-2017<br />Microsoft HQ Warsaw Training: Cloud <br />Technology with Certification.
      </div>
    </div>
    <div class="container-33">
      <div class="x2019-2019-t-matic-gr valign-text-middle worksans-normal-black-14px">
        2019-2019<br />T-Matic Group Computer Plus Certified Adobe <br />Photoshop CC Graphic Design Course.
      </div>
    </div>
    <div class="container-34">
      <div class="schoolbutwhocaresright valign-text-middle worksans-normal-black-14px">
        School, but who cares, right.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container11",
  props: ["className"],
};
</script>

<style>
.container-32 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 19.2px;
  margin-bottom: -1.01px;
  position: relative;
  width: 100%;
}

.paragraph-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 19.58px;
  padding: 0px 0px 0.79px;
  position: relative;
  width: 100%;
}

.x2015-2018-the-i-tpro {
  letter-spacing: 0;
  line-height: 19.6px;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.x2017-2017-microsoft {
  letter-spacing: 0;
  line-height: 19.6px;
  position: relative;
  width: fit-content;
}

.container-33 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 0px 0.79px;
  position: relative;
  width: 100%;
}

.x2019-2019-t-matic-gr,
.schoolbutwhocaresright {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 19.6px;
  margin-top: -1px;
  position: relative;
}

.container-34 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 23.59px 0px 0.8px;
  position: relative;
  width: 100%;
}

.container-32.container-35 {
  align-self: unset;
  flex: unset;
  margin-bottom: unset;
  width: unset;
}
</style>
