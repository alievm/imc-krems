import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const people = [
    {
        name: 'Prof. Ahmed Mohamed Aziz Ismail',
        role: 'Dean of the International Joint Education Faculty of TSUE and IMC Krems',
        imageUrl: '/dean.png',
    },
    {
        name: 'Mr. Bahromjon Urmanov',
        role: 'Head of International Business Management Department',
        imageUrl: '/head.png',
    },
    {
        name: 'Mr. Samandarboy Sulaymanov',
        role: 'Deputy Dean of the International Joint Education Faculty of TSUE and IMC Krems',
        imageUrl: '/anonym.jpg',
    },
    {
        name: 'Ms. Durdona Uktamova',
        role: 'Deputy Dean of the International Joint Education Faculty of TSUE and IMC Krems',
        imageUrl: '/deanDep.jfif',
    }
];


const AdministrationGFStaff = () => {
    const {t} = useTranslation();
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Discover the distinguished leaders guiding the International Joint Education Faculty of TSUE and
                        IMC Krems.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt=""/>
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
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div
                        className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">

                        <div className="flex-auto block py-8 px-9">
                            <div>
                                <div className="mb-9">
                                    <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">Faculty</h1>
                                    <span className="text-[1.15rem] font-medium text-muted">Meet Our Professors: Leaders in Cross-Cultural Education </span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-6 w-full">
                                    <Link target="_blank" to="/professors/bakhodirova">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block   object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/1.jpg"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Durdona
                                                    Bahodirova</a>
                                                <span className="block font-medium text-muted">Senior teacher of <br/> German language</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/usmanova">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block  object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/2.jpg"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Aziza
                                                    Usmanova</a>
                                                <span className="block font-medium text-muted">Lecture assistant</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/davletova">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block  object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/3.png"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Durdona
                                                    Davletova</a>
                                                <span className="block font-medium text-muted">Lecture assistant </span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/khodjaeva">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block  object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/4.jpg"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Dildora
                                                    KHODJAEVA </a>
                                                <span className="block font-medium text-muted">Indologist and specialist of CSAS</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/giyasov">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/5.png"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Giyasov
                                                    Farkhod</a>
                                                <span
                                                    className="block font-medium text-muted">Assistant Professor</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/haneen">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/6.jpg"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Dr.
                                                    Haneen Allataifeh</a>
                                                <span
                                                    className="block font-medium text-muted">Associate Professor</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/kibriyo">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/7.jpg"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Kholmatova
                                                    Kibriyo</a>
                                                <span className="block font-medium text-muted">German teacher</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/mehrangiz">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/8.jpg"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Mehrangiz
                                                    Narzullaeva</a>
                                                <span className="block font-medium text-muted">Assistant lecture</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/toirova">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/9.jpg"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Dr.
                                                    Munisa Toirova</a>
                                                <span
                                                    className="block font-medium text-muted">Associate Professor</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/ruzimov">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/img.png"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Bekzod
                                                    Rozimov</a>
                                                <span className="block font-medium text-muted">Assistant</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/balbaa">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/11.png"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Dr.
                                                    Muhammad Eid Balbaa</a>
                                                <span
                                                    className="block font-medium text-muted">Associate Professor</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link target="_blank" to="/professors/urmanov">
                                        <div className="flex flex-col hover:bg-gray-200 transition-colors duration-200 ease-in-out mr-5 text-center mb-11 lg:mr-16">
                                            <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                <img
                                                    className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                    src="/Professors/12.png"
                                                    alt="avarat image"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"
                                                   className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Dr.
                                                    Bahromjon Urmanov Numanovich</a>
                                                <span className="block font-medium text-muted">Senior Lecturer</span>
                                            </div>
                                        </div>
                                    </Link>


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
