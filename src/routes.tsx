import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => (
  <Routes>
    <Route
      path='/'
      element={
        <UserProvider>
          <LoginPage />
        </UserProvider>
      }
    />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/shop' element={<ShopPage />} />
  </Routes>
);

export default Router;
