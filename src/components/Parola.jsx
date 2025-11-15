import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParolaEdit from './ParolaEdit';

export default function Parola({ parola, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  if (!parola) return null;

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    onDelete && onDelete(parola.id);
  };

  return (
    <>
      <div>
        <div>
          <span>{parola.word}</span>
          <span> → </span>
          <span>{parola.translation}</span>
        </div>
        <div>
          <Link
            to={`/parole/${parola.id}`}
            style={{ marginRight: '8px' }}
          >
            Veure
          </Link>
          <button
            type="button"
            onClick={() => setIsEditing(v => !v)}
          >
            {isEditing ? 'Tancar' : 'Editar'}
          </button>
          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
          >
            Esborrar
          </button>
        </div>
      </div>

      {isEditing && (
        <div>
          <ParolaEdit 
            parola={parola}
            onCancel={() => setIsEditing(false)}
            onUpdate={(updatedData) => {
              onUpdate && onUpdate(parola.id, updatedData);
              setIsEditing(false);
            }}
          />
        </div>
      )}

      {showDeleteModal && (
        <div>
          <div>
            <div>
              <div>
                <h6>Confirmar esborrament</h6>
                <button 
                  type="button" 
                  onClick={() => setShowDeleteModal(false)}
                >
                  X
                </button>
              </div>
              <div>
                <p>Segur que vols esborrar "{parola.word}"?</p>
              </div>
              <div>
                <button 
                  type="button" 
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel·lar
                </button>
                <button 
                  type="button" 
                  onClick={handleConfirmDelete}
                >
                  Esborrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


