import { text } from 'stream/consumers'
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
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
          {
            text: 'NestJS异常拦截',
            link: '/back/node-frame/Nest异常拦截器.md',
          },
          {
            text: 'TypeOrm框架',
            link: '/back/node-frame/TypeOrm.md',
          },
          {
            text: 'CRUD操作',
            link: '/back/node-frame/NestCRUD+分页.md',
          },
          {
            text: 'DTO管道验证',
            link: '/back/node-frame/DTO管道验证.md',
          },
        ],
      },
      {
        text: 'Java',
        items: [
          {
            text: '多线程组件',
            link: '/back/Java/Thread.md',
          },
        ],
      },
    ],
  },
]
