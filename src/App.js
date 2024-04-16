import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainScreen from './screens/main_screen';
import MenuScreen from './screens/menu_screen';
import MarketScreen from './screens/market_screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<MainScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/market" element={<MarketScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
