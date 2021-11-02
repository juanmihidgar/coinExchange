<template>
  <div>
    <cx-assets-table :assets="assets" />
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
    }
  },
  components: { CxAssetsTable },
  created() {
    api.getAssets().then((assets) => {
      console.log(assets)
      this.assets = assets
    })
  },
}
</script>
