<script setup>
import { useValuationsStore } from '@/stores/valuations'

const store = useValuationsStore()
</script>

<template>
  <div class="mb mt">
    <button @click="store.add">Agregar valoración</button>
  </div>

  <table class="rating">
    <tbody>
      <tr v-for="(item, index) in store.items">
        <td>Valoración {{ index + 1 }}</td>
        <td>
          <select v-model="item.value">
            <option value="" disabled>--Elija--</option>
            <option v-for="level in store.levels" :value="level.value">{{ level.title }}</option>
          </select>
        </td>
        <td>
          <button @click="store.remove(index)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>

  <div>
    <!-- <pre>Items: {{ items }}</pre>
    <pre>Valid Items: {{ itemsCount }}</pre> -->
  </div>

  <table class="total">
    <tbody>
      <tr>
        <td class="subtitle">Valoración Consolidada:</td>
        <td>Superior</td>
      </tr>
      <tr>
        <td class="subtitle">Total valoraciones:</td>
        <td>{{ store.itemsCount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.total {
  border: solid;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: aquamarine;
  margin-top: 1rem;
}

.subtitle {
  font-weight: 600;
  padding-right: 1rem;
}

.mb {
  margin-bottom: 1rem;
}

.mt {
  margin-top: 1rem;
}

.rating td {
  padding-right: 2rem;
}

.rating td:first-child {
  font-weight: 700;
}
</style>
