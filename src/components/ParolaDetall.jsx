import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_URL = `${import.meta.env.VITE_API_URL}/parole`;
const STORAGE_KEY = 'vocabulari-parole';

export default function ParolaDetall() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    setItem(null);
    
    fetch(`${API_URL}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('No s\'ha pogut carregar la paraula');
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error carregant paraula:', err);
        if (!isMounted) return;
        
        // Fallback a localStorage
        let found = false;
        try {
          const stored = localStorage.getItem(STORAGE_KEY);
          if (stored) {
            const arr = JSON.parse(stored);
            const foundItem = arr.find((p) => String(p.id) === String(id));
            if (foundItem) {
              setItem(foundItem);
              found = true;
            }
          }
        } catch (localErr) {
          console.error('Error localStorage:', localErr);
        }
        
        if (!found) {
          setError(err.message);
        }
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <section>
      <div style={{ marginBottom: '12px' }}>
        <h2 style={{ margin: 0 }}>Detall de la paraula</h2>
        <Link to="/parole">← Tornar al llistat</Link>
      </div>

      {loading ? (
        <p>Carregant...</p>
      ) : error && !item ? (
        <p style={{ color: 'crimson' }}>Error: {error}</p>
      ) : item ? (
        <div>
          <p><strong>Paraula:</strong> {item.word}</p>
          <p><strong>Traducció:</strong> {item.translation}</p>
          <hr />
          <p>
            <strong>Definició:</strong>{' '}
            Paraula italiana "{item.word}" que significa "{item.translation}".
          </p>
        </div>
      ) : (
        <p>No s'ha trobat la paraula.</p>
      )}
    </section>
  );
}
