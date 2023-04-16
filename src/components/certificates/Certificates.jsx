import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './certificates.css';

import cert1 from "../../assets/IBM Data Science Certificate.JPG";
import cert2 from "../../assets/Google Data Analytics.JPG";
import cert3 from "../../assets/Google Analytics.JPG";
import cert4 from "../../assets/Transfer Learning for NLP with TensorFlow Hub.JPG";
import cert5 from "../../assets/Bussiness Intelligence Foundation BIFPC.JPG";
import cert6 from "../../assets/Hands-On SQL Server,ManagementStudio,SQL Queries,AzureStudio.JPG";
import cert7 from "../../assets/Google BigQuery PostgreSQL.JPG";
import cert8 from "../../assets/The Complete Introduction to SQL programming.JPG";

SwiperCore.use([Navigation]);
const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'IBM Data Science Specialization',
      issuer: 'Coursera',
      date: 'March 2023',
      image: cert1,
      url: 'https://github.com/ChiaLinz/IBM_Data_Science_Professional_Certificate/blob/main/README.md#Certificates',
      className: 'certificate__image',
    },
    {
      id: 2,
      name: 'Google Data Analytics',
      issuer: 'Coursera',
      date: 'February 2022',
      image: cert2,
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/RL2BH3M7LF3W',
      className: 'certificate__image'
    },
    {
      id: 3,
      name: 'Google Analytics',
      issuer: 'Google',
      date: 'December 2022',
      image: cert3,
      url: 'https://skillshop.exceedlms.com/student/award/iLDBr2hxmdYDR8sMF2AkCBS4',
      className: 'certificate__image'
    },
    {
        id: 4,
        name: 'Transfer Learning for NLP with TensorFlow Hub',
        issuer: 'Coursera',
        date: 'February 2023',
        image: cert4,
        url: 'https://www.coursera.org/account/accomplishments/verify/UFVHGFMZT96F?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
        className: 'certificate__image',
      },
      {
        id: 5,
        name: 'Business Intelligence Foundation Professional Certification BIFPC™',
        issuer: 'CertiProf',
        date: 'February 2023',
        image: cert5,
        url: 'https://drive.google.com/file/d/1PNmz5Zc3niJTcI4DGQu04_8ukOTJd8xE/view',
        className: 'certificate__image',
      },
      {
        id: 6,
        name: 'Hands-On SQL Server,ManagementStudio,SQL Queries,AzureStudio',
        issuer: 'Udemy',
        date: 'October 2022',
        image: cert6,
        url: 'https://www.udemy.com/certificate/UC-f30f8ae6-3df1-4710-85bb-e286e06ac253/',
        className: 'certificate__image',
      },
      {
        id: 7,
        name: 'Google BigQuery & PostgreSQL : Big Query for Data Analysis',
        issuer: 'Udemy',
        date: 'October 2022',
        image: cert7,
        url: 'https://www.udemy.com/certificate/UC-cfc63e08-fccf-4b61-982e-30d0ca132956/',
        className: 'certificate__image',
      },
      {
        id: 8,
        name: ' SQL- The Complete Introduction to SQL programming',
        issuer: 'Udemy',
        date: 'October 2022',
        image: cert8,
        url: 'https://www.udemy.com/certificate/UC-41b9c7b7-9371-49e3-a0f3-4a28f89a03a4/',
        className: 'certificate__image',
      },
  ];

  return (
    <section id="certificates">
      <h5>My Gallery</h5>
      <h2>Certificates</h2>
      <Swiper
        className="container certificates__container"
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {certificates.map((cert) => (
          <SwiperSlide className="certificate" key={cert.id}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.name} className={cert.className}/>
            </a>
            <div className="certificate__details">
              <h2 className='certificate__name'>{cert.name}</h2>
              <p className="certificate__issuer">{cert.issuer}</p>
              <p className="certificate__date">{cert.date}</p>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Certificates;
