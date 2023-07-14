import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import { Route, Routes, useLocation } from 'react-router-dom/dist';

function App() {
  let location = useLocation();
  const pathname = ['/contact'];

  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {pathname.includes(location.pathname) ? '' : <Footer />}
    </div>
  );
}

export default App;
