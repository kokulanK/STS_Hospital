import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="header">
      <div className="header-container">
        <img 
          src="/sample-logo.png" 
          alt="Sample Hospital Logo" 
          className="logo"
        />
        <div className="header-text">
          <h1>{t('header.title')}</h1>
          <p className="tagline">{t('header.tagline')}</p>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;