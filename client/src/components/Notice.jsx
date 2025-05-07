import { React } from 'react';
import './Notice.css';

export const Notice = () => {
  return (
    <div className="Notice">
    <img style={{
      width: '300px',
      height: 'auto',
    }} src="https://cloudfront-us-east-1.images.arcpublishing.com/artear/BRAGVBGFG5CLLI4ANX442NJSQA.jpg" />
      <h2>Paro general.</h2>
      <p>Hoy los micros no funcionan.</p>
      <p>Pobre gente la que tiene que ir a trabajar, aparte de eso
    pierden las acistencia del dia y a fin de mes cobran menos,
    o sea que el que pierde siempre es el trabajador.</p>
    </div>
  );
}
