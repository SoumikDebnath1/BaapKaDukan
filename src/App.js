import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopsCategory from './pages/ShopsCategory';
import Product from './pages/Product';
import Cart from './pages/Cart1';
import Loginsignup from './pages/Loginsignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Login from './Components/Login/Login'
import { auth, fs } from '../src/Config/Config';
import { useEffect, useState } from 'react';
import Admin from './Admin/Admin';
function GercurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        fs.collection('users').doc(currentUser.uid).get().then(snapshot => {
          setUser(snapshot.data().FullName);
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return user;
}




function App() {
  const user = GercurrentUser();

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopsCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopsCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopsCategory banner={kid_banner} category="kid" />} />
          <Route path='/Stationary' element={<ShopsCategory category="Stationary" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />

          <Route path='/loginsignup' element={<Loginsignup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
