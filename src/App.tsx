import Login from './pages/login';
import './styles/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import UserDetails from './pages/user-details';
import GeneralDetails from './components/General-details';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Login />}>
            <Route path='users' element={<Users />}></Route>
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
