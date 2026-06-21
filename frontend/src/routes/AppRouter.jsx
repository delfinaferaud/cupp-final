import { Routes, Route } from 'react-router-dom';
import IngredientsPage from '../pages/ingredients/IngredientsPage';
import IngredientsCard from '../pages/ingredients/IngredientsCard';
import IngredientsForm from '../pages/ingredients/IngredientsForm';
import Sidebar from '../components/layout/Sidebar';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="ingredients" element={<IngredientsPage />} />
        <Route path="ingredients/:id" element={<IngredientsCard />} />
        <Route path="ingredients/edit/:id" element={<IngredientsForm />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
