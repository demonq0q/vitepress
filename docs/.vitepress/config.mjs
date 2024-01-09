import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "雨落的博客",
  description: "雨落的博客",
  base: '/vitepress/',
  markdown: {
    math: true,
  },
  lang: 'zh-CN',
  cleanUrls: true, // url 中删除尾随的 .html
  // 设置元数据
  themeConfig: {
    logo: 'favicon.ico',
    nav: [
      { text: '🏠首页', link: '/' },
      { text: '🚀发掘中', 
        items: [
          { text: '数据结构', 
            link: '/fighting/data-structure/数据结构',
          },

        ],
      },
      { text: '✍随心记', 
        items: [
          {
            text: '2024',
            link: '/write/2024/2024.01' 
          }
        ]
      },
      { text: '📁资源', link: '/resources/website' },
      
    ],
    outline: {
      level: [1, 4],
      label: '目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    sidebar: 
    {
      '/fighting/': [
        {
          text: '🚀发掘中',
          items: [
            {
              text: '数据结构',
              collapsed: false,
              items: [
                {
                  text: '数据结构',
                  link: '/fighting/data-structure/数据结构'
                },
                {
                  text: '数组与链表',
                  link: '/fighting/data-structure/数组与链表'
                },
                {
                  text: '栈与队列',
                  link: '/fighting/data-structure/栈与队列',
                },
                {
                  text: '哈希表',
                  link: '/fighting/data-structure/哈希表'
                },
                {
                  text: '树',
                  link: '/fighting/data-structure/树',
                },
                {
                  text: '排序',
                  link: '/fighting/data-structure/排序'
                },
                {
                  text: '草稿',
                  link: '/fighting/data-structure/草稿'
                },
              ]
            },

          ]
        },
      ],
      '/write/': [
        {
          text: '✍随心记',
          items: [
            {
              text: '2024',
              collapsed: false,
              items: [
                {
                  text: '2024.01',
                  link: 'write/2024/2024.01'
                },
              ]
            }
          ]
        }
      ],
      '/resources/': [
        {
          text: '📁资源',
          items: [
            {
              text: '🕸 网站', 
              link: '/resources/website'
            },
          ]
        }
      ],
    },
    algolia: {
      apiKey: 'efdec22e7f53aff33bb12d97899f19a3',
      indexName: 'vitepress-docs',
      appId: '6TUWP2Q7B6',
      placeholder: '请输入关键词',

    },
    i18nRouting: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/demonq0q' }
    ]
  }
})
