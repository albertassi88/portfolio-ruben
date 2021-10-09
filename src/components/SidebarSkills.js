import React from 'react';
import * as DiIcons from 'react-icons/di';
import * as GiIcons from 'react-icons/gi';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

const SidebarSkills = [
    {
        title: 'HTML5',
        icon: <FaIcons.FaHtml5 />,
    },
    {
        title: 'CSS3',
        icon: <FaIcons.FaCss3Alt />,
    },
    {
        title: 'JavaScript',
        icon: <DiIcons.DiJavascript />,
    },
    {
        title: 'React.JS',
        icon: <FaIcons.FaReact />,
    },
    {
        title: 'Node.JS',
        icon: <FaIcons.FaNodeJs />,
    },
    {
        title: 'Git',
        icon: <FaIcons.FaGitAlt />,
    },
    {
        title: 'RTL',
        icon: <GiIcons.GiOctopus />,
    },
    {
        title: 'Redux',
        icon: <SiIcons.SiRedux />,
    },
    {
        title: 'MongoDB',
        icon: <SiIcons.SiMongodb />,
    },
] 

export default SidebarSkills;