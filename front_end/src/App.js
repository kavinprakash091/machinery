import { Route, Routes } from 'react-router-dom';
import FixedNavbar from './components/FixedNavbar';
import HomeScreen from './screens/HomeScreen';
import MachineScreen from './screens/MachineScreen';
import MachinesScreen from './screens/MachinesScreen';
import NewsScreen from './screens/NewsScreen';
import SigninScreen from './screens/SigninScreen';
import SubMachineScreen from './screens/SubMachineScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <FixedNavbar />
      <ToastContainer position="top-right mt-1" limit={1} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-in" element={<SigninScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/machines" element={<MachinesScreen />} />
        <Route path="/machines/:machine_name" element={<SubMachineScreen />} />
        <Route path="/machine/:machine_name" element={<MachineScreen />} />
      </Routes>
    </div>
  );
}

export default App;
