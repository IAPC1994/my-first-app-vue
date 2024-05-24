import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

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
