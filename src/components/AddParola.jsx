import { useState } from 'react';

// Estat inicial del formulari
const INITIAL_FORM = {
  word: '',
  translation: ''
};
 
export default function AddParola({ onCancel, onAdd }) {
  
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.word || !form.translation) return;
    // Passar dades al pare
    onAdd && onAdd(form);
    // Netejar formulari
    setForm(INITIAL_FORM);
  };

  return (
    <div>
      <div>
        <span>Afegir paraula nova</span>
        <button type="button" onClick={onCancel}>
          Tancar
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Paraula</label>
            <input
              type="text"
              name="word"
              value={form.word}
              onChange={handleChange}
              placeholder="Escriu la paraula..."
              required
            />
          </div>
          <div>
            <label>Traducció</label>
            <input
              type="text"
              name="translation"
              value={form.translation}
              onChange={handleChange}
              placeholder="Escriu la traducció..."
              required
            />
          </div>
          <div>
            <button type="button" onClick={() => setForm(INITIAL_FORM)}>
              Netejar
            </button>
            <button type="submit">
              Afegir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
