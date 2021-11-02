<template>
  <main>
    <cx-header></cx-header>
    <cx-assets-table></cx-assets-table>
  </main>
</template>

<script>
import CxHeader from "@/components/CxHeader";
import CxAssetsTable from "@/components/CxAssetsTable";

export default {
  name: "App",
  components: {
    CxHeader,
    CxAssetsTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
