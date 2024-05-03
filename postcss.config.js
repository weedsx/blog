import tailwind from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default {
  plugins: [
    tailwind({
      // content: [
      //   './.vitepress/theme/Article.vue',
      //   './.vitepress/theme/Author.vue',
      //   './.vitepress/theme/Date.vue',
      //   './.vitepress/theme/Home.vue',
      //   './.vitepress/theme/Layout.vue',
      // ],
      content: ['./.vitepress/theme/**/*.vue'],
      plugins: [tailwindTypography]
    })
  ]
}
