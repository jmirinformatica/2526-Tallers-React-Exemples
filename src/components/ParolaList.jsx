import { useState } from 'react';
import Parola from './Parola';
import AddParola from './AddParola';

const INITIAL_PAROLE = [
  { id: 1, word: 'ciao', translation: 'hola' },
  { id: 2, word: 'a domani', translation: 'Fins demà' },
  { id: 3, word: 'grazie', translation: 'gràcies' },
  { id: 4, word: 'per favore', translation: 'si us plau' },
  { id: 5, word: 'acqua', translation: 'aigua' },
  { id: 6, word: 'vino', translation: 'vi' },
  { id: 7, word: 'birra', translation: 'cervesa' },
  { id: 8, word: 'pane', translation: 'pa' },
  { id: 9, word: 'formaggio', translation: 'formatge' },
  { id: 10, word: 'prosciutto', translation: 'pernil' } 
];

export default function ParolaList() {
  const [parole, setParole] = useState(INITIAL_PAROLE);
  const [showForm, setShowForm] = useState(false);
  const [nextId, setNextId] = useState(INITIAL_PAROLE.length + 1);

  // Elimina una paraula per id
  const handleDelete = (id) => {
    setParole(prev => prev.filter(p => p.id !== id));
  };

  // Afegir nova paraula
  const handleAdd = (data) => {
    const newParola = { id: nextId, ...data };
    setNextId(id => id + 1);
    setParole(prev => [...prev, newParola]);
    setShowForm(false);
  };

  // Actualitzar paraula existent
  const handleUpdate = (id, updatedData) => {
    setParole(prev => prev.map(p => 
      p.id === id ? { ...p, ...updatedData } : p
    ));
  };

  return (
    <section>
      <div>
        <h2>Vocabulari</h2>
        <button
          type="button"
          onClick={() => setShowForm(v => !v)}
        >
          {showForm ? 'Amagar formulari' : 'Nova paraula'}
        </button>
      </div>

      {showForm && (
        <AddParola 
          onCancel={() => setShowForm(false)} 
          onAdd={handleAdd}
        />
      )}

      <ul>
        {parole.map(p => (
          <li key={p.id}>
            <Parola 
              parola={p} 
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
