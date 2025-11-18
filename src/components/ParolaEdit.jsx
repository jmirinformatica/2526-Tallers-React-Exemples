import { useState, useEffect } from 'react';

// Estat inicial del formulari
const INITIAL_FORM = {
  word: '',
  translation: ''
};
 
export default function ParolaEdit({ onCancel, onUpdate, parola }) {
  
  const [form, setForm] = useState(parola || INITIAL_FORM);

  // Carregar dades quan canvia la paraula
  // useEffect(() => {
  //   if (parola) {
  //     setForm(parola);
  //   }
  // }, [parola]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.word || !form.translation) return;
    // Passar dades actualitzades al pare (sense l'id, només word i translation)
    const { word, translation } = form;
    onUpdate && onUpdate({ word, translation });
  };

  return (
    <div>
      <div>
        <span>Editar paraula</span>
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
              required
            />
          </div>
          <div>
            <button type="button" onClick={() => setForm(parola)}>
              Restaurar
            </button>
            <button type="submit">
              Actualitzar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
