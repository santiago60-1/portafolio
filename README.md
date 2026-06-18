# Portafolio

Portafolio personal desarrollado con Angular. El sitio funciona como una single page application con secciones de inicio, experiencia, proyectos y contacto.

## Caracteristicas

- Menu de navegacion por secciones.
- Hero principal con presentacion personal.
- Apartado de experiencia y tecnologias.
- Seccion de proyectos con capturas de Olympus y Sistema de Inventario.
- Apartado de contacto con correo y enlaces sociales.
- Diseno responsive usando medidas fluidas como `rem`, `%` y `clamp()`.

## Tecnologias

- Angular 21
- TypeScript
- HTML
- CSS
- Angular SSR

## Estructura Principal

```text
src/app/
  componentes/menu-navegacion/
  inicio/
  proyectos/
  contacto/
public/
  imagenes y recursos del portafolio
```

## Instalacion

```bash
npm install
```

## Ejecutar En Desarrollo

```bash
npm start
```

La aplicacion queda disponible en:

```text
http://localhost:4200/
```

## Compilar

```bash
npm run build
```

Los archivos generados quedan en `dist/portafolio`.

## Pruebas

```bash
npm test
```
