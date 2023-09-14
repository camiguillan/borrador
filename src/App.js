import './App.css';
import Header from './components/reusable/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './components/reusable/select/select';
import Home from './components/home/home';
import NoCampo from './components/NoCampo/noCampo';
import CrearCampo from './components/crearCampo/crearCampo';
import { useEffect, useState } from 'react';

function App() {

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Add a slight delay (e.g., 100ms) to ensure the animation is applied when the component is fully rendered.
    const animationTimeout = setTimeout(() => {
      setAnimate(false);
    }, 1000);

    // Clean up the timeout if the component unmounts before the animation triggers.
    return () => clearTimeout(animationTimeout);
  }, []);
console.log(animate);

  return (
    <div>

  <Header inicioSesion={true}></Header>
  <div className={`fade-border ${animate ? 'fade-color' : ''}`}></div>
  <Home></Home>
  <Select></Select>
  <NoCampo></NoCampo>
  <CrearCampo></CrearCampo>

    </div>
  );
}

export default App;
