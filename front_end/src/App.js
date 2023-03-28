import { Route, Routes } from 'react-router-dom';
import FixedNavbar from './components/FixedNavbar';
import HomeScreen from './screens/HomeScreen';
import MachineScreen from './screens/MachineScreen';
import NewsScreen from './screens/NewsScreen';
import SubMachineScreen from './screens/SubMachineScreen';

function App() {
  return (
    <div className="App">
      <FixedNavbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/machines" element={<MachineScreen />} />
        <Route path="/machines/:machine_name" element={<SubMachineScreen />} />
        <Route path="/machine/:machine_name" element={<MachineScreen />} />
      </Routes>
    </div>
  );
}

export default App;
