import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';

export default function Header() {
  const { usuari, setUsuari } = useContext(UserContext);

  const handleLogout = () => {
    setUsuari(null);
  };

  return (
    <header>
      <nav style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? '700' : '400',
              textDecoration: isActive ? 'underline' : 'none'
            })}
            end
          >
            Inici
          </NavLink>
          <NavLink
            to="/parole"
            style={({ isActive }) => ({
              fontWeight: isActive ? '700' : '400',
              textDecoration: isActive ? 'underline' : 'none'
            })}
          >
            Vocabulari
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? '700' : '400',
              textDecoration: isActive ? 'underline' : 'none'
            })}
          >
            About
          </NavLink>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {usuari && (
            <span style={{ fontSize: '14px', color: '#555' }}>
              👤 {usuari.username}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{ padding: '4px 12px', cursor: 'pointer', textDecoration: 'underline', background: 'none', border: 'none', color: 'inherit' }}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
