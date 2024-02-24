
import { Outlet } from 'react-router';
import './App.css';
import Header from './compoenets/Header';


function App() {
  return (
    <div className="App">

      <Header />
      <Outlet/>
    </div>
  );
}



export default App;
