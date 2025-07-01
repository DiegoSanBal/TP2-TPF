# TP2-TPF

Este proyecto implementa un servidor y una API RESTful utilizando **Node.js**, **Express** y **PostgreSQL**, con Sequelize, para gestionar entidades de **usuario**, **profesor** y **curso** en el contexto del Trabajo Práctico .

## Contenido

- Código fuente del servidor con Node.js y Express.
- Implementación modular con controladores, servicios y modelos.
- Integración con base de datos PostgreSQL vía Sequelize.
- Encriptación de contraseñas con bcrypt.
- Endpoints RESTful para operaciones CRUD de usuarios, profesores y cursos.

## Requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/DiegoSanBal/TP2-TPF
cd TP2-TPF
```

2. Instalá las dependencias:

```bash
npm install
```

3. Configurá la base de datos PostgreSQL:
   - Creá una base de datos.
   - Actualizá las credenciales en `connections/connections.js` o `.env`.

## Ejecución del servidor

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

O en modo producción:

```bash
npm start
```

El servidor corre por defecto en `http://localhost:3000`.

---

## Endpoints principales

### Usuarios (`/user`)

- `GET /user`  
  Lista todos los usuarios.

- `GET /user/:id`  
  Obtiene un usuario por ID.

- `POST /user`  
  Crea un nuevo usuario.  
  **Body:**

  ```json
  {
    "name": "Juan",
    "email": "juan@email.com",
    "password": "123456"
  }
  ```

- `PUT /user/:id`  
  Actualiza un usuario existente.

- `DELETE /user/:id`  
  Elimina un usuario.

---

### Profesores (`/profesor`)

- `GET /profesor`  
  Lista todos los profesores.

- `GET /profesor/:id`  
  Obtiene un profesor por ID.

- `POST /profesor`  
  Crea un nuevo profesor.  
  **Body:**

  ```json
  {
    "name": "Laura",
    "email": "laura@email.com",
    "password": "prof1234"
  }
  ```

- `PUT /profesor/:id`  
  Actualiza un profesor existente.

- `DELETE /profesor/:id`  
  Elimina un profesor.

### Curso (`/curso`)

- `GET /curso`  
  Lista todos los profesores.

- `GET /curso/:id`  
  Obtiene un profesor por ID.

- `POST /curso`  
  Crea un nuevo profesor.  
  **Body:**

  ```json
  {
    "nombre": "Laura",
    "descripcion": "laura@email.com"
  }
  ```

- `PUT /curso/:id`  
  Actualiza un profesor existente.

- `DELETE /curso/:id`  
  Elimina un profesor.

---

## Notas

- Asegurate de que el puerto `3000` esté libre antes de iniciar el servidor.
- PostgreSQL debe estar ejecutándose y correctamente configurado.
- Las contraseñas se almacenan de forma segura utilizando hashing con **bcrypt**.
- La estructura del proyecto permite fácil escalabilidad y mantenimiento.

## ✍️ Autores

Diego Santurtun, Joaquin Lagares, Ignacio Flores Arnaldo
Trabajo Práctico Final - TP2
