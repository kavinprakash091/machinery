import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/news" element={<NewsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
