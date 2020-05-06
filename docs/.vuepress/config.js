module.exports = {
  title: '前端 冲冲冲 ',
  // description: '网站描述',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.png',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/Home/' }, // 内部链接 以docs为根目录
      { text: '前端基础', link: '/frontend/Js' },
      { text: '前端算法', link: '/algorithm/binaryTree' },
      { text: '博客', link: 'http://blog.linhuifeng.com/' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/Overcase?tab=repositories' },
          // {
          //   text: '算法仓库',
          //   link: 'https://github.com/Overcase?tab=repositories'
          // }
        ]
      }
    ],
    sidebar: {
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/frontend/': [
        // '/frontend/', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '前端',
          children: [
            '/frontend/Js', // 以docs为根目录来查找文件 
            '/frontend/Css', // 以docs为根目录来查找文件 
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        }
      ],
      // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      '/algorithm/': [
        {
          title: '算法',
          children: [
            '/algorithm/binaryTree'
          ]
        }
      ]
    }
  }
}
