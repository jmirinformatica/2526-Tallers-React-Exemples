# Instruccions per utilitzar json-server

## Instal·lació

Primer, instal·la json-server globalment o com a dependència de desenvolupament:

```bash
npm install -g json-server
# o
yarn global add json-server
```

## Executar el servidor

En un terminal, executa:

```bash
yarn server
# o si has afegit json-server localment:
npx json-server --watch db.json --port 3000
```

El servidor estarà disponible a `http://localhost:3000`

## Executar l'aplicació

En un altre terminal, executa:

```bash
yarn dev
```

## Funcionalitats implementades

### Càrrega de dades (GET) - amb .then/.catch
- Quan es munta el component, es carreguen les dades del servidor
- Si falla, es carreguen del localStorage com a backup
- Ubicat al `useEffect` inicial

### Afegir paraula (POST) - amb .then/.catch
- S'envia la nova paraula al servidor
- S'actualitza l'estat local i el localStorage
- Ubicat a la funció `handleAdd`

### Actualitzar paraula (PUT) - amb async/await
- S'envia la paraula actualitzada al servidor
- S'actualitza l'estat local i el localStorage
- Ubicat a la funció `handleUpdate`

### Esborrar paraula (DELETE) - amb async/await
- S'esborra la paraula del servidor
- S'actualitza l'estat local i el localStorage
- Ubicat a la funció `handleDelete`

## Endpoints disponibles

- `GET http://localhost:3000/parole` - Obtenir totes les paraules
- `GET http://localhost:3000/parole/:id` - Obtenir una paraula específica
- `POST http://localhost:3000/parole` - Afegir una nova paraula
- `PUT http://localhost:3000/parole/:id` - Actualitzar una paraula
- `DELETE http://localhost:3000/parole/:id` - Esborrar una paraula

## Notes

- El localStorage actua com a backup si el servidor no està disponible
- Les operacions amb async/await mostren una forma més moderna i llegible
- Les operacions amb .then/.catch mostren la forma tradicional de Promises
