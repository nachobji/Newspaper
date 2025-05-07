import { React } from 'react';
import { Notice } from './Notice.jsx';
import { Notice2 } from './Notice2.jsx';
import { Notice3 } from './Notice3.jsx';
import { Notice4 } from './Notice4.jsx';
import './Home.css';

export const Home = () => {
  return (
    <div className="Home">
      <Notice />
      <Notice2 />
      <Notice3 /> 
      <Notice4 />
    </div>
  );
}
