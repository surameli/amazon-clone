import { useContext, useEffect } from 'react';
import './App.css';
import Routeing from './Router';
import { DataContext } from './Components/DataProvider/DataProvider';
import { auth } from './Utility/firebase';
import { Type } from './Utility/action.type';

function App() {
  const [{user}, dispatch] = useContext(DataContext);
  useEffect(() =>{
    auth.onAuthStateChanged((authuser) =>{
      if (authuser) {
        dispatch({
          type:Type.SET_USER,
          user: authuser
        })
        
      } else {
        dispatch({
          type:Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
     <Routeing/>
    </div>
  );
}

export default App;
