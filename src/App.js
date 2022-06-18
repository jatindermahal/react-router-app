import Footer from './footer/Footer';
import Navigation from './nav/navigation';
import Main from './Routes/main/main';
import Error from './Routes/Error/Error';
import {Routes, Route} from "react-router-dom";

import './App.css';
import Clock from './Clock/Clock';

function App() {
  return (
    <div className="App">
        <Navigation />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/hello' element={<><Clock /></>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
