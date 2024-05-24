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

<script lang="ts" src="./CounterVueScript2"></script>
