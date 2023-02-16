import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Mywork from './views/Mywork';
import Navbar from './views/navbar';
import Contact from './views/contact';
import Footer from './views/footer';
import Resume from './views/resume';

function App() {
  return (

  <Routes> 
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/mywork' element={<Mywork/>}/>
    <Route exact path='/navbar' element={<Navbar/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/footer' element={<Footer/>}/>
    <Route exact path='/resume' element={<Resume/>}/>
  </Routes>
    
  );
}

export default App;
