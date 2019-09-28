import Home from './components/Home';
import User from './components/User';
import Projects from './components/Projects';

const routes = [
    {path:'/',components:Home},
    {path:'/user',components:User},
    {path:'/projects',components:Projects},
];

export default routes;