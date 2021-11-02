<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <cx-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import CxAssetsTable from '@/components/CxAssetsTable'
import api from '@/api'

export default {
  name: 'Home',
  data() {
    return {
      assets: [],
      isLoading: false,
    }
  },
  components: { CxAssetsTable },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then((assets) => {
        this.assets = assets
      })
      .finally(() => {
        this.isLoading = false
      })
  },
}
</script>
