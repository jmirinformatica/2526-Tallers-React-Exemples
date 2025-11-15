
import { useState, useContext } from 'react';
import { UserContext } from '../App';

const API_URL = `${import.meta.env.VITE_API_URL}/users`;

export default function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUsuari } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('No es pot connectar amb el servidor');
      const users = await res.json();
      const found = users.find(u => u.username === username.trim());
      if (found) {
        setUsuari({ username: found.username });
      } else {
        setError('Usuari no trobat');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
        {error && <div style={{ color: 'crimson', fontSize: '14px' }}>{error}</div>}
        <button
          type="submit"
          style={{ padding: '10px', cursor: loading ? 'not-allowed' : 'pointer' }}
          disabled={loading}
        >
          {loading ? 'Validant...' : 'Entrar'}
        </button>
      </form>
    </section>
  );
}
