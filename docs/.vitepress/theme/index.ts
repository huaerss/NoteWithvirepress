import { h, watch } from 'vue'
import { useData, EnhanceAppContext, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics' // 引入 google-analytics 插件
import { createMediumZoomProvider } from './composables/useMediumZoom'
import giscusTalk from 'vitepress-plugin-comment-with-giscus' // 引入 giscus 插件

import MLayout from './components/MLayout.vue'
import MNavLinks from './components/MNavLinks.vue'

import './styles/index.scss'

let homePageStyle: HTMLStyleElement | undefined

declare global {
  interface Window {
    dec: (pwd: string) => void
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(MLayout, props)
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    googleAnalytics({
      id: 'G-034XV7PYBM', //跟踪ID，在analytics.google.com注册即可
    }),
      createMediumZoomProvider(app, router)
    app.component('MNavLinks', MNavLinks)

    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () =>
          updateHomePageStyle(
            /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
            location.pathname === '/' || location.pathname === '/vitepress-nav-template/',
          ),
        { immediate: true },
      )
    }
  },
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()
    giscusTalk(
      {
        repo: 'huaerss/NoteWithvirepress', //仓库
        repoId: 'R_kgDOLmhyqA', //仓库ID
        category: 'Announcements', // 讨论分类
        categoryId: 'DIC_kwDOLmhyqM4CfTfE', //讨论分类ID
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
      },
      {
        frontmatter,
        route,
      },

      true,
    )
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
  window.dec = (pwd: string) => {
    localStorage.setItem('pwd', pwd)
    let event = new CustomEvent('setItem', { detail: pwd })
    window.dispatchEvent(event)
  }
  // 在页面关闭时，清除 localStorage
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('pwd')
  })
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
