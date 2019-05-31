<template>
  <div id="app" class="text-white">
    <cuerpo></cuerpo>
    <pie></pie>
  </div>
</template>

<script>
import cuerpo from './components/cuerpo.vue'
import pie from './components/pie.vue'

export default {
  name: 'app',
  components: {
    cuerpo,
    pie
  }
}
</script>


