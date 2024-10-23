import { ref, onMounted } from "vue"

/** 需要的数据格式 */
/**
  options {
    value: OptionValue
    label: string
    disabled?: boolean
  }
  api: () => Promise<ApiData>
 */

export function useFetchSelect(props) {
  const { api } = props

  const loading = ref(false)
  const options = ref([])
  const value = ref("")

  /** 调用接口获取数据 */
  const loadData = () => {
    loading.value = true
    options.value = []
    api()
      .then((res) => {
        options.value = res.data
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(() => {
    loadData()
  })

  return {
    loading,
    options,
    value
  }
}
