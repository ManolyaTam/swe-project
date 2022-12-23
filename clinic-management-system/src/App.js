import './App.css';
import Login from './components/login.component';
import { Calendar } from 'antd';
import { useState } from 'react';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (

    <div className="App">
      <h2>Clinic Management System!</h2>
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {loggedIn && <>
        <Calendar />
      </>}
    </div>
  );
}

export default App;
