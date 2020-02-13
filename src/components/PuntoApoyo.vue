<template>
  <div class="punto-apoyo" :data-pa="`P${n}`">
    <div v-for="l in llantas" :key="l">
      <Llanta :eje="eje" :n="l" />
    </div>
  </div>
</template>

<script>
import Llanta from "./Llanta";

export default {
  name: "PuntoApoyo",
  props: ["n", "eje", "llantas"],
  components: {
    Llanta
  }
};
</script>

<style lang="scss" scoped>
.punto-apoyo {
  margin-right: -14px;
  display: flex;

  & div {
    display: flex;
  }

  &:before {
    content: attr(data-pa);
    width: 1rem;
    height: 1rem;
    font-size: 12px;
    padding: 6px;
    background-color: #00789b;
    border-radius: 50%;
    color: white;
    position: relative;
    top: -3rem;
    left: calc(50% - 0.1rem);
  }

  &:after {
    content: "";
    width: 0rem;
    height: 3rem;
    border: 0.1rem dashed #00789b;
    color: white;
    position: relative;
    left: calc(-50% + 0.8rem);
    top: -1.5rem;
  }
}
</style>
