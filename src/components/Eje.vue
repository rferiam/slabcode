<template>
  <div class="eje" :class="[eje.traccion ? 't' : '']" :data-eje="'E' + eje.id">
    <div v-for="pa in eje.puntosApoyo" :key="pa.id">
      <PuntoApoyo :eje="eje" :n="pa.id" :llantas="pa.llantas" />
    </div>
  </div>
</template>

<script>
import PuntoApoyo from "./PuntoApoyo";

export default {
  name: "Eje",
  props: ["eje"],
  components: {
    PuntoApoyo
  }
};
</script>

<style lang="scss">
.eje {
  z-index: 1;
  margin: 50px 0;
  display: flex;
  background-color: #00789b;
  height: 1rem;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
  }

  &:before {
    margin-left: -1.5rem;
    color: white;
    font-weight: 900;
    padding: 0.8rem;
    border-radius: 50%;
    content: attr(data-eje);
    background-color: #00789b;
  }

  &.t,
  &.t:before {
    background-color: #22b687;
  }
}
</style>
