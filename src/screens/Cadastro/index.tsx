import React, { useCallback, useState } from 'react';
import './style.css';
import Home from '../Home-Page';
import Login from '../Login';

interface IFormState {
  email: string;
  password: string;
  repeat_password: string;
}

const Cadastro = () => {

  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
    repeat_password: "",
  });


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {email, password, repeat_password} = formState;

    if(!email || !password || !repeat_password) {

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
        <p className='cadastro_text'>Cadastro</p>

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
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
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Repita sua Senha</label>
            <input 
                type="password" 
                className="form-control" 
                id="repeat_password" 
                name="repeat_password" 
                required 
                value={formState.repeat_password}
                    onChange={(event) => 
                    setFormState({
                        ... formState,
                        repeat_password: event.currentTarget?.value || "",
                    })
                    }
                />
            </div>
            <button type="submit" className="btn btn-primary btn_acessar">Cadastrar</button>
            
        </form>

        <button type="submit" className="btn btn-primary btn_cadastro" onLoad={<Login />}={}>Já sou Usuário</button>

        </div>
    </div>    
</div>        
);
};

export default Cadastro;