
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbaar from './component/Navbaar'
import Home from './component/Home'
import Edit from './component/Edit';
import Details from './component/Details';
import Register from './component/Register'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
     <Navbaar/>
     <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/register' Component={Register}/>
        <Route exact path='/edit/:id' Component={Edit}/>
        <Route exact path='/view/:id' Component={Details}/>
     </Routes>
     
    </>
  );
}

export default App;
