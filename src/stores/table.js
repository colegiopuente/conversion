import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useLevelsStore } from '@/stores/levels'

export const useTableStore = defineStore('table', () => {
  const levelsStore = useLevelsStore()
  // const levels = ref(levelsStore.levels)

  const dataText = ref('')
  const hasHeader = ref(true)

  const rows = computed(() => dataText.value.split('\n'))
  const validRows = computed(() => rows.value.filter((i) => i))
  const columns = computed(() => validRows.value.map((a) => a.split('\t')))
  const validColumnsLength = computed(() => columns.value[0]?.length)

  const allowedColumns = ref([])
  const allowedCells = computed(() => {
    const cols = columns.value.map((r) =>
      r.filter((c, index) => allowedColumns.value.includes(index))
    )
    return hasHeader.value ? cols.slice(1) : cols
  })

  const dropSelection = () => {
    dataText.value = ''
    allowedColumns.value = []
    hasHeader.value = true
  }

  const totalValuation = computed(() =>
    allowedCells.value.map((item) => levelsStore.calculatefromAbbr(item))
  )

  const copyMessage = ref('Copiar resultado')

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(totalValuation.value.join('\n'))
      copyMessage.value = '¡Copiado!'
      setTimeout(() => {
        copyMessage.value = 'Copiar resultado'
      }, '2000')
    } catch (error) {
      alert.error('Error al copiar: ' + error)
    }
  }

  const validationErrorsMessages = computed(() => {
    if (allowedColumns.value.length < 1) {
      return 'Seleccione algunas columnas que contengan valoraciones válidas.'
    } else if (totalValuation.value?.includes('N/A')) {
      return 'Seleccione solamente columnas con valoraciones válidas.'
    }

    return ''
  })

  // watch(rows, (newRows, oldRows) => {
  //   for (let cont = 0; cont < validColumnsLength.value; cont++) allowedColumns.value.push(cont)
  // })

  return {
    dataText,
    hasHeader,
    validRows,
    columns,
    validColumnsLength,
    allowedColumns,
    allowedCells,
    totalValuation,
    dropSelection,
    copyResult,
    copyMessage,
    validationErrorsMessages
  }
})
