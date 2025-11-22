import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

import { env } from './env'

export default defineConfig({
	out: './db/migrations',
	schema: './db/schema/index.ts',
	dialect: 'turso',
	dbCredentials: {
		url: env.TURSO_DATABASE_URL,
		authToken: env.NODE_ENV === 'development' ? 'xd' : env.TURSO_AUTH_TOKEN
	}
})
