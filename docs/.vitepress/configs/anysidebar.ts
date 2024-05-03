import type { DefaultTheme } from 'vitepress'
export const anysidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'AnyThink技巧',
    items: [
      {
        text: '部署',
        items: [
          {
            text: 'pm2 部署',
            link: '/any/deploy/pm2部署Node.md',
          },
          {
            text: '个人常用git命令',
            link: '/any/deploy/git常用命令.md',
          },
        ],
      },
      {
        text: 'Nginx',
        items: [
          {
            text: 'Nginx 常用指令以及调试',
            link: '/any/Nginx/nginx常用指令以及调试.md',
          },
          {
            text: 'Nginx 配置https',
            link: '/any/Nginx/nginx配置https.md',
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
    ],
  },
]
