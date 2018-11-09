<template>
  
</template>

<style scoped>
</style>

<script>
  import { markdown } from 'markdown';
  import ace from 'ace';
  export default {
    data() {
      return {
        m: markdown.toHTML('*HELLO*'),
      };
    },
  };
</script>
