import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainScreen from './screens/main_screen';
import MenuScreen from './screens/menu_screen';
import MarketScreen from './screens/market_screen';
import CartScreen from './screens/cart_screen';
import OrderScreen from './screens/orders_screen';
import ProfileScreen from './screens/profile_screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<MainScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/market" element={<MarketScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
