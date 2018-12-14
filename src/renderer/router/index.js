import Vue from 'vue';
import Router from 'vue-router';
import LeftMenu from '@/layouts/LeftMenu';
// import RightMenu from '@/layouts/RightMenu';
// import ArticleList from '@/layouts/ArticleList';
import NewArticle from '@/layouts/ArticleList';
// import TopBar from '@/layouts/TopBar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LeftMenu,
      children: [
        {
          path: '/new-article',
          component: NewArticle
        },
        {
          path: '/my-paper',
          component: NewArticle
        },
        {
          path: '/recycle '
          // component: Recycle
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
