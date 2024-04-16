<script setup>
import LevelSimulator from './LevelSimulator.vue'
import AccordionItem from './AccordionItem.vue'
import { useValuationsStore } from '@/stores/valuations'
import TableSimulator from './TableSimulator.vue';

const { levels } = useValuationsStore();
</script>

<template>
  <h2>Escala Nacional</h2>

  <AccordionItem :open="true">
    <template #heading>Niveles de desempeño</template>

    <table class="table">
      <thead>
        <tr>
          <th class="pr">Abbr.</th>
          <th>Nivel</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="level in levels">
          <td>{{ level.abbr }}</td>
          <td>{{ level.title }}</td>
        </tr>
      </tbody>
    </table>
  </AccordionItem>

  <h2>Simuladores</h2>

  <AccordionItem :open="true">
    <template #heading>Básico</template>

    Seleccione el nivel de desempeño para cada una de las valoraciones:
    <LevelSimulator />
  </AccordionItem>

  <AccordionItem>
    <template #heading>Masivo (Experimental)</template>

    <h3>Instrucciones</h3>
    <ul>
      <li>Seleccione y copie la región en el excel que contiene las notas, incluida máximo una fila de encabezado (o
        ninguna, en cuyo caso deseleccione la opción de <b class="bold">Mi tabla tiene un encabezado</b>).</li>
      <li>Péguelas en el cuadro de abajo (<b class="bold">Pegar selección</b>)</li>
      <li><b class="bold">Importante:</b> Seleccione las casillas de las columnas de las notas que serán incluidas en el
        cálculo.</li>
      <li>Copie la columna total en el excel cuidando que no quede desfasado.</li>
    </ul>
    <h3>Precaución</h3>
    <ul>
      <li>Use solo las abreviaturas definidas institucionalmente, que aparecen en la tabla niveles de desempeño (I, B,
        A, S). Un resultado de <b class="bold">N/A</b> en el total significa que en alguna de las columnas se ingresaron
        valoraciones con abreviaturas no válidas.</li>
      <li>Evite copiar celdas combinadas ya que esto puede generar resultados inesperados.</li>
      <li>Esta característica se encuentra en fase de desarrollo y puede generar resultados imprevistos. Úsela con
        cautela y reporte cualquier novedad que permita mejorar la aplicación.</li>
    </ul>
    <TableSimulator />
  </AccordionItem>
</template>
