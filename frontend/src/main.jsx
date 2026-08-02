import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { IngredientsProvider } from './context/IngredientsContext.jsx';
import { ProductsProvider } from './context/ProductsContext.jsx';
import { UiProvider } from './context/UiContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <IngredientsProvider>
          <ProductsProvider>
            <UiProvider>
              <App />
            </UiProvider>
          </ProductsProvider>
        </IngredientsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
