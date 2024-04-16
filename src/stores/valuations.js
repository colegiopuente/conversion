import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLevelsStore } from '@/stores/levels'

export const useValuationsStore = defineStore('valuations', () => {
  const levelsStore = useLevelsStore()
  const levels = ref(levelsStore.levels)

  const items = ref([])

  const validItems = computed(() => items.value.filter((i) => i.value))
  const itemsCount = computed(() => validItems.value.length)
  const validWeights = computed(() => validItems.value.map((item) => avgLevel(item.value)))

  const avgValuations = computed(() => {
    if (itemsCount.value < 1) return 0.0
    const sum = validWeights.value.reduce((previous, current) => (current += previous))
    return sum / itemsCount.value
  })

  const totalValuation = computed(() => {
    if (avgValuations.value < 1.0) {
      return {
        title: 'N/A'
      }
    } else if (avgValuations.value < 6.0) {
      return levels.value[0]
    } else if (avgValuations.value < 8.0) {
      return levels.value[1]
    } else if (avgValuations.value < 9.0) {
      return levels.value[2]
    } else {
      return levels.value[3]
    }
  })

  const add = () => {
    items.value.push({
      value: ''
    })
  }

  const remove = (index) => {
    items.value.splice(index, 1)
  }

  const avgLevel = (level) => levels.value[level - 1]?.weight

  return {
    levels,
    items,
    validItems,
    itemsCount,
    add,
    remove,
    avgLevel,
    validWeights,
    avgValuations,
    totalValuation
  }
})
