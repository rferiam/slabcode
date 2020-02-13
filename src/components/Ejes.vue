<template>
  <div class="wrapper">
    <div v-if="config.n === 0 && config.ejes.length === 0">
      <h1>La configuracion ingresada es incorrecta.</h1>
    </div>
    <div class="ejes" v-for="eje in config.ejes" :key="eje.id">
      <Eje :eje="eje" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Eje from "@/components/Eje.vue";
import { Config } from "@/interfaces";

@Component({
  components: {
    Eje
  }
})
export default class Ejes extends Vue {
  @Prop({ required: true }) private config!: Config;

  mounted() {
    this.setEjeVertical();
  }

  updated() {
    this.setEjeVertical();
  }

  private setEjeVertical() {
    const height = (parseInt(this.config.n) - 1) * 100 + this.config.n * 16;
    const ev = document.querySelector(
      ".render-area .eje-vertical"
    ) as HTMLElement;
    if (ev) ev.style.height = `${height}px`;
  }
}
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ejes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
}
</style>
