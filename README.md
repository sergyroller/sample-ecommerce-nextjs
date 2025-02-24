# Descripción

## Ejecutar proyecto en dev

1. Clonar en repositorio.
2. Crear una copia del archivo `.env.example` y renombrarlo a `.env` y cambiar sus valores.
3. Instalar dependencias `npm install`.
4. Levantar la base de datos `docker compose up -d`
5. Ejecutar las migraciones de Prisma `npx prisma migrate dev`
6. Ejecutar seed `npm run seed`
7. Ejecutar proyecto `npm run dev`.

## Ejecutar proyecto en producción
