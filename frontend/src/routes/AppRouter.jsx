import { Routes, Route } from 'react-router-dom';
import RegisterPage from '../pages/auth/RegisterPage';
import LoginPage from '../pages/auth/LoginPage';
import IngredientsPage from '../pages/ingredients/IngredientsPage';
import Sidebar from '../components/layout/Sidebar';
import Layout from '../components/layout/Layout';
import ProductsPage from '../pages/products/ProductsPage';
import ProductDetail from '../pages/products/ProductDetail';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LandingPage from '../pages/LandingPage';

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/landing"
        element={
            <LandingPage />
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="ingredients" element={<IngredientsPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
