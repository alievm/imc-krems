// menuItems.js

import {
    SquaresPlusIcon,
    UserGroupIcon,
    Bars4Icon,
    SunIcon,
    GlobeAmericasIcon, BookOpenIcon, GlobeAltIcon
} from "@heroicons/react/24/solid";

export const navListMenuItems = [
    {
        title: "About us",
        description: "Learn about our mission, vision, and values.",
        icon: SquaresPlusIcon,
        url: '/about-us'
    },
    {
        title: "Leadership",
        description: "Meet our leadership team and their expertise.",
        icon: UserGroupIcon,
        url: '/leadership'
    },
    {
        title: "Partners",
        description: "Explore our partnerships and collaborations.",
        icon: Bars4Icon,
        url: '/partners'

    },
    {
        title: "Global faculty",
        description: "Discover our diverse and experienced faculty.",
        icon: SunIcon,
        url: '/global-faculty'

    },
    {
        title: "Career",
        description: "Find career opportunities and join our team.",
        icon: GlobeAmericasIcon,
        url: '/careers'

    },
];


export const navListMenuItems2 = [
    {
        title: "International joint faculty between TSUE and IMC Krems",
        description: "Discover our collaborative international faculty.",
        icon: SquaresPlusIcon,
        submenu: [
            {
                title: "Programs Offered",
                description: "Explore the range of programs we offer.",
                icon: BookOpenIcon,
            },
            {
                title: "Global Opportunities",
                description: "Learn about international exchange and study abroad options.",
                icon: GlobeAltIcon,
            },
            {
                title: "Faculty Members",
                description: "Meet our distinguished faculty members.",
                icon: UserGroupIcon,
            }
        ]
    },
    {
        title: "Foundation",
        description: "Learn about our foundational principles and support.",
        icon: UserGroupIcon,
        url: '/foundation'
    },
];


export const navListMenuItems3 = [
    {
        title: "Students union",
        description: "Get involved with the student union.",
        icon: SquaresPlusIcon,
    },
    {
        title: "Scholarship",
        description: "Explore scholarship opportunities.",
        icon: UserGroupIcon,
        url: '/scholarships'
    },
    {
        title: "Internship",
        description: "Find internship programs and opportunities.",
        icon: Bars4Icon,
        url: '/internships'
    },
    {
        title: "Exchange program",
        description: "Learn about our student exchange programs.",
        icon: SunIcon,
        url: '/exchange-program'
    },
    {
        title: "Library",
        description: "Explore our extensive library resources.",
        icon: GlobeAmericasIcon,
    },
];

export const navListMenuItems4 = [
    {
        title: "Why IMC program",
        description: "Understand why the IMC program is right for you.",
        icon: SquaresPlusIcon,
        url: '/why-choose-imc'
    },
    {
        title: "How to apply",
        description: "Learn about the application process.",
        icon: UserGroupIcon,
        url: '/how-to-apply'
    },
    {
        title: "Entry requirements",
        description: "Check the entry requirements for the program.",
        icon: Bars4Icon,
        url: '/entry-requirements'
    },
    {
        title: "Course fee",
        description: "Find information on course fees.",
        icon: SunIcon,
        url: '/study-fees'
    },
    {
        title: "Scholarship",
        description: "Explore available scholarships.",
        icon: GlobeAmericasIcon,
        url: '/scholarships'
    },
    {
        title: "About KTAT",
        description: "Learn about the KTAT initiative.",
        icon: SunIcon,
        url: '/ktat'
    },
    {
        title: "Apply",
        description: "Start your application here.",
        icon: GlobeAmericasIcon,
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfslvtJO2i1Tfo2xFpebn_rQtX8GPVSpHGYKbAXj9a4s-YZ2Q/viewform'
    },
    {
        title: "FAQ",
        description: "Find answers to frequently asked questions.",
        icon: Bars4Icon,
        url: '/faq'
    },
];

export const navListMenuItems5 = [
    {
        title: "Graduation ceremony",
        description: "Celebrate your achievements at our graduation ceremony.",
        icon: SquaresPlusIcon,
    },
    {
        title: "Students Career centre",
        description: "Get career support and resources.",
        icon: Bars4Icon,
    },
];

export const navListMenuItems6 = [
    {
        title: "Events",
        description: "Stay updated with our latest events.",
        icon: SquaresPlusIcon,
    },
    {
        title: "Campus life",
        description: "Explore life on campus.",
        icon: UserGroupIcon,
    },
    {
        title: "Policy",
        description: "Understand our policies.",
        icon: Bars4Icon,
    },
    {
        title: "Gallery",
        description: "View our photo gallery.",
        icon: SunIcon,
    },
];
