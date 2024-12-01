import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端', link: '/front/' },
  { text: '后端', link: '/back/' },
  { text: '杂食', link: '/any/' },
  { text: '操场', link: '/playground/' },
  {
    text: '工具站点',
    items: [
      { text: 'ChatAI', link: 'https://gyh.one/' },
      { text: 'eletools', link: 'https://github.com/huaerss/eletools' },
    ],
  },
]
