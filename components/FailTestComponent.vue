<template>
  <div>
    <span> {{ state.username }} </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = {
      username: 'test',
    }
    return { state }
  },
})
</script>
