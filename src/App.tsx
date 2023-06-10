import Login from './pages/login';
import './styles/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import UserDetails from './pages/user-details';
import GeneralDetails from './components/General-details';
import { useState, useEffect } from 'react';


function App() {
  const [users, setUsers] = useState([]);

  const data = async () => {
    const raw = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
    const users = await raw.json()
    setUsers(() => users)

    // console.log(users[0])
  };
  useEffect(() => {data()})
  console.log(users);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard handleSetUsers = {setUsers}/>}>
            <Route path='' element={<Users doUsers = {users}/>}></Route>
            <Route path='users/id' element={<UserDetails />}>
              <Route path='' element={<GeneralDetails />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
          
    </div>
  );
}

export default App;
