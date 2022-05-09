<template>
  <label :for="id" :class="{ 'rdo-box': true, checked: this.checked }">
    <input
      :id="id"
      :value="id"
      :name="inputName"
      type="radio"
      :checked="checked"
      @change="rdoClick"
    />
    <span class="txt">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "form-radio",
  props: ["value", "id", "inputName"],
  methods: {
    rdoClick() {
      this.$emit("input", this.id);
    },
  },
  computed: {
    checked() {
      return this.value === this.id;
    },
  },
};
</script>

<style scoped lang="scss">
.rdo-box {
  display: block;
  position: relative;
  box-sizing: border-box;
  border: 2px solid #888;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  input {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
  }
  .txt {
    font-weight: 700;
  }
  &.checked {
    border-color: #000;
    background: #000;
    font-weight: 700;
    color: #fff;
  }
}
</style>
