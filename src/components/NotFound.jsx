export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - No trobat</h1>
      <p>Ups! Aquesta ruta s'ha perdut entre paraules...</p>
      <img 
        src="https://http.cat/404" 
        alt="Gat amb estat 404" 
        style={{ maxWidth: '320px', width: '100%', borderRadius: '8px', marginTop: '1rem' }}
      />
      <p style={{ marginTop: '1rem' }}>
        Torna a <a href="/">l'inici</a> o explora el <a href="/parole">vocabulari</a>.
      </p>
    </section>
  );
}
