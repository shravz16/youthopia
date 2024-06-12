import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    sessionStorage.setItem('language',language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className='lang-button' onClick={() => changeLanguage('en')}>English</button>
      <button className='lang-button' onClick={() => changeLanguage('ta')}>தமிழ்</button>
    </div>
  );
}

export default LanguageSwitcher;