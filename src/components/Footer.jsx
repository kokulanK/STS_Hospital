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
            <a href="https://maps.google.com/?q=130+1st+Cross+Street+Jaffna+Sri+Lanka" target="_blank" rel="noreferrer">
              📍 {t('footer.map')}
            </a>
          </p>
        </div>
      </div>
      
      {/* Bottom bar with copyright and KOSA TECH branding */}
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
        <div className="kosa-credit">
          <img 
            src="/KOSA_Tech.svg" 
            alt="KOSA TECH Logo" 
            className="kosa-logo"
          />
          <span>{t('footer.createdBy')} <strong>{t('footer.kosaCompany')}</strong></span>
          <a 
            href="https://www.instagram.com/kosa_tech_pvt_ltd" 
            target="_blank" 
            rel="noreferrer"
            className="insta-link"
          >
            📷 Instagram
          </a>
          <span className="kosa-phone">📞 {t('footer.kosaPhone')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;