import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import MachineScreen from './screens/MachineScreen';
import NewsScreen from './screens/NewsScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/machines" element={<MachineScreen />} />
      </Routes>
    </div>
  );
}

export default App;
