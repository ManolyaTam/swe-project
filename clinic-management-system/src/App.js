import './App.css';
import Login from './components/login.component';
import { Calendar, Button } from 'antd';
import { useState } from 'react';
import Profile from './components/profile.component';
function App() {
  const [page, setPage] = useState('login');
  const [appointments, setAppointments] = useState(0);
  return (

    <div className="App">
      <h2>Clinic Management System!</h2>
      <hr />
      {page === 'login' && <Login setLoggedIn={setPage} />}
      {page === 'calendar' &&
        <>
          <Button onClick={() => setPage('profile')}>Back to profile</Button>
          <Button onClick={() => setAppointments(appointments + 1)}>Add appointment</Button>
          <br /><br />
          <Calendar setPage={setPage} />
        </>
      }
      {page === 'profile' && <>
        <Profile appointments={appointments} /><br /><br />
        <Button onClick={() => setPage('record')}>View your medical record</Button> <br /><br />
        <Button onClick={() => setPage('calendar')}>Book an appointment</Button>
      </>
      }

    </div>
  );
}

export default App;
