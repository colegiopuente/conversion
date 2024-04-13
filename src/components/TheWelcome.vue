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
      <li>Seleccione y copie la región en el excel que contiene las notas, incluidos encabezados</li>
      <li>Péguelas en el cuadro de abajo</li>
    </ul>
    <TableSimulator />
  </AccordionItem>
</template>
