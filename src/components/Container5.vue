<template>
  <div class="container-73">
    <div class="flex-col-8">
      <div class="overlap-group-4">
        <div class="sodo-youlike-mystuff valign-text-middle jamesdoscommuseomodernoblack-72">
          SO DO <br />YOU LIKE <br />MY STUFF?
        </div>
        <div class="uwu-mk38j77l-xnfg-kjwvpng-1"></div>
      </div>
      <div class="container-74">
        <div class="ifyourelookingfo-1 valign-text-middle worksans-normal-eerie-black-16px-2">
          If you&#39;re looking for a website at a bargain <br />price, SEO services, or custom AI images, <br />feel free to reach out to me. I&#39;ll be more <br />than happy to assist you professionally. <br />Contact me now to discuss your project!
        </div>
      </div>
    </div>
    <div class="container-75">
      <div class="form-1">
        <div class="flex-col-9">
          <container6
            :labelName="container61Props.labelName"
            :yourNameNicknameOrEtc="container61Props.yourNameNicknameOrEtc"
          />
          <container6
            :labelName="container62Props.labelName"
            :yourNameNicknameOrEtc="container62Props.yourNameNicknameOrEtc"
            :className="container62Props.className"
          />
          <div class="container-76">
            <div class="label-message-2 valign-text-middle worksans-normal-eerie-black-16px">Message*</div>
            <div class="textarea-2"></div>
          </div>
          <div class="button-4"><div class="submit-2 valign-text-middle worksans-normal-white-16px">Submit</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Container6 from "./Container6";
export default {
  name: "Container5",
  components: {
    Container6,
  },
  props: ["container61Props", "container62Props"],
};
</script>

<style>
.container-73 {
  height: 682px;
  max-width: 1224px;
  position: relative;
  width: 1224px;
}

.flex-col-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 23px;
  left: 0;
  min-height: 395px;
  position: absolute;
  top: 157px;
  width: 470px;
}

.overlap-group-4 {
  height: 259px;
  position: relative;
  width: 470px;
}

.sodo-youlike-mystuff {
  color: var(--jamesdoscomwoodsmoke);
  font-weight: 900;
  height: 260px;
  left: 0;
  line-height: 86.4px;
  position: absolute;
  top: -1px;
  width: 410px;
}

.uwu-mk38j77l-xnfg-kjwvpng-1 {
  background-image: url(https://cdn.animaapp.com/projects/664c4ea7e5e41a2a8e175549/releases/664c4fdbe308973cd60db332/img/uwu-mk38j77lxnfgkjwv-png@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 77px;
  left: 320px;
  position: absolute;
  top: 3px;
  width: 150px;
}

.container-74 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0.67px;
  position: relative;
}

.ifyourelookingfo-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
}

.container-75 {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 383px;
  left: 567px;
  position: absolute;
  top: 157px;
  width: 657px;
}

.form-1 {
  align-self: stretch;
  height: 382.56px;
  position: relative;
  width: 100%;
}

.flex-col-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 383px;
  position: relative;
  top: -1px;
  width: 657px;
}

.container-76 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.69px;
  height: 125px;
  margin-top: 21px;
  position: relative;
  width: 657px;
}

.label-message-2 {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.textarea-2 {
  align-self: stretch;
  background-color: var(--jamesdoscomseashell);
  height: 96px;
  position: relative;
  width: 100%;
}

.button-4 {
  align-items: center;
  background-color: var(--jamesdoscomamethyst);
  border-radius: 999px;
  display: inline-flex;
  justify-content: center;
  margin-top: 22px;
  max-width: 657px;
  overflow: hidden;
  padding: 16px 40px;
  position: relative;
}

.submit-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
