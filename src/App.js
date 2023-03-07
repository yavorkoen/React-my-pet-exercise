import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import CreatePage from './components/CreatePage';
import Details from './components/details/DetailsPage';
import EditPage from './components/EditPage';
import MyPetsPage from './components/myPets/MyPetsPage';


function App() {
  return (
    <div classNameName="App">
      <div id="container">


        < Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/details/:petId' element={<Details />} />
            <Route path='/edit/petId' element={<EditPage />} />
            <Route path='/my-pets' element={<MyPetsPage />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </div>
  );
}

export default App;
