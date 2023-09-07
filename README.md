# Dashboard
Link:https://github.com/SeecoDev/dashboard_next/
Author(s): Adrian Flores
Status: Draft 
Ultima Actualizacion: 07/09/23
# Contenido
- [Dashboard](#dashboard)
- [Contenido](#contenido)
- [Links](#links)
- [Objetivo](#objetivo)
- [No Objetivo](#no-objetivo)
- [Background](#background)
- [Overview](#overview)
- [Requerimientos](#requerimientos)

# Links
- https://es.react.dev/
- https://nextjs.org/
- https://dashboard-next-ashen.vercel.app/

# Objetivo
El objetivo de este dashboard es desarrollar una aplicación web utilizando tecnologías como React y Next.js para crear un formulario de composición corporal de pacientes. Este formulario permitirá a los usuarios ingresar datos relacionados con la composición corporal, como peso, altura, porcentaje de grasa corporal, y otros indicadores relevantes.

Una vez que los usuarios ingresen los datos, el dashboard deberá procesar la información y mostrarla de manera clara y concisa en dos formatos:

Tabla de Resultados: El dashboard presentará los datos ingresados por el paciente en forma de una tabla fácil de leer. Esta tabla mostrará todos los indicadores de composición corporal de manera organizada.

Gráfica de Pastel: Además de la tabla, el dashboard generará una gráfica de pastel utilizando la biblioteca Chart.js. Esta gráfica proporcionará una representación visual de la distribución de la composición corporal del paciente, lo que permitirá una comprensión más rápida de los resultados.

Este proyecto tiene como objetivo principal explorar y aplicar las tecnologías modernas de desarrollo web, como React y Next.js, para crear una herramienta efectiva y amigable que ayude a los profesionales de la salud y a los pacientes a comprender mejor la composición corporal de manera visual y accesible.

# No Objetivo
El proyecto no tiene como objetivo principal proporcionar asesoramiento médico, diagnóstico o tratamiento médico a los usuarios. Tampoco pretende reemplazar a un profesional de la salud calificado ni ofrece garantías sobre la precisión o la aplicación clínica de los datos recopilados. Además, el proyecto no busca almacenar ni gestionar datos médicos sensibles de manera segura ni cumplir con regulaciones específicas de protección de datos en la atención médica.

# Background
## React 
Utilizaremos React como la biblioteca principal para construir la interfaz de usuario. React es ampliamente conocido por su capacidad para crear componentes reutilizables y su facilidad de desarrollo.

## Next.js
Elegimos Next.js como el marco de desarrollo de React debido a su enfoque en el rendimiento y la velocidad. Además, Next.js nos permite implementar la representación del lado del servidor (SSR) y la generación de sitios estáticos (SSG) para mejorar la eficiencia de la aplicación.

## Chart.js
Para crear la gráfica de pastel, integraremos Chart.js, una potente biblioteca de gráficos que nos permitirá visualizar la composición corporal de manera intuitiva.

## Estilización
Utilizaremos TailwindCSS para el diseño y la estilización de la interfaz de usuario. Podemos considerar preprocesadores como Sass o utilizar bibliotecas de diseño como Bootstrap para mejorar la apariencia y la usabilidad.

# Requerimientos 
Los requerimientos son los siguientes:
"dependencies": {
    "autoprefixer": "10.4.15",
    "chart.js": "^4.4.0",
    "next": "^13.4.19",
    "postcss": "8.4.28",
    "react": "18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.3.3"
  }
al clonar el proyecto y utilizar npm install, deberian instalarse de manera automatica y estar listo para ser ejecutado
