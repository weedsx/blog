import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Blog of H·L',
  description: 'Blog of H·L',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'NYHGSGQV',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],
  // todo genFeed
  // buildEnd: genFeed
})
