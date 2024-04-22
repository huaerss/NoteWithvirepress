import { text } from 'stream/consumers'
import type { DefaultTheme } from 'vitepress'

export const frontsidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '前端',
    items: [
      {
        text: 'JS &&   TS',
        items: [
          {
            text: 'SVG格式转换IMG',
            link: '/front/js/SVG格式转换.md',
          },
          {
            text: 'TS装饰器 Decorator*',
            link: '/front/ts/TS装饰器Decorator.md',
          },
          {
            text: 'Reflect反射',
            link: '/front/js/Reflect.md',
          },
        ],
      },
      {
        text: 'vue',
        items: [
          {
            text: 'Proxy和defineProperty',
            link: '/front/vue/Proxy和defineProperty的区别.md',
          },
          {
            text: '按钮级别权限控制自定义指令',
            link: '/front/vue/按钮级别权限控制.md',
          },
        ],
      },
    ],
  },
]
