<script setup>
import { useTableStore } from '@/stores/table'

const tableStore = useTableStore()
</script>

<template>
  <div v-if="!tableStore.dataText">
    <h3>Pegar selección</h3>
    <textarea v-model="tableStore.dataText"></textarea>
  </div>
  <div>
    <div class="mb">
      <button @click="tableStore.dropSelection">Borrar selección</button>
    </div>
    <div v-if="tableStore.validationErrorsMessages && tableStore.dataText">
      <p class="validation-message" v-text="tableStore.validationErrorsMessages"></p>
    </div>
    <div>
      <label for="hasHeader">
        <input id="hasHeader" type="checkbox" v-model="tableStore.hasHeader"> Mi tabla tiene encabezado (Primera fila)
      </label>
    </div>
    <div>
      <p>Columnas incluidas: <b class="bold">{{ tableStore.allowedColumns.length }}</b></p>
    </div>
  </div>
  <div class="mt">
    <!-- <pre>Total filas: {{ tableStore.validRows.length - 1 }}</pre> -->
    <!-- <pre>Encabezado: {{ tableStore.hasHeader }}</pre> -->
    <div class="scroll-x alice">
      <div class="flex" v-if="tableStore.dataText">
        <table class="table grades">
          <thead>
            <tr>
              <th class="p" v-for="(header, idx) in tableStore.columns[0]">
                <input type="checkbox" :value="idx" v-model="tableStore.allowedColumns">
              </th>
            </tr>
            <tr v-if="tableStore.hasHeader">
              <th class="p" v-for="header in tableStore.columns[0]">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(column, index) in tableStore.columns">
              <template v-if="tableStore.hasHeader">
                <tr v-if="index">
                  <td class="p" v-for="cell in column">{{ cell }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td class="p" v-for="cell in column">{{ cell }}</td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
            </tr>
            <tr v-if="tableStore.hasHeader">
              <th class="bg-c">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="totalItem in tableStore.totalValuation">
              <td class="p bg-c">{{ totalItem }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mt" v-if="tableStore.dataText">
      <button @click="tableStore.copyResult" v-text="tableStore.copyMessage"></button>
    </div>
    <!-- <pre># Columnas: {{ tableStore.validColumnsLength }}</pre> -->
    <!-- <pre>Columnas permitidas: {{ tableStore.allowedColumns }}</pre> -->
    <!-- <pre>A calcular: {{ tableStore.allowedCells }}</pre> -->
    <!-- <pre>Total: {{ tableStore.totalValuation }}</pre> -->
    <!-- <pre>Tabla final: {{ tableStore.columns }}</pre> -->
  </div>
</template>