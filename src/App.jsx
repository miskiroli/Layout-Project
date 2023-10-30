import './App.css'

function App() {
 

  return (
    <div className='container-fluid'>
      <header>
  <h2>Cities</h2>
</header>
    <nav>
    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Kezdőlap</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Képek</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Videók</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="true">Account</a>
  </li>
</ul>
    </nav>
   
      <div className=' main-container'>
        <main></main>
        <aside></aside>
      </div>
    
    </div>
  )
}

export default App
