
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/resume', component: () => import('pages/Resume.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/blog', component: () => import('pages/Blog.vue') },
      { path: '/post/:name', name: 'post', component: () => import('pages/Post.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
