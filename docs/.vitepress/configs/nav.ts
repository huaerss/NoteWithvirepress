import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: '/nav/' },
  { text: '前端', link: '/front/' },
  { text: '后端', link: '/node/', },
  { text: '综合', link: '/any', },
  {
    text: '工具站点',
    items: [
      { text: 'ChatAI', link: 'https://www.gyhtop.top/' },
      { text: 'eletools', link: 'https://github.com/huaerss/eletools' }
    ]
  }
]

