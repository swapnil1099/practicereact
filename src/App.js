
import { Outlet } from 'react-router';
import './App.css';
import Header from './compoenets/Header';
import userContext from './utils/userContext';
import {Provider} from "react-redux"
import appStore from './utils/appStore';
function App() {
  return (
    <div className="App">
   <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser:"USER_LOGIN"}}>
      <Header />
      <Outlet/>
      </userContext.Provider>
      </Provider>
    </div>
  );
}



export default App;
