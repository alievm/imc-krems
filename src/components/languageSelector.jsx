import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'uz', lang: 'O\'zb', flag: 'fi-uz' },
  { code: 'en', lang: 'Eng', flag: 'fi-gb' },
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
        <span className={`fi ${languages.find(lang => lang.code === i18n.language)?.flag} `} />
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
        <div className='absolute z-[996] top-full mt-2 max-w-xs bg-white border border-gray-200 shadow-lg'>
          <ul>
            {languages.map(lng => (
              <li
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
                className={`text-sm flex text-gray-800 hover:bg-gray-100 py-1 px-4 cursor-pointer gap-1 ${lng.code === i18n.language ? 'selected' : ''}`}
              >
                <span className={`fi ${lng.flag}`} />
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
