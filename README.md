## Nota sobre Inteligencia Artificial

Este proyecto integra contenido generado por IA **exclusivamente** en:

* La identificación y localización precisa de recursos multimedia en Strapi.
* La implementacion del renderizado condicional para mostrar y no mostrar caracteristicas del producto dependiendo cual sea
* La implementación del formato de precios para su correcta visualización en moneda local (CLP).
-----
### Tabla de Integrantes, Roles y Funciones

| Integrante | Rol en el Proyecto           | Función Principal | Lo que hizo |
| :--- |:-----------------------------| :--- | :--- |
| **Pedro Quidiante** | Líder de Proyecto / Frontend | **Lógica y Funcionalidad** | Programó la conexión de datos, las rutas y la navegación del sitio. |
| **Juan Sánchez** | Configuración y Diseño       | **Diseño y Estructura** | Preparó el entorno visual (Tailwind) y la adaptación a celulares. |
| **Vicente Arriagada** | Líder Backend                | **Sistema Backend** | Configuró el panel de administración (Strapi) y los tipos de datos. |
| **Richard Ortega** | Gestor de Contenido          | **Gestión de Contenido** | Se encargó de redactor, organizar y subir toda la información al sistema. |
-----
# Instalación de Astro

### 1\. Creación del Proyecto

Abre tu terminal y ejecuta el siguiente comando. Cuando te pregunte el nombre de la carpeta, escribe `frontend`.

```
npm create astro@latest
```

**Configuración durante el asistente:**

* **Where should we create your new project?** Escribe: `frontend`
* **How would you like to start?** Selecciona: `A basic, helpful starter project (recommended)`
* **Install dependencies?** Selecciona: `Yes`
* **Do you plan to write TypeScript?** Selecciona: `Yes`
* **Initialize a new git repository?** Selecciona: `Yes`

### 2\. Acceso al Proyecto

Una vez termine la instalación, entra en la carpeta creada:

```
cd frontend
```

### 3\. Limpieza Manual (Paso Clave)

Vamos a eliminar la "información por defecto" para dejar el proyecto limpio manteniendo la estructura de carpetas.

1.  Ve a la carpeta `src/components/` y borra el archivo `welcome.astro`.
2.  Abre el archivo `src/pages/index.astro`.
3.  Borra todo el contenido actual y reemplázalo por este código base:

<!-- end list -->

```
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Mi Proyecto Astro">
    <main>
       <h1>Hola Mundo</h1>
    </main>
</Layout>
```

4.  También limpiar los estilos globales por defecto, abre `src/layouts/Layout.astro` y borra todo el CSS que se encuentra dentro de las etiquetas `<style is:global>`.

### 4\. Primera Ejecución

Verifica que la limpieza funcionó correctamente:

```
npm run dev
```

Deberías ver una página en blanco que solo dice "Hola Mundo".

-----

# Instalación de Tailwind CSS

### 1\. ⚙️ El Comando de Instalación

Con el servidor detenido (Ctrl + C), ejecuta el comando oficial de integración. Este comando detecta la versión más reciente compatible (incluyendo v4 si está disponible):

```
npx astro add tailwind
```

El asistente te pedirá confirmación para instalar las dependencias. Para esta instalación solo responde **Yes** a todo.

### 2\. Disponibilidad Global

Una vez finalizado, Tailwind CSS estará inyectado automáticamente en tu proyecto.

Aunque generalmente no necesitas importar nada, **asegúrate de importar tu hoja de estilos en el Layout** para que se apliquen correctamente los estilos globales:

Abre `src/layouts/Layout.astro` y agrega la importación:

```
---
import '../styles/global.css';  <-----
interface Props {
	title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<title>{title}</title>
	</head>
	<body>
		<slot />
	</body>
</html>
```

### 3\. Verificación

Para confirmar que Tailwind funciona, ve a tu `src/pages/index.astro` y pega este código de prueba:

```
<Layout title="Mi Proyecto Astro">
    <main class="flex items-center justify-center h-screen bg-gray-900">
        <header class="bg-gray-800 text-white p-6 shadow-2xl rounded-lg">
            <h1 class="text-3xl font-bold text-blue-400">
                Mi Sitio Astro con Tailwind
            </h1>
        </header>
    </main>
</Layout>
```
Si ves el fondo oscuro, el texto blanco y el título en azul con negrita, todo está listo.