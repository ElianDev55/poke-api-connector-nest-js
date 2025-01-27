# API de Pokémon

Esta es una API de Pokémon construida con Nest.js que proporciona información sobre Pokémon.

## Clonar el repositorio

Para clonar este repositorio, sigue estos pasos:

1. Abre una terminal.
2. Ejecuta el siguiente comando:

```
git clone https://github.com/ElianDev55/poke-api-connector-nest-js.git
```

3. Ingresa al directorio del proyecto:

```
cd tu-repositorio
```

## Iniciar la aplicación

Para iniciar la aplicación, sigue estos pasos:

1. Asegúrate de tener Node.js y npm instalados en tu sistema.
2. Instala las dependencias del proyecto:

```
npm install
```

3. Inicia la aplicación:

```
npm run start
```

La aplicación se iniciará y estará disponible en `http://localhost:3000`.

## Rutas disponibles

La API ofrece las siguientes rutas:

1. **Obtener todos los Pokémon**
   - Método: GET
   - Ruta: `/api/pokemon`
   - Descripción: Devuelve información sobre los primeros 100 Pokémon.

2. **Obtener un Pokémon por ID**
   - Método: GET
   - Ruta: `/api/pokemon/:id`
   - Descripción: Devuelve información detallada sobre un Pokémon específico.
   - Parámetro: `id` - El ID del Pokémon.

3. **Obtener un Pokémon y sus tipos en diferentes idiomas**
   - Método: GET
   - Ruta: `/api/pokemonAndTypes/:id`
   - Descripción: Devuelve información sobre un Pokémon y sus tipos en diferentes idiomas.
   - Parámetro: `id` - El ID del Pokémon.

## Uso

Puedes utilizar herramientas como cURL, Postman o un navegador web para hacer solicitudes a estas rutas y obtener la información de los Pokémon.

Ejemplo de uso con cURL:

```
curl http://localhost:3000/api/pokemon/1
```

Este comando obtendrá la información del Pokémon con ID 1.