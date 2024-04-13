import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
// import { useLevelsStore } from '@/stores/levels'

export const useTableStore = defineStore('table', () => {
  // const levelsStore = useLevelsStore()
  // const levels = ref(levelsStore.levels)

  const dataText = ref('')
  const hasHeader = ref(true)

  const rows = computed(() => dataText.value.split('\n'))
  const validRows = computed(() => rows.value.filter((i) => i))
  const columns = computed(() => validRows.value.map((a) => a.split('\t')))
  const validColumnsLength = computed(() => columns.value[0]?.length)

  const allowedColumns = ref([])

  watch(rows, (newRows, oldRows) => {
    for (let cont = 0; cont < validColumnsLength.value; cont++) allowedColumns.value.push(cont)
  })

  return {
    dataText,
    hasHeader,
    validRows,
    columns,
    validColumnsLength,
    allowedColumns
  }
})
