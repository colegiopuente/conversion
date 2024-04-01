<script setup>
import LevelSimulator from './LevelSimulator.vue'
import WelcomeItem from './WelcomeItem.vue'
import { useValuationsStore } from '@/stores/valuations'

const { levels } = useValuationsStore();
</script>

<template>
  <WelcomeItem>
    <template #heading>Niveles de desempeño</template>

    <table class="table">
      <thead>
        <tr>
          <th>Abbr.</th>
          <th>Nivel (Escala Nacional).</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="level in levels">
          <td>{{ level.abbr }}</td>
          <td>{{ level.title }}</td>
        </tr>
      </tbody>
    </table>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Simulador</template>

    Seleccione el nivel para cada una de las valoraciones:
    <LevelSimulator />
  </WelcomeItem>
</template>
