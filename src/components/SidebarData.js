import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/homepage',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text homebar'
    },
    {
        title: 'Projects',
        path: '/project',
        icon: <AiIcons.AiFillFolder/>,
        className: 'nav-text projectbar'
    },
    {
        title: 'Timer',
        path: '/timer',
        icon: <RiIcons.RiTimer2Fill/>,
        className: 'nav-text timerbar'
    },
    {
        title: 'View Progress',
        path: '/viewprogress',
        icon: <GiIcons.GiStairsGoal/>,
        className: 'nav-text viewprogressbar'
    },
    {
        title: 'Leaderboard',
        path: '/leaderboard',
        icon: <BsIcons.BsFillBarChartFill/>,
        className: 'nav-text leaderboardbar'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <BiIcons.BiLogOut/>,
        className: 'nav-text logoutbar'
    },

]