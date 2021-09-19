import Home from "../pages/home";
import Test from "../pages/test";
// import OpenInterest from "../../pages/openInterest";
// import Page2 from "../pages/page2";

export const routes = [
    {
        path: '/',
        name: 'home',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/test',
        name: 'test',
        exact: true,
        main: () => <Test/>
    }
]