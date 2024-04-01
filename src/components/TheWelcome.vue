<script setup>
import LevelSimulator from './LevelSimulator.vue'
import WelcomeItem from './WelcomeItem.vue'
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
        <tr>
          <td>Bj</td>
          <td>Bajo</td>
        </tr>
        <tr>
          <td>Bs</td>
          <td>Básico</td>
        </tr>
        <tr>
          <td>A</td>
          <td>Alto</td>
        </tr>
        <tr>
          <td>S</td>
          <td>Superior</td>
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
