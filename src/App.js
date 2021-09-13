import Header from './pages/Header';
import Quotes from './pages/Quotes';
import About from './pages/About';
import './App.css';
import Footer from './pages/Footer';
import Navbar from './components/Navbar';
import Work from './pages/Work';

function App() {
   return (
      <div className='App'>
         <div className='wrapper'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Quotes />
            <Footer />
         </div>
      </div>
   );
}

export default App;
