import React from 'react';

const Account = () => {
    return (<>
        <div className='row main-container'>
        <main className='col-8'>
        <h3>Belépés vagy regisztráció</h3>
        <div className="container">
             <div className="row d-flex justify-content-center align-items-center "> 
                
                 <div className='col-md-6'>
                    <h2>Belépés</h2>
                    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email cím</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail cimed'/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Jelszó</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Jelszavad'/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="text-center ">
  <button type="submit" class="btn btn-success">Belépés</button>
  <button type="submit" class="btn btn-danger">Mégsem</button>
  </div>
</form>
                    

                 </div>
                 <div className='col-md-6'>
                    <h2>Regisztráció</h2>
                    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email cím</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail cimed'/>
                 </div>
                 <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Emlékezz rám</label>
    <div className="text-center my-8">
   <button type="submit" class="btn btn-success ">Belépés</button>
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
</>
    );
}

export default Account;
