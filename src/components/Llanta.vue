<template>
  <div class="llanta" :class="[eje.direccional ? 'r' : '']">
    {{ n }}
  </div>
</template>

<script lang="ts">
export default {
  name: "Llanta",
  props: ["n", "eje", "llantas"]
};
</script>

<style lang="scss" scoped>
.llanta {
  z-index: 2;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  background-color: #00313f;
  border: 2px solid white;
  border-radius: 10px;
  width: 2rem;
  height: 3rem;
}

.r {
  transform: rotate(-15deg);
}
</style>
