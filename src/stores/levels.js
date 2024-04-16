import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLevelsStore = defineStore('levels', () => {
  const levels = ref([
    {
      abbr: 'I',
      title: 'Bajo',
      value: '1',
      weight: 3.5
    },
    {
      abbr: 'B',
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

  const calculatefromAbbr = (grades) => {
    const weights = grades.map(
      (item) => levels.value.find((i) => i.abbr == item.trim().toUpperCase())?.weight
    )
    if (!weights?.length) return 'N/A'
    const average = weights.reduce((previous, current) => (current += previous)) / grades.length

    if (!average || average < 1.0) {
      return 'N/A'
    } else if (average < 6.0) {
      return levels.value[0].abbr
    } else if (average < 8.0) {
      return levels.value[1].abbr
    } else if (average < 9.0) {
      return levels.value[2].abbr
    } else {
      return levels.value[3].abbr
    }
  }

  return {
    levels,
    calculatefromAbbr
  }
})
