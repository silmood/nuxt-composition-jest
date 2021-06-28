<template>
  <div>
    <span> {{ state.username }} </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { required } from '@vuelidate/validators'

export default defineComponent({
  setup() {
    const state = {
      username: 'test',
    }

    // This was the only way i could make the test succeed
    // I don't know what could be happenning because this is only a declaration
    // and the variable is not used in the code
    const rules = {
      foo: required,
    }

    return { state }
  },
})
</script>
