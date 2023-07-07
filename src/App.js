import './App.css';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className=''>
      <div className='container mx-auto px-5'>
     <Navbar></Navbar>
     <Home></Home>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
