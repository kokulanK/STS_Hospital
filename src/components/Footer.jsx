import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('footer.contact')}</h3>
          <p>{t('footer.address')}</p>
          <p>{t('footer.email')}</p>
          <p>{t('footer.phone1')}</p>
          <p>{t('footer.phone2')}</p>
        </div>
        
        <div className="footer-section">
          <h3>{t('footer.hoursTitle')}</h3>
          <p>{t('footer.hoursLine1')}</p>
          <p>{t('footer.hoursLine2')}</p>
          <p><em>{t('footer.hoursLine3')}</em></p>
          <p className="map-link">
            <a href="#" target="_blank" rel="noreferrer">
              📍 {t('footer.map')}
            </a>
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="hospital-copyright">{t('footer.copyright')}</p>
        
        <div className="kosa-section">
          <a 
            href="https://www.instagram.com/kosa_tech_pvt_ltd" 
            target="_blank" 
            rel="noreferrer"
            className="kosa-logo-link"
          >
            <img src="/KOSA_Tech.svg" alt="KOSA TECH" className="kosa-logo" />
          </a>
          <div className="kosa-info">
            <span className="kosa-credit">
              {t('footer.createdBy')} <strong>{t('footer.kosaCompany')}</strong>
            </span>
            <span className="kosa-phone">📞 {t('footer.kosaPhone')}</span>
          </div>
        </div>
        
        <p className="kosa-rights">{t('footer.kosaRights')}</p>
      </div>
    </footer>
  );
};

export default Footer;