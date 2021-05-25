import Vue from 'vue'
import Router from 'vue-router'
// import { Table } from 'element-ui';
// import HelloWorld from '@/components/HelloWorld'


const Home = () =>
    import ('@/views/home');

//项目
const Project = () =>
    import ('@/views/project/project');
const All = () =>
    import ('@/views/project/all');
const File = () =>
    import ('@/views/project/file');
const Launch = () =>
    import ('@/views/project/launch');
const Partake = () =>
    import ('@/views/project/partake');
const NewProject = () =>
    import ('@/views/project/newproject');


//个人设置
const User = () =>
    import ('@/views/user/user');
const Sets = () =>
    import ('@/views/user/set');
const Public = () =>
    import ('@/views/user/public');


//我的主页
const My = () =>
    import ('@/views/my/my');
const MyHome = () =>
    import ('@/views/my/home');
const MyProject = () =>
    import ('@/views/my/project');


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/project',
            name: 'project',
            component: Project,
            redirect: { name: 'newproject' },
            children: [{
                    path: 'newproject',
                    name: 'newproject',
                    component: NewProject
                },
                {
                    path: 'partake',
                    name: 'partake',
                    component: Partake
                },
                {
                    path: 'launch',
                    name: 'launch',
                    component: Launch
                },
                {
                    path: 'file',
                    name: 'file',
                    component: File
                }, {
                    path: 'all/:type',
                    name: 'all',
                    component: All
                }
            ]
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            redirect: { name: 'set' },
            children: [{
                    path: 'set',
                    name: 'set',
                    component: Sets
                },
                {
                    path: 'public',
                    name: 'public',
                    component: Public
                }
            ]
        },
        {
            path: '/my',
            name: 'my',
            component: My,
            redirect: { name: 'myhome' },
            children: [{
                    path: 'myhome',
                    name: 'myhome',
                    component: MyHome
                },
                {
                    path: 'myproject',
                    name: 'myproject',
                    component: MyProject
                }
            ]
        }
    ]
})