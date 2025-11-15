import { useState, useContext } from 'react';
import { UserContext } from '../App';

export default function Login() {
  const [username, setUsername] = useState('');
  const { setUsuari } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      // Establim l'usuari al context
      setUsuari({ username: username.trim() });
    }
  };

  return (
    <section style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h1>Login</h1>
      <p>Introdueix el teu nom d'usuari per accedir</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '4px' }}>
            Usuari
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
            placeholder="Introdueix el teu nom"
          />
        </div>

        <button
          type="submit"
          style={{ padding: '10px', cursor: 'pointer' }}
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
