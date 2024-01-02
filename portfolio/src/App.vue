<script setup lang="ts">
import { RouterView} from 'vue-router'
import Navigation from  "./components/Navigation.vue"


</script>

<template>
<Navigation></Navigation>
<RouterView></RouterView>
</template>

<style scoped>

    * {
        
  display:flex;
  justify-content: center;
  flex-direction: column;
}
    

</style>
