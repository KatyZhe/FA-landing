import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom/dist';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={''} />
        <Route path="/" element={''} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
