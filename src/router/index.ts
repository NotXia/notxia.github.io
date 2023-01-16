import { createRouter, createWebHashHistory  } from "vue-router"
import Home from "../views/home/Home.vue"
import About from "../views/about/About.vue"
import Projects from "../views/projects/Projects.vue"
import Resume from "../views/resume/Resume.vue"
import Contacts from "../views/contacts/Contacts.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/projects",
            name: "projects",
            component: Projects
        },
        {
            path: "/resume",
            name: "resume",
            component: Resume
        },
        {
            path: "/contacts",
            name: "contacts",
            component: Contacts
        }
    ]
})

export default router
