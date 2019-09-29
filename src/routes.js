import Home from './components/Home';
import User from './components/User';
import Projects from './components/Projects';
import UserDetails from './components/UserDetails';

const routes = [
    {path:'/',component:Home},
    {path:'/user',component:User},
    {path:'/userdetails/:username',component:UserDetails},    
    {path:'/projects',component:Projects},
];

export default routes;