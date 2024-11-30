import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Interface para erros do Firebase
interface FirebaseError extends Error {
  code: string;
  message: string;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error: unknown) => {
          if (error instanceof Error && 'code' in error) {
            const firebaseError = error as FirebaseError;  
            const errorCode = firebaseError.code;
            const errorMessage = firebaseError.message;
            console.log(errorCode);
            console.log(errorMessage);
            setError('Erro ao fazer login: ' + errorMessage);
          } else {
            setError('Erro desconhecido');
          }
        });
    } catch (err) {
      if (err instanceof Error) {
        setError('Erro ao tentar fazer login: ' + err.message);
      } else {
        setError('Erro desconhecido');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;

