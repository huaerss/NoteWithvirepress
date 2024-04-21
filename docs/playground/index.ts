import * as monaco from 'monaco-editor'
setTimeout(() => {
  const ele = document.querySelector('#container') as HTMLElement
  console.log('ele', ele)
  monaco.editor.create(ele, {
    value: "function hello() {\nconsole.log('Hello world!');\n}",
  })
}, 1000)
