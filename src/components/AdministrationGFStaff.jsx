import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import img1 from "../assets/dean.png"
import img2 from "../assets/head.png"
import img3 from "../assets/anonym.jpg"
import img4 from "../assets/deanDep.jfif"

import professor1 from "../assets/Professors/1.jpg";
import professor2 from "../assets/Professors/2.jpg";
import professor3 from "../assets/Professors/3.png";
import professor4 from "../assets/Professors/4.jpg";
import professor5 from "../assets/Professors/5.png";
import professor6 from "../assets/Professors/6.jpg";
import professor7 from "../assets/Professors/7.jpg";
import professor8 from "../assets/Professors/8.jpg";
import professor9 from "../assets/Professors/9.jpg";
import professorImg from "../assets/Professors/img.png";
import professor11 from "../assets/Professors/11.png";
import professor12 from "../assets/Professors/12.png";
import professor13 from "../assets/photo_2024-07-22_17-54-47.jpg";

const AdministrationGFStaff = () => {
    const { t } = useTranslation();

    const people = [
        {
            name: 'Prof. Ahmed mohaMed Aziz Ismail',
            role: <>{t('deanTitle')}</>,
            imageUrl: img1,
        },
        {
            name: 'Mr. Bahromjon Urmanov',
            role: <>{t('headOfDepartmentTitle')}</>,
            imageUrl: img2,
        },
        {
            name: 'Mr. Samandarboy Sulaymanov',
            role: <>{t('deputyDeanTitle')}</>,
            imageUrl: img3,
        },
        {
            name: 'Ms. Durdona Uktamova',
            role: <>{t('deputyDeanTitle2')}</>,
            imageUrl: img4,
        }
    ];

    const professors = [
        {
            name: 'Mrs. Maha Ibrahim',
            role: 'Senior Lecturer',
            imageUrl: professor13,
        },
        {
            name: 'Durdona Bahodirova',
            role: 'Senior teacher of German language',
            imageUrl: professor1,
            link: '/professors/bakhodirova'
        },
        {
            name: 'Aziza Usmanova',
            role: 'Lecture assistant',
            imageUrl: professor2,
            link: '/professors/usmanova'
        },
        {
            name: 'Durdona Davletova',
            role: 'Lecture assistant',
            imageUrl: professor3,
            link: '/professors/davletova'
        },
        {
            name: 'Dildora KHODJAEVA',
            role: 'Indologist and specialist of CSAS',
            imageUrl: professor4,
            link: '/professors/khodjaeva'
        },
        {
            name: 'Giyasov Farkhod',
            role: 'Assistant Professor',
            imageUrl: professor5,
            link: '/professors/giyasov'
        },
        {
            name: 'Dr. Haneen Allataifeh',
            role: 'Associate Professor',
            imageUrl: professor6,
            link: '/professors/haneen'
        },
        {
            name: 'Kholmatova Kibriyo',
            role: 'German teacher',
            imageUrl: professor7,
            link: '/professors/kibriyo'
        },
        {
            name: 'Mehrangiz Narzullaeva',
            role: 'Assistant lecture',
            imageUrl: professor8,
            link: '/professors/mehrangiz'
        },
        {
            name: 'Dr. Munisa Toirova',
            role: 'Associate Professor',
            imageUrl: professor9,
            link: '/professors/toirova'
        },
        {
            name: 'Bekzod Rozimov',
            role: 'Assistant',
            imageUrl: professorImg,
            link: '/professors/ruzimov'
        },
        {
            name: 'Dr. Muhammad Eid Balbaa',
            role: 'Associate Professor',
            imageUrl: professor11,
            link: '/professors/balbaa'
        },
        {
            name: 'Dr. Bahromjon Urmanov Numanovich',
            role: 'Senior Lecturer',
            imageUrl: professor12,
            link: '/professors/urmanov'
        },
    ];


    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('meetOurLeadership')}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {t('leadershipDescription')}
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-gray-800">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap mb-5">
                <div className="w-full max-w-full px-3 mb-6 mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
                        <div className="flex-auto block py-8 px-9">
                            <div>
                                <div className="mb-9">
                                    <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">{t('faculty')}</h1>
                                    <span className="text-[1.15rem] font-medium text-muted">{t('meetOurProfessors')}</span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8">
                                {professors.map((professor, index) => (
                <Link key={index} target="_blank" to={professor.link} >
                    <div className="relative max-w-[270px] mx-auto rounded overflow-hidden shadow-lg">
                        <img
                            className="w-full object-cover w-[270px] h-[270px]"
                            src={professor.imageUrl}
                            alt={professor.name}
                        />
                        <div className="absolute bottom-0 left-0 right-0 portrait-bg bg-opacity-50 px-6 py-2">
                            <div className="font-bold text-sm portrait-top-text">{professor.name}</div>
                            <div className="portrait-bot-text">{professor.role}</div>
                        </div>
                    </div>
                </Link>
            ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdministrationGFStaff;
