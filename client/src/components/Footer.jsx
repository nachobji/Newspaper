import { React } from 'react';
import './Footer.css';
import { FooterA } from './FooterA.jsx';
import { Pd } from './Pd.jsx';

export const Footer = () => {
  return (
    <div className="Footer">
      <FooterA />
      <Pd />
    </div>
  );
}
