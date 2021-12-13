<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action"  :class="{active: fruta.seleccionada}" aria-current="true" v-for="fruta in frutas" @click="onSelectFruta(fruta)">
      {{ fruta.nombre + ' ' + fruta.precio }}
    </a>
  </div>
</template>

<script>
import {getFrutas} from "../services/fruta-service";

export default {
  name: "fruta-index",
  data() {
    return {
      frutas: [],
      frutasSeleccionadas: []
    }
  },
  methods: {
    async onInit() {
      this.frutas = await getFrutas();
    },
    onSelectFruta(fruta) {
      fruta.seleccionada = !fruta.seleccionada;
      if (fruta.seleccionada) {
        this.frutasSeleccionadas.push(fruta);
      } else {
        this.frutasSeleccionadas = this.frutasSeleccionadas.filter( (f) => {
          return f.id !== fruta.id;
        })
      }
      this.$emit('seleccionado', this.frutasSeleccionadas);
    }
  },
  created() {
    this.onInit();
  }
}
</script>

<style scoped>

</style>