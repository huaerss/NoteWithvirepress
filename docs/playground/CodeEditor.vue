<template>
  <div ref="editorContainer" style="height: 400px"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as monaco from 'monaco-editor'

const editorContainer = ref(null)

onMounted(() => {
  monaco.editor.create(editorContainer.value, {
    value: '// some code',
    language: 'javascript',
  })
})
</script>
