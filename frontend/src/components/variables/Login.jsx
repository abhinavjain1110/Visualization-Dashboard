import React, { useState } from 'react';

const LoginPage = () => {
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setRedirect(true);
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1000);
  };

  return (
    <div style={{ background: 'black', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'left', minWidth: '400px', background: 'white' }}>
        <h1 style={{ textAlign: 'center'}}>Welcome</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="admin@gmail.com" disabled />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value="admin" disabled />
          </div>
          <button type="submit" className="btn btn-success" style={{ width: '100%' }} onClick={handleLogin}>
            Login
          </button>
        </form>
        {redirect && <p style={{ color: '#4F3BA9', marginTop: '1rem' }}>Redirecting to the dashboard page...</p>}
      </div>
    </div>
  );
};

export default LoginPage;
