import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar, frontsidebar, anysidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: 'dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',
  // base: '/',
  lang: 'zh-CN',
  title: 'ALL IN',
  head,
  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    search: {
      provider: 'local',
    },
    logo: '/Logo.png',
    nav,
    sidebar: {
      '/front/': frontsidebar,
      '/back/': sidebar,
      '/any/': anysidebar,
      '/playground/': [] as any,
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/huaerss' }],

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
    ssr: {
      noExternal: ['monaco-editor'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': ['monaco-editor'],
        },
      },
    },
  },
})
