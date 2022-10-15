import './App.css';
import Navbar from './components/Navbar';
// import Herosection from './components/Herosection';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          {/* <Route path='/classes' element={<Class/>}/> */}

        </Routes>
        <Footer/>
      </Router> 
    </>
    </div>
  );
}

export default App;
