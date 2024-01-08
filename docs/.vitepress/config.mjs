import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "☔雨落波敛",
  description: "雨落☔博客",
  base: '/vitepress/',
  markdown: {
    math: true,
  },
  lang: 'zh-CN',
  cleanUrls: false, // url 中删除尾随的 .html
  // 设置元数据
  themeConfig: {
    nav: [
      { text: '🏠首页', link: '/' },
      { text: '🚀发掘中', 
        items: [
          { text: '数据结构', 
            link: '/fighting/data-structure/数据结构',
          },

        ],
      },
      { text: '资源', link: '/resources/website' },
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

      '/resources/': [
        { text: '🕸 网站', link: '/resources/website' },
      ],

    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/demonq0q' }
    ]
  }
})
