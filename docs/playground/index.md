---
sidebar: false
---

<div id='get'>
  语言: <select id="lang" >
   <option :value="item.value" v-for='item in languages'>{{item.name}}</option>

  </select>
</div>
<div class='happ'>
 <div id='container' style="width: 800px; height: 300px"></div>
 <button @click='runcode'>点击运行</button>

   代码结果:
 <div id='rusult' style="width: 800px; height: 300px" ></div>
</div>

<script setup>
  import * as monaco from 'monaco-editor'
  import {ref} from 'vue'
  import axios from 'axios'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
 import {onMounted,watch}from 'vue'
 import { useData } from 'vitepress'
 const { isDark } = useData()
 const havecode = ref(false)
 watch(isDark, (newVal, oldVal) => {
  
  monaco.editor.setTheme(newVal ? "vs-dark" : "",)
})
self.MonacoEnvironment={
  getWorker(_, label){
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  }
}
let monacoEditor;
const modellang = ref('javascript')
let rusultediot;
onMounted(() => {

  const ele = document.querySelector('#container')

   monacoEditor = monaco.editor.create(ele, {
      value: "function hello() {\nconsole.log('Hello world!');\n}\nhello()",
      language: "javascript",
      theme: isDark.value ? "vs-dark" : "",
  });
     const rusult = document.querySelector('#rusult')

        rusultediot = monaco.editor.create(rusult, {
          value: '',
          language: "javascript",
          theme: isDark.value ? "vs-dark" : "",
        });

// 监听语言变化
  const lang = document.querySelector('#lang')
  lang.addEventListener('change', (e) => {
    const newLang = e.target.value;
    monaco.editor.setModelLanguage(monacoEditor.getModel(), newLang);
   })

})

// 帮我写一个monaco.languages 支持的中国使用的主流语言列表
const  languages =   [
  {name: 'javascript', value: 'javascript'},
  {name: 'typescript', value: 'typescript'},
  {name: 'python', value: 'python'},
  {name: 'java', value: 'java'},
  {name: 'c', value: 'c'},
  {name: 'c++', value: 'cpp'},
  {name: 'c#', value: 'csharp'},
  {name: 'go', value: 'go'},

]

const runcode = () => {
  // 获取当前编辑器输入的代码
  const code = monacoEditor.getValue();
  axios.post('http://localhost:3000/code',{
    code,
    language:modellang.value
  }).then(res => {
    console.log(res)
    rusultediot.setValue(res.data)
   })

}

</script>
<style>
  #get{
    display: flex;
    justify-content: end;
    margin: 20px 0;
  }
  /* .happ{
    display: flex;
   } */

</style>
