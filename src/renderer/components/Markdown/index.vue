<template>
  <div class="markdown-wrapper">
    <div class="header"></div>
    <div class="toolbar"></div>
    <div class="editor-wrapper">
      <div class="editor"></div>
      <div class="toggler"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
// import { markdown } from 'markdown';
// import ace from 'ace';
import UiHeader from './compenents/Header';
import Editor from './compenents/Editor';
import Toolbar from './compenents/Toolbar';
export default {
  components: {
    UiHeader,
    Editor,
    Toolbar
  },
  data() {
    return {
      // m: markdown.toHTML('*HELLO*'),
    };
  }
};
</script>
