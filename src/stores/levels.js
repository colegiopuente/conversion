import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLevelsStore = defineStore('levels', () => {
  const levels = ref([
    {
      abbr: 'Bj',
      title: 'Bajo',
      value: '1',
      weight: 3.5
    },
    {
      abbr: 'Bs',
      title: 'Básico',
      value: '2',
      weight: 7.0
    },
    {
      abbr: 'A',
      title: 'Alto',
      value: '3',
      weight: 8.5
    },
    {
      abbr: 'S',
      title: 'Superior',
      value: '4',
      weight: 9.5
    }
  ])

  return {
    levels
  }
})
