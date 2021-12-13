<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action" aria-current="true" v-for="fruta in frutasPedido">
      {{ fruta.cantidad + ' ' + fruta.nombreFruta + ' ' + fruta.precio * fruta.cantidad }}
    </a>
  </div>
</template>

<script>

import {getFrutasPedido} from "../services/fruta-service";

export default {
  name: "fruta-pedido-index",
  data() {
    return {
      frutasPedido: []
    }
  },
  methods: {
    async onInit() {
      this.frutasPedido = await getFrutasPedido();
    }
  },
  created() {
    this.onInit();
  }
}
</script>

<style scoped>

</style>