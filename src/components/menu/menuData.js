import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SettingsIcon from '@mui/icons-material/Settings';
export const MenuData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/"
    },
    {
        title:"Profile",
        icon: <PersonIcon/>,
        link:"/my-profile"
    },
    {
        title:"Saved Posts",
        icon:<BookmarkAddedIcon/>,
        link:"/saved-posts"
    },
    {
        title:"Settings",
        icon: <SettingsIcon/>,
        link:"/user-settings"
    },
]