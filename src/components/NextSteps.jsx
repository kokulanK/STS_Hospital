import React from 'react';
import { useTranslation } from 'react-i18next';

const NextSteps = () => {
  const { t } = useTranslation();
  const steps = t('nextSteps.steps', { returnObjects: true }) || [];
  
  return (
    <section className="next-steps-section">
      <h2>{t('nextSteps.title')}</h2>
      <p className="intro">{t('nextSteps.intro')}</p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextSteps;