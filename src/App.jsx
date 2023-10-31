import './App.css'

import Home from './components/Home';
import Videos from './components/Videos';
import Pictures from './components/Pictures';
import Account from './components/Account';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
 

  return (
    <BrowserRouter>
    <div className='container-fluid'>
      <header className='row'>
  <h2 className='col'>Kedvenc videóim és képeim</h2>
</header>
    <nav className='row'>
    <ul className="nav col">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Kezdőlap</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/pictures">Képek</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/videos">Videók</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to="/account">Account</Link>
  </li>
</ul>
    </nav> 
 
   

    </div>
    <Routes>
      <Route index element= {<Home />} />
      <Route path='/pictures' element = {<Pictures />}/>
      <Route path='/videos' element = {<Videos />}/>
      <Route path='/account' element = {<Account />}/>

      <Route path='*' element = {<h3>PAGE NOT FOUND</h3>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
