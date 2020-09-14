import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
    {
        title: 'Home',
        path: '/homepage',
        icon: <BsIcons.BsFillBarChartFill/>,
        className: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/project',
        icon: <AiIcons.AiFillFolder/>,
        className: 'nav-text'
    },
    {
        title: 'Timer',
        path: '/timer',
        icon: <RiIcons.RiTimer2Fill/>,
        className: 'nav-text'
    },
    {
        title: 'View Progress',
        path: '/viewprogress',
        icon: <BsIcons.BsFillBarChartFill/>,
        className: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <BsIcons.BsFillBarChartFill/>,
        className: 'nav-text'
    },

]