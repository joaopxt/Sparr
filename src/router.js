import { createRouter, createWebHistory } from 'vue-router';

import AlunoDetail from './pages/lobby/AlunoDetail.vue';
import AlunoRegistro from './pages/lobby/AlunoRegistro.vue';
import AlunosList from './pages/lobby/AlunosList.vue';
import ContactAluno from './pages/matches/ContactAluno.vue';
import MatchesList from './pages/matches/MatchesList.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/alunos' },
    { path: '/alunos', component: AlunosList },
    {
      path: '/alunos/:id',
      component: AlunoDetail,
      props: true,
      children: [{ path: 'contato', component: ContactAluno }],
    },
    {
      path: '/registro',
      component: AlunoRegistro,
      meta: { requiresAuth: true },
    },
    { path: '/matches', component: MatchesList, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/alunos');
  } else {
    next();
  }
});

export default router;
