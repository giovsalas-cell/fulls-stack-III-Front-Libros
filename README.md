# Librería Online – Frontend Angular

Aplicación web en Angular para gestionar los libros de una biblioteca. Consume el
microservicio Spring Boot de la Semana 1 (CRUD sobre Oracle).

Microservicio: https://github.com/giovsalas-cell/Fulls-Stack-III-Libros

## Cómo ejecutar

1. Levantar el microservicio (puerto 8080).
2. En esta carpeta:

```
npm install
ng serve
```

3. Abrir http://localhost:4200

## Operaciones del CRUD

| Operación        | Método | Endpoint     | Dónde se usa                   |
| ---------------- | ------ | ------------ | ------------------------------ |
| Listar libros    | GET    | /libros      | Lista principal                |
| Obtener un libro | GET    | /libros/{id} | Formulario en modo edición     |
| Agregar libro    | POST   | /libros      | Formulario de nuevo libro      |
| Actualizar libro | PUT    | /libros/{id} | Formulario en modo edición     |
| Eliminar libro   | DELETE | /libros/{id} | Botón Eliminar de cada tarjeta |

Atributos del libro: `id`, `titulo`, `autor`, `anioPublicacion`, `genero`.

## Arquetipo y patrones de diseño

**Arquetipo: MVC (Modelo - Vista - Controlador)**

| Capa        | Archivos                                             |
| ----------- | ---------------------------------------------------- |
| Modelo      | `models/libro.model.ts`, `services/libro.service.ts` |
| Vista       | `*.component.html` y `*.component.css`               |
| Controlador | `*.component.ts` (lista y formulario)                |

**Patrones de diseño**

| Patrón     | Dónde se aplica                                                            |
| ---------- | -------------------------------------------------------------------------- |
| Observador | El servicio devuelve `Observable` y los componentes usan `subscribe()`     |
| Singleton  | `LibroService` con `providedIn: 'root'`: una sola instancia en toda la app |
| Decorator  | `@Component` y `@Injectable` agregan metadatos a las clases                |

## Estructura

```
src/app/
├── models/        libro.model.ts
├── services/      libro.service.ts
├── components/
│   ├── libro-lista/
│   └── libro-form/
├── app.routes.ts
└── app.config.ts
```

## Nota sobre CORS

El microservicio habilita el origen `http://localhost:4200` con `@CrossOrigin`
en `LibroController`, porque frontend y backend corren en puertos distintos.
