<template>
  <section>
    <h3>Counter: {{ count }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="count++">+1</button>
      <button @click="count--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { count, squareCounter } = useCounter(props.value);

    return {
      count,
      squareCounter,
    };
  },
});
</script>
