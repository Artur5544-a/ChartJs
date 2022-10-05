import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ChartBar } from './Components/ChartBar/ChartBar';
import { ChartLine } from './Components/ChartLine/ChartLine';
import { ChartPie } from './Components/ChartPie/ChartPie';
import { ChartRadar } from './Components/ChartRadar/ChartRadar';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1> Chart.js</h1>
      <Routes>
        <Route path='/ChartPie' element={<ChartPie />}/>
        <Route path='/ChartLine' element={<ChartLine />}/>
        <Route path='/ChartRadar' element={<ChartRadar/>}/>
        <Route path='/ChartBar' element={<ChartBar/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
