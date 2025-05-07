import { React } from 'react';
import { Contact } from './Contact.jsx';
import { Schedule } from './Schedule.jsx';
import { Direction } from './Direction.jsx';

export const FooterA = () => {
  return (
    <div className="FooterA">
    <h2 id="Logo">La Verdad</h2>
    <Contact />
    <Schedule />
    <Direction />
    </div>
  );
}
