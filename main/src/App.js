import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import Guidelines from './pages/Guidelines';
import './styles/App.css';
import { Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Sales from './pages/Sales1';
import DashboardB from './pages/DashboardB';
import Nearby from './pages/Nearby';
import Footer from './components/Footer';


function App() {
  const [type, setType] = useState(0) // 0-farmer 1-buyer
  const [login, setLogin] = useState(false) 
  const [ search,setSearch ] = useState('');
  const [profile, setProfile] = useState({
    uid: 333,
    company: null,
    email: null,
    password: null,
    contact: null,
    profile: 1,
    location: null,
    rating: null,
    picture: null,
    name: null
  })
  const nav = useNavigate()

  return (
    <div className="App">
      {profile.uid?<Navbar setLogin={setLogin}/>:null}
      {/* <Products/> */}
      {/* <Dashboard/> */}
      {/* <Upload/> */}
      <Routes>
        <Route path='/dashboard' element={profile==0?<Dashboard type={type} profile={profile} setProfile={setProfile}/>:<DashboardB type={type} profile={profile} setProfile={setProfile}/>}/>
        <Route path='/upload' element={<Upload type={type} profile={profile}/>}/>
        <Route path='/register' element={<Register  login={login} setLogin={setLogin} profile={profile} setProfile={setProfile}/>}/>
        <Route path='/login' element={<Login login={login} setLogin={setLogin} setProfile={setProfile}/>}/>
        <Route path='/guidlines' element={<Guidelines/>}/>
        <Route path='/products' element={<Products setSearch={setSearch} search={search} profile={profile}/>}/>
        <Route path='/sales' element={<Sales setSearch={setSearch} search={search}/>}/>
        <Route path='/nearby' element={<Nearby/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
