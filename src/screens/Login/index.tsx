import React, { useCallback, useState } from 'react';
import './style.css';
import Home from '../Home-Page';

interface IFormState {
  email: string;
  password: string;
}

const Login = () => {

  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
  });


  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {email, password} = formState;

    if(!email || !password) {

      window.alert("Preencha todos os campos!");

      setIsLoggedIn(false);

      return;
    }

    setIsLoggedIn(true);

  },[formState]);

  if(isLoggedIn){
    return <Home />;
  }


  return (
    <div className='back'>
        <div className='box'>
            <div className='container mt-5'>
            <p className='login_text'>Login</p>

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
                <button type="submit" className="btn btn-primary btn_acessar">Entrar</button>
            </form>

            </div>
        </div>    
    </div>        
  );
};

export default Login;


