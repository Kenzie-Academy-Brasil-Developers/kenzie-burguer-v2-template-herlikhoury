import Router from './routes';
import { GlobalStyles } from './styles/global';
import { UserProvider } from './contexts/UserContext';
import { ProductsCartProvider } from './contexts/productsCartContext';

const App = () => (
  <UserProvider>
    <ProductsCartProvider>
      <GlobalStyles />
      <Router />
    </ProductsCartProvider>
  </UserProvider>
);

export default App;
