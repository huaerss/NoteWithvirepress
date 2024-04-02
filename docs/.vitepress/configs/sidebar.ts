import { text } from 'stream/consumers'
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '前端',
    items: [
      {

        text: 'vue',
        items: [
          {
            text: 'Proxy和defineProperty', link: '/front/vue/Proxy和defineProperty的区别.md'
          }
        ]
      }
    ]
  },
  {
    text: '后端',
    items: [
      {
        text: 'Node',
        items: [
          {
            text: 'npm install 详解', link: '/back/node/npm install 详解.md'
          },
          {
            text: '跨域处理以及SSE', link: '/back/node/cors-sse.md'
          },
          {
            text: 'knex操作数据库', link: '/back/node/knex操作数据库.md'
          }
        ]
      }
    ]
  },
  {
    text: 'AnyThink技巧',
    items: [
      {
        text: 'Nginx',
        items: [
          {
            text: 'Nginx 通用命令', link: '/any/Nginx/nginx常用指令以及调试.md'
          }
        ]
      },
      {
        text: '杂食技巧',
        items: [
          {
            text: 'perplexity pro 申请方法', link: '/any/other/perplexity pro 申请方法.md'
          },
          {
            text: '科学上网', link: '/any/other/科学上网.md'
          }
        ]
      }
    ]
  }
]
