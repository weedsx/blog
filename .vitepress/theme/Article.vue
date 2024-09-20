<script setup lang='ts'>
import MyDate from './MyDate.vue'
import Author from './Author.vue'
import { computed } from 'vue'
import { Content, useData, useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'

const { frontmatter: data } = useData()

const route = useRoute()

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path)
}


// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const update = computed(() => posts[findCurrentIndex()].update)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<template>
  <article class='xl:divide-y xl:divide-gray-200 dark:xl:divide-slate-200/5'>
    <header class='pt-6 xl:pb-10 space-y-1 text-center'>
      <MyDate :date='date' />
      <h1
        class='text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'
      >
        {{ data.title }}
      </h1>
    </header>
    
    <div
      class='divide-y xl:divide-y-0 divide-gray-200 dark:divide-slate-200/5 xl:grid xl:grid-cols-4 xl:gap-x-10 pb-16 xl:pb-20'
      style='grid-template-rows: auto 1fr'
    >
      <Author />
      <div
        class='divide-y divide-gray-200 dark:divide-slate-200/5 xl:pb-0 xl:col-span-3 xl:row-span-2'
      >
        <Content class='prose dark:prose-invert max-w-none pt-10 pb-8' />
        
        <!-- New: Last Updated Date -->
        <div class='pt-8 text-right last-updated'>
          <span class='text-sm text-gray-500 dark:text-white'>
            最后更新于: {{ update.string.replace('年', '-').replace('月', '-').replace('日', '') }}
          </span>
        </div>
      </div>
      
      <footer
        class='text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-slate-200/5 xl:col-start-1 xl:row-start-2'
      >
        <div v-if='nextPost' class='py-8'>
          <h2
            class='text-xs tracking-wide uppercase text-gray-500 dark:text-white'
          >
            下一篇
          </h2>
          <div class='link'>
            <a :href='nextPost.url'>{{ nextPost.title }}</a>
          </div>
        </div>
        <div v-if='prevPost' class='py-8'>
          <h2
            class='text-xs tracking-wide uppercase text-gray-500 dark:text-white'
          >
            上一篇
          </h2>
          <div class='link'>
            <a :href='prevPost.url'>{{ prevPost.title }}</a>
          </div>
        </div>
        <div class='pt-8'>
          <a class='link' href='/'>← 返回</a>
        </div>
      </footer>
    </div>
  </article>
</template>

<style scoped>
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

/* 针对移动端，设置“最后更新时间”与上一篇的距离 */
@media (max-width: 768px) {
  .last-updated {
    margin-bottom: 2rem; /* 设置间距，可以根据需求调整 */
  }
}
</style>