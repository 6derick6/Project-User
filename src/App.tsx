import React, { useCallback, useState } from 'react';
import './App.css';

interface IFormState {
  email: string;
  password: string;
}

const App = () => {

  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
  });


  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {email, password} = formState;

    if(!email || !password) {
      return;
    }

  },[]);


  return (
    <div className='container mt-5'>
      <p className='fs-1 mb-5'>Login</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" name="email" 
            required 
            value={formState.email}
            onChange={(event) => 
              setFormState({
                ... formState,
                email: event.currentTarget?.value || "",
              })
            }
            />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            required 
            value={formState.password}
            onChange={(event) => 
              setFormState({
                ... formState,
                password: event.currentTarget?.value || "",
              })
            }
            />
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>

    </div>
  );
};

export default App;


