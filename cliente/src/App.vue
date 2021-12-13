<template>
  <!--<div id="nav">
    <router-link to="/frutas">Frutas</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>-->
  <div class="container mt-5">
    <h3 class="text-center my-3">SELECCIONE FRUTAS Y CANTIDAD</h3>
    <div class="row">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">
            <h5>LISTA DE FRUTAS DISPONIBLES</h5>
          </div>
          <div class="card-body">
            <fruta-index @seleccionado="add($event)"></fruta-index>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="row">
          <div class="col-md-5">
            <input type="number" class="form-control" id="cantidad" v-model="cantidad">
          </div>
          <div class="col-md-7">
            <label for="cantidad">Cantidad</label>
          </div>
          <div class="col-md-12 d-grid gap-3 my-3">
            <button class="btn btn-primary" @click="onStorePedido">agregar ></button>
            <button class="btn btn-primary">{{'< retirar seleccion'}}</button>
            <button class="btn btn-primary"> {{ '<  retirar todos' }}</button>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">
            <h5>LISTA DE FRUTAS SELECCIONADAS</h5>
          </div>
          <div class="card-body">
            <fruta-pedido-index></fruta-pedido-index>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrutaIndex from './components/fruta-index'
import FrutaPedidoIndex from './components/fruta-pedido-index'
import {storeFrutasPedido} from "./services/fruta-service";

 export default {
   components: {
     FrutaIndex,
     FrutaPedidoIndex
   },
   data(){
     return {
       listaPedidos: [],
       cantidad: 0
     }
   },
   methods: {
     add(listaFrutas) {
       this.listaPedidos = [];
       listaFrutas.map((fruta) => {
         this.listaPedidos.push({
           fruta_id: fruta.id,
           cantidad: 0
         });
       });
     },
     async onStorePedido() {
       this.listaPedidos.map( (data) => {
         data.cantidad = this.cantidad
       });
       await storeFrutasPedido(this.listaPedidos);
     }
   }
 }
</script>

<style>
</style>
