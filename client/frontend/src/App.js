import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Footer from './components/Footer/Footer';
import NavBar from "./components/navbar/Navbar";
import Dashboard from './Dashboard/Dashboard';
import About from './pages/AboutUs/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Order from './pages/Order/Order';
import PipeOrder from './pages/Order/PipeOrder/PipeOrder';
import Scrap from './pages/Order/Scrap/Scrap';
import Products from './pages/Products/Products';

function App() {
 const Admin = false;

  const CheckAdmin = () => {
    return  Admin ?   <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes> : <>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/pipe-order-form' element={<PipeOrder/>}/>
      <Route path='/scrap-order' element={<Scrap/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    <Footer/></>;
  }
 
  return (
    <div className='App'>

    <Router>
    <CheckAdmin/>
    </Router>
    </div>
  );
}

export default App;
