import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'node',
    items: [
      {
        text: 'npminstall 详解', link: '../npm install 详解.md'
      }
    ]
  }
]
