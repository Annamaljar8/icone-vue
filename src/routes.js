import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Contact from './components/Contact.vue';
import OrderIcon from './components/OrderIcon.vue';

import IconWorkshop from './components/icons/IconWorkshop.vue';
import Married from './components/icons/Married.vue';
import Name from './components/icons/Name.vue';
import Measure from './components/icons/Measure.vue';
import Church from './components/icons/Church.vue';
import ChurchPainting from './components/icons/ChurchPainting.vue';

import AboutWorkshop from './components/workshop/AboutWorkshop.vue';
import Articles from './components/workshop/Articles.vue';
import StepWorkshop from './components/workshop/StepWorkshop.vue';

import AboutSchool from './components/school/AboutSchool.vue';
import Entrant from './components/school/Entrant.vue';
import WorkPupils from './components/school/WorkPupils.vue';


export const routes = [
    {
      path: '',
      name: 'home',
      components: {
          default: Home,
          'header-top': Header,
          'icons': IconWorkshop,
          'workshop': AboutWorkshop,
          'contact': Contact,
      },

  },
  { path: '/icons', components: {
        default: IconWorkshop,
        'header-top': Header,

    },
    children: [
       { path: '/icons/married', component: Married },
       { path: '/icons/name', component: Name },
       { path: '/icons/measure', component: Measure },
       { path: '/icons/church', component: Church },
       { path: '/icons/churchpainting', component: ChurchPainting },
   ]},
   { path: '/workshop', components: {
         default: AboutWorkshop,
         'header-top': Header,

     },
     children: [
        { path: '/workshop/articles', component: Articles },
        { path: '/workshop/stepworkshop', component: StepWorkshop }
    ]},
    { path: '/school', components: {
          default: AboutSchool,
          'header-top': Header,

      },
      children: [
         { path: '/school/entrant', component: Entrant },
         { path: '/school/workpupils', component: WorkPupils }
     ]},
     { path: '/order', components: {
           default: OrderIcon,
           'header-top': Header,

       }}
];
