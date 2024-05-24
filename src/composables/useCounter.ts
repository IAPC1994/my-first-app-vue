import { computed, ref } from 'vue';

/*const count = ref(10);  Global State*/

export const useCounter = (initialValue: number = 0) => {
  const count = ref(initialValue);

  return {
    count,

    // Read-only
    squareCounter: computed(() => count.value * count.value),
  };
};
