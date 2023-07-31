import './App.css';
import Card from './component/card';
import DataCard from './component/card';
import Header from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/about';
import TotalPrediction from './component/total-prediction';
import FormForInsertion from './component/formforinsertion';
import Privacy from './component/privacy';
import ContactUs from './component/contactUs';
import Footer from './component/footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className='header'>
      <div>
      <div className='heading'>Humsafar</div>
      </div>
      </div>
    <Routes>
    <Route path='/' element={<DataCard/>}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/totalprediction" element={<TotalPrediction />}></Route>
    <Route path="/05499b5ef634" element={<FormForInsertion />}></Route>
    <Route path="/Privacypolicy" element={<Privacy/>}></Route>
    <Route path="/contactUs" element={<ContactUs/>}></Route>
    </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
