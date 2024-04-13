<script setup>
import { useTableStore } from '@/stores/table'

const tableStore = useTableStore()
</script>

<template>
  <textarea v-model="tableStore.dataText" v-if="!tableStore.dataText"></textarea>
  <div>
    <div>
      <button @click="tableStore.dropSelection">Borrar selección</button>
    </div>
    <label for="hasHeader">
      <input id="hasHeader" type="checkbox" v-model="tableStore.hasHeader"> Mi tabla tiene encabezado (Primera fila)
    </label>
  </div>
  <div>
    <!-- <pre>Total filas: {{ tableStore.validRows.length - 1 }}</pre> -->
    <!-- <pre>Encabezado: {{ tableStore.hasHeader }}</pre> -->
    <div class="scroll-x alice">
      <table class="table grades">
        <thead>
          <tr>
            <th class="pr" v-for="(header, idx) in tableStore.columns[0]">
              <input type="checkbox" :value="idx" v-model="tableStore.allowedColumns">
            </th>
          </tr>
          <tr v-if="tableStore.hasHeader">
            <th class="pr" v-for="header in tableStore.columns[0]">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(column, index) in tableStore.columns">
            <template v-if="tableStore.hasHeader">
              <tr v-if="index">
                <td class="pr" v-for="cell in column">{{ cell }}</td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td class="pr" v-for="cell in column">{{ cell }}</td>
              </tr>
            </template>
          </template>
        </tbody>
      </table>
    </div>
    <pre># Columnas: {{ tableStore.validColumnsLength }}</pre>
    <pre>Columnas permitidas: {{ tableStore.allowedColumns }}</pre>
    <pre>A calcular: {{ tableStore.allowedCells }}</pre>
    <pre>Total: {{ tableStore.totalValuation }}</pre>
    <!-- <pre>Filas: {{ tableStore.columns }}</pre> -->
  </div>
</template>