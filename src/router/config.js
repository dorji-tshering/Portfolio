import AboutPage from "../components/AboutPage";
import Contact from "../components/Contact";
import HomePage from "../components/HomePage";
import ProjectPage from "../components/ProjectPage";
import Skill from "../components/Skill";

export const Routes = [
        {
                path: "/",
                component: HomePage,
                private: false,
                exact: true,
        },
        {
                path: "/about",
                component: AboutPage,
                private: false,
                exact: true,
        },
        {
                path: "/contact",
                component: Contact,
                private: false,
                exact: true,
        },
        {
                path: "/skill",
                component: Skill,
                private: false,
                exact: true,
        },
        {
                path: "/projects",
                component: ProjectPage,
                private: false,
                exact: true,
        }
];