# Examen: Aplicación de Recetas con Favoritos en React

## Introducción

El objetivo de este proyecto es desarrollar una aplicación de recetas utilizando **React**. Los alumnos deben crear una interfaz en la que los usuarios puedan explorar recetas y guardar sus favoritas. La aplicación utilizará **react-router** para la navegación entre páginas, **useContext** para gestionar las recetas guardadas como favoritas, y **Custom Hooks** para encapsular la lógica de búsqueda de recetas.

## Requerimientos Técnicos

La aplicación debe implementar lo siguiente:

- **useState**: Para manejar el estado de las recetas, los favoritos y las búsquedas.
- **useEffect**: Para cargar las recetas desde un archivo JSON y actualizar el estado de las búsquedas y favoritos en tiempo real.
- **react-router**: Para navegar entre las páginas de la lista de recetas, detalles de cada receta, y los favoritos.
- **useContext**: Para compartir el estado global de las recetas guardadas como favoritas entre los componentes.
- **Custom Hooks**: Para encapsular la lógica de búsqueda de recetas.

## Pasos para el Desarrollo de la Aplicación

### 1. Inicializar el Proyecto en React con Vite
- Crea un nuevo proyecto utilizando **Vite** con el siguiente comando:
  ```bash
  npm create vite@latest recetas-app -- --template react
  ```
- Configura el proyecto para que utilice archivos con extensión .jsx.
- Organiza el proyecto en carpetas (por ejemplo: components, hooks, context, etc.).

### 2. Crear las Rutas con react-router
- Implementa el enrutamiento con react-router:
  - Una ruta para la página principal (/), que muestra una lista de recetas.
  - Una ruta para los detalles de cada receta (/receta/:id).
  - Una ruta para la lista de favoritos (/favoritos), donde se visualizan las recetas guardadas.

### 3. Página de Lista de Recetas (Componente Recetas)
- useEffect: Para cargar la lista de recetas desde un archivo recetas.json en el directorio public.
- useState: Para manejar el estado de las recetas y aplicar filtros de búsqueda.

### 4. Página de Detalles de Receta (Componente RecetaDetalle)
- useEffect: Para cargar los detalles de la receta seleccionada.
- useState: Para manejar el estado de los datos de la receta y permitir al usuario agregarla a favoritos.
- Al hacer clic en "Agregar a Favoritos", se guarda la receta en el contexto global.

### 5. Lista de Favoritos (Componente Favoritos)
- useContext: Crea un contexto para el estado global de las recetas guardadas como favoritas.
- Las recetas favoritas deben ser accesibles en cualquier página y visualizarse en la página de Favoritos.

### 6. Implementar Custom Hooks
- Crea un custom hook (useRecetas) para manejar la lógica de carga y búsqueda de recetas.
- Crea otro custom hook (useFavoritos) para encapsular la lógica de agregar o eliminar recetas de los favoritos.

### 7. Manejo de Estado Global con useContext
- Implementa un contexto para compartir el estado de los favoritos entre componentes.
- Asegúrate de que el contexto esté disponible en ambas páginas y refleje los favoritos de manera centralizada.

## Requerimientos Funcionales
- Lista de recetas: La lista de recetas debe cargarse dinámicamente desde recetas.json.
- Interacción de favoritos: Al marcar una receta como favorita, debe guardarse en el estado global.
- Navegación: La aplicación debe permitir navegar entre la lista de recetas, detalles de recetas, y favoritos.
- Estado compartido: Los favoritos deben gestionarse globalmente y estar disponibles en todas las páginas.
- Custom Hooks: Deben usarse para encapsular la lógica de carga de recetas y administración de favoritos.

## Evaluación
- **Funcionalidad Completa**: La aplicación debe cumplir todos los requisitos, y los favoritos deben gestionarse correctamente.
- **Uso de Hooks**: Evalúa el uso adecuado de useState, useEffect, useNavigate, useContext, y los custom hooks.
- **Modularidad y Componentización**: El código debe estar bien organizado y utilizar componentes reutilizables.
- **Manejo del Estado Global**: Los favoritos deben gestionarse correctamente con useContext y reflejarse globalmente.

## Entrega
Los alumnos deben subir el proyecto en un repositorio de GitHub, con instrucciones claras para ejecutar la aplicación, y enviar el enlace antes de la fecha límite.

## Arquitectura de Carpetas
La estructura recomendada para el proyecto es la siguiente:
  ```plaint-text
/recetas-app
  /public
    /recetas.json
  /src
    /components
      Recetas.jsx
      RecetaDetalle.jsx
      Favoritos.jsx
    /context
      FavoritosContext.jsx
    /hooks
      useRecetas.js
      useFavoritos.js
    App.jsx
    main.jsx
```

- /public: Contiene el archivo recetas.json con los datos de recetas.
- /src:
  - **/components**: Componentes de la aplicación como Recetas, RecetaDetalle, y Favoritos.
  - **/context**: Define el contexto global para compartir el estado de favoritos.
  - **/hooks**: Custom hooks para la lógica de carga y favoritos.
  - **App.jsx**: El componente principal que gestiona las rutas.
  - **main.jsx**: Punto de entrada de la aplicación.
  
## Instrucciones de Entrega 🚀

1. **Forkea** el repositorio desde [aquí](https://github.com/FabioDrizZt/UCSE-Examen-Flotante-React-Recetas/fork).
2. **Clona** el repositorio desde [aquí](https://github.com/Tu-Usuario/UCSE-Examen-Flotante-React-Recetas).
   ```bash
   git clone https://github.com/Tu-Usuario/UCSE-Examen-Flotante-React-Recetas.git
   ```
3. Desarrolla las funcionalidades requeridas en el repositorio clonado.
4. **Documenta** todos los endpoints en el archivo `README.md`.
5. **Sube** tus cambios y compártelos en el repositorio.
   ```bash
   git add .
   git commit -m "Implementación de x funcionalidad"
   git push origin main
   ```