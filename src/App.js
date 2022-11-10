import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './About';
import Contact from './Contact';
import Navbar from './components/Navbar';
import {Routes , Route} from 'react-router-dom'


function App() {
  return (
    <div>
    <Navbar/>
     <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/about' element = {<About/>}/>
     <Route path='/contact' element = {<Contact/>}/>

     </Routes>
      
    </div>
  );
}

export default App;
