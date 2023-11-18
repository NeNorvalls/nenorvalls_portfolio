import React from 'react';
import s from './certificates.module.css';
import CertificateCard from './Certificates';

const Certificates = () => {
  return (
    <div className={s.certificatesContainer}>
      <h1 className={s.certificatesHeader}>Online Code Camp Certificates</h1>
      <CertificateCard
        title="Ultimate HTML Certification"
        organization="Codefinity"
        date="November 2023"
        image="https://i.ibb.co/wM5r2gd/ultimate-html-certificate.png"
      />
      <CertificateCard
        title="Introduction to JavaScript"
        organization="Codefinity"
        date="November 2023"
        image="https://i.ibb.co/b2SyfDv/introduction-to-javascript-certificate.png"
      />
      <CertificateCard
        title="CSS Fundamental"
        organization="Codefinity"
        date="November 2023"
        image="https://i.ibb.co/DzNy9K0/css-fundamentals-certificate.png"
      />
      <CertificateCard
        title="Responsive Designs"
        organization="FreeCodeCamp"
        date="October 2023"
        image="https://i.ibb.co/VT6vrKJ/Html-Css-Certificate.png"
      />
    </div>
  );
};

export default Certificates;
