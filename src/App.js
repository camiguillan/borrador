import './App.css';
import Header from './components/reusable/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './components/reusable/select/select';
import Home from './components/home/home';

function App() {
  return (
    <div>

  <Header inicioSesion={true}></Header>
  <Home></Home>
  <Select></Select>
    </div>
  );
}

export default App;
