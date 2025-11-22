## Como empezar

Paso 1: Clona el repositorio y navega a la carpeta del proyecto

Paso 2: Instala las dependencias

```bash
npm install
# o
pnpm install
```

Paso 3: Inicia el servidor de desarrollo

```bash
npm run dev
# o
pnpm dev
```

Paso 4: Inicia la base de datos Turso localmente

```bash
npm run dev:db
# o
pnpm dev:db
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

```ts
NODE_ENV = development
TURSO_DATABASE_URL = 'http://localhost:8080'
// para la base de datos local, puedes usar cualquier valor, aunque yo he usado "xd"
// en producción, asegúrate de configurar este valor correctamente
TURSO_AUTH_TOKEN = xd
```

## Scripts base de datos

Cada vez que se realice un cambio en el esquema de la base de datos, es necesario ejecutar los dos primeros comandos para generar y aplicar las migraciones. Si quieres ver y gestionar la base de datos a través de una interfaz gráfica, puedes usar el tercer comando para abrir Drizzle Studio.

```bash
npx drizzle:generate
npx drizzle:migrate
npx drizzle:studio
# o
pnpm drizzle:generate
pnpm drizzle:migrate
pnpm drizzle:studio
```

## Librerías utilizadas

- ShadCN UI para los componentes de la interfaz de usuario.
- Drizzle ORM para la gestión de la base de datos.
- BetterAuth para la autenticación de usuarios.
