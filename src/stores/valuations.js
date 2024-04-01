import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useValuationsStore = defineStore('valuations', () => {
  const levels = ref([
    {
      abbr: 'Bj',
      title: 'Bajo',
      value: '1'
    },
    {
      abbr: 'Bs',
      title: 'Básico',
      value: '2'
    },
    {
      abbr: 'A',
      title: 'Alto',
      value: '3'
    },
    {
      abbr: 'S',
      title: 'Superior',
      value: '4'
    }
  ])

  const items = ref([])

  const itemsCount = computed(() => items.value.filter((i) => i.value).length)

  const add = () => {
    items.value.push({
      value: ''
    })
  }

  const remove = (index) => {
    items.value.splice(index, 1)
  }

  return { levels, items, itemsCount, add, remove }
})
