import './App.css';
import Header from './components/reusable/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './components/reusable/select/select';
import Home from './components/home/home';
import NoCampo from './components/NoCampo/noCampo';

function App() {
  return (
    <div>

  <Header inicioSesion={false}></Header>
  <Home></Home>
  <Select></Select>
  <NoCampo></NoCampo>
    </div>
  );
}

export default App;
