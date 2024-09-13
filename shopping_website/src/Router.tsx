import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Navbar from './components/Navbar/Navbar';
import NoPage from './pages/NoPage';
import ClothingsCards from './components/Scrolling/ClothingsCards/ClothingsCards';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NoPage />
              <ClothingsCards />
            </>
          }
        />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
