import { createRouter, createWebHistory } from 'vue-router';

import AlunoDetail from './pages/lobby/AlunoDetail.vue';
import AlunoRegistro from './pages/lobby/AlunoRegistro.vue';
import AlunosList from './pages/lobby/AlunosList.vue';
import ContactAluno from './pages/matches/ContactAluno.vue';
import MatchesList from './pages/matches/MatchesList.vue';
import NotFound from './pages/NotFound.vue';

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
    { path: '/registro', component: AlunoRegistro },
    { path: '/matches', component: MatchesList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
