import './App.css'

function App() {
 

  return (
    <div className='container-fluid'>
      <header className='row'>
  <h2 className='col'>Cities</h2>
</header>
    <nav className='row'>
    <ul className="nav col">
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
   
      <div className='row main-container'>
        <main className='col-8'>
          <h3>Videók</h3>
          <div className='container'>
          



<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ckom3gf57Yw"></iframe>
            </div>
        </div>
        <div class="col-md-4">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CD-E-LDc384"></iframe>
            </div>
        </div>
        <div class="col-md-4">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/E0ozmU9cJDg"></iframe>
            </div>
        </div>
    </div>
</div>




          </div>
        </main>
        <aside className='col-4'>
          <h3>Archiv tartalom</h3>
          <ul>
          <li>Metallica-The unforgiven</li>
          <li>Metallica-Enter Sadman</li>
          <li>Metallica-Master of puppets</li>
          <li>Kedvenc kutyám</li>
          <li>Autóm 1</li>
          <li>Autóm 2</li>
          </ul>
        </aside>
      </div>
      <footer className='row'>
  <p className='col'>Footer</p>
</footer>
    </div>
  )
}

export default App
