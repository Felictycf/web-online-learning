import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import Course from "../components/Course.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import PersonCenter from "../components/PersonCenter.vue";
import QuestionAndAnswer from "../components/QuestionAndAnswer.vue";
import NotFound from "../components/NotFound.vue";
import OnlineExam from "../components/OnlineExam.vue";
import ForumMoudle from "../page/ForumMoudle.vue";
import Schedule from "../page/Schedule.vue";
import Performance from "../page/Performance.vue";
import Note from "../page/Note.vue";
import Email from "../page/Email.vue";

const routes = [
    {
        path: '/',
        name: 'PersonCenter',
        component: PersonCenter
    },
    {
        path: '/course',
        name: 'Course',
        component: Course
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component:Register,
    },
    // {
    //     path: '/personcenter',
    //     name: 'PersonCenter',
    //     component:PersonCenter,
    // },
    {
        path: '/question',
        name: 'Question',
        component:QuestionAndAnswer,
    },
    {
        path: '/notfound',
        name: 'Notfound',
        component:NotFound,
    },
    {
        path: '/exam',
        name: 'Exma',
        component:OnlineExam,
    },
    {
        path: '/fm',
        name: 'fm',
        component:ForumMoudle,
    },
    {
        path: '/schedule',
        name: 'schedule',
        component: Schedule
    },
    {
        path: '/performance',
        name: 'perfromance',
        component: Performance
    },

    {
        path: '/note',
        name: 'note',
        component: Note
    },
    {
        path: '/email',
        name: 'email',
        component: Email
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
