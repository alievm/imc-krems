import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import imgUz from '../assets/uz.svg'
import imgUk from '../assets/uk.svg'

const languages = [
  { code: 'uz', lang: 'O\'zb', flag: imgUz },
  { code: 'en', lang: 'Eng', flag:  imgUk},
];

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='language-switch ml-5 relative'>
      <button
        onClick={toggleMenu}
        className='flex items-center text-xs space-x-1 focus:outline-none uppercase gap-1'
      >
        {/* <span className={`fi ${languages.find(lang => lang.code === i18n.language)?.flag} `} /> */}
        <img className='w-5 h-5' src={languages.find(lang => lang.code === i18n.language)?.flag} alt='flag' />
        {languages.find(lang => lang.code === i18n.language)?.lang}
        <span className='down-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className='absolute z-[996] top-full mt-2 w-[80px] bg-white border border-gray-200 shadow-lg'>
          <ul>
            {languages.map(lng => (
              <li
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
                className={`text-sm flex text-gray-800 hover:bg-gray-100 py-1 px-4 cursor-pointer gap-1 ${lng.code === i18n.language ? 'selected' : ''}`}
              >
              <img className='w-5 h-5' src={lng.flag} alt={`${lng.lang} flag`} />
                {lng.lang}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
