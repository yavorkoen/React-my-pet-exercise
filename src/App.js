import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/Footer';


function App() {
  return (
    <div classNameName="App">
      <div id="container">


        < Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </div>
  );
}

export default App;
