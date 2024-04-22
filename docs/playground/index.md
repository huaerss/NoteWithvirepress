---
sidebar: false
---

<div id='get'>
  语言: <select id="lang">
   <option :value="item.value" v-for='item in languages'>{{item.name}}</option>
  </select>
</div>
<div class='happ'>
 <div id='container' style="width: 800px; height: 300px"></div>
 <button @click='runcode'>点击运行</button>

   代码结果:
 <div id='rusult' style="width: 800px; height: 300px"></div>
</div>

<script setup>
import { onMounted, watch, ref } from 'vue'
import axios from 'axios'
import { useData } from 'vitepress'
const { isDark } = useData()
let monacoEditor, rusultediot
const modellang = ref('javascript')
const languages = [
  { name: 'javascript', value: 'javascript' },
  { name: 'typescript', value: 'typescript' },
  { name: 'python', value: 'python' },
  { name: 'java', value: 'java' },
  { name: 'c', value: 'c' },
  { name: 'c++', value: 'cpp' },
  { name: 'c#', value: 'csharp' },
  { name: 'go', value: 'go' },
]

onMounted(() => {
   console.log('mounted')
   console.log('sssr??',import.meta.env.SSR)

  if (!import.meta.env.SSR) { // 只在客户端执行
  //执行代码
  console.log('执行代码monaco-editor')
    import('monaco-editor').then(monaco => {
      import('monaco-editor/esm/vs/editor/editor.worker?worker')
      import('monaco-editor/esm/vs/language/json/json.worker?worker')
      import('monaco-editor/esm/vs/language/css/css.worker?worker')
      import('monaco-editor/esm/vs/language/html/html.worker?worker')
      import('monaco-editor/esm/vs/language/typescript/ts.worker?worker')

      self.MonacoEnvironment = {
        getWorker(_, label) {
          if (label === 'typescript' || label === 'javascript') {
            return new monaco.languages.typescript.TypeScriptWorker()
          }
          return new monaco.editor.EditorWorker()
        },
      }

      watch(isDark, (newVal) => {
        monaco.editor.setTheme(newVal ? 'vs-dark' : '')
      })

      const ele = document.querySelector('#container')
      monacoEditor = monaco.editor.create(ele, {
        value: "function hello() {\nconsole.log('Hello world!');\n}\nhello()",
        language: 'javascript',
        theme: isDark.value ? 'vs-dark' : '',
      })

      const rusult = document.querySelector('#rusult')
      rusultediot = monaco.editor.create(rusult, {
        value: '',
        language: 'javascript',
        theme: isDark.value ? 'vs-dark' : '',
      })

      const lang = document.querySelector('#lang')
      lang.addEventListener('change', (e) => {
        const newLang = e.target.value
        monaco.editor.setModelLanguage(monacoEditor.getModel(), newLang)
      })
    })
  }
})

const runcode = () => {
  if (monacoEditor) {
    const code = monacoEditor.getValue()
    axios
      .post('http://localhost:3000/code', {
        code,
        language: modellang.value,
      })
      .then((res) => {
        console.log(res)
        rusultediot.setValue(res.data)
      })
  }
}
</script>

<style>
# get {
  display: flex;
  justify-content: end;
  margin: 20px 0;
}
</style>
