import { React } from 'react';
import { Home } from '../src/components/Home.jsx';
import { Header } from '../src/components/Header.jsx';
import { Footer } from '../src/components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Footer />
    </div>
  )
}

export default App
