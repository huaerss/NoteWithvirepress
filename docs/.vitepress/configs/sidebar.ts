import { text } from 'stream/consumers'
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '前端',
    items: [
      {
        text: 'JavaScript',
        items: [
          {
            text: 'SVG格式转换IMG',
            link: '/front/js/SVG格式转换.md',
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
  {
    text: '后端',
    items: [
      {
        text: 'Node',
        items: [
          {
            text: 'npm install 详解',
            link: '/back/node/npm install 详解.md',
          },
          {
            text: '跨域处理以及SSE',
            link: '/back/node/cors-sse.md',
          },
          {
            text: 'knex操作数据库',
            link: '/back/node/knex操作数据库.md',
          },
          {
            text: 'serverLess 云函数',
            link: '/back/node/serverLess.md',
          },
          {
            text: '爬虫+python',
            link: '/back/node/爬虫+python.md',
          },
        ],
      },
      {
        text: 'Nest框架',
        items: [
          {
            text: 'NestJS创建',
            link: '/back/node-frame/Nest创建.md',
          },
          {
            text: 'cookie+验证码',
            link: '/back/node-frame/cookie+验证码.md',
          },
          {
            text: 'NestJS拦截器/局部拦截器',
            link: '/back/node-frame/Nest拦截器.md',
          },
          {
            text: 'NestJS文件上传',
            link: '/back/node-frame/Nest文件上传.md',
          },
        ],
      },
    ],
  },
  {
    text: 'AnyThink技巧',
    items: [
      {
        text: 'Nginx',
        items: [
          {
            text: 'Nginx 通用命令',
            link: '/any/Nginx/nginx常用指令以及调试.md',
          },
        ],
      },
      {
        text: '杂食技巧',
        items: [
          {
            text: 'perplexity pro 申请方法',
            link: '/any/other/perplexity pro 申请方法.md',
          },
          {
            text: '科学上网',
            link: '/any/other/科学上网.md',
          },
        ],
      },
      {
        text: '部署',
        items: [
          {
            text: 'pm2 部署',
            link: '/any/deploy/pm2部署Node.md',
          },
        ],
      },
    ],
  },
]
