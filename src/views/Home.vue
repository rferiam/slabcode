<template>
  <div class="render-area">
    <div class="eje-vertical"></div>
    <Ejes :config="ejes" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Ejes from "../components/Ejes.vue";
import { Config } from "../interfaces";

@Component({
  components: {
    Ejes
  }
})
export default class Home extends Vue {
  @Prop({ default: "default" }) private config!: string;
  private re = new RegExp("^([2-6])(-U?(D|X(?!LR))?(LR?|T)){2,6}$");

  get ejes() {
    const config: Config = {
      n: 0,
      ejes: []
    };

    if (!this.re.test(this.config)) {
      return config;
    }

    const data = this.config.split("-");

    if (parseInt(data[0]) !== data.length - 1) {
      return config;
    }

    let pa = 0;
    let ll = 0;
    data.forEach((e, k) => {
      if (k === 0) {
        config.n = parseInt(e);
      } else {
        const unitario = e.includes("U");
        const dual = e.includes("D");

        const puntosApoyo: { id: number; llantas: number[] }[] = unitario
          ? [{ id: ++pa, llantas: [] }]
          : [
              { id: ++pa, llantas: [] },
              { id: ++pa, llantas: [] }
            ];

        puntosApoyo.forEach(p => {
          p.llantas = dual ? [++ll, ++ll] : [++ll];
        });

        config.ejes.push({
          id: k,
          puntosApoyo,
          libre: e.includes("L"),
          traccion: e.includes("T"),
          direccional: e.includes("X"),
          retractil: e.includes("R")
        });
      }
    });

    return config;
  }
}
</script>

<style lang="scss">
h1 {
  z-index: 10;
  color: white;
}
.render-area {
  min-width: 70vw;
  min-height: 100vh;
  position: relative;
  background-color: #00313f;
  display: flex;
  justify-content: center;
  align-items: center;

  .eje-vertical {
    position: absolute;
    width: 1rem;
    margin-left: 1.8rem;
    background-color: rgba(30, 60, 80, 1);
    z-index: 0;
  }
}
</style>
