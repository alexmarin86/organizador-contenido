import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		NODE_ENV: z.string(),
		TURSO_DATABASE_URL: z.url(),
		TURSO_AUTH_TOKEN: z.string(),
		BETTER_AUTH_SECRET: z.string(),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
		TWITCH_CLIENT_ID: z.string(),
		TWITCH_CLIENT_SECRET: z.string()
	},
	client: {
		// NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1)
	},
	// If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
		TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
		BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
		TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET
	}
	// For Next.js >= 13.4.4, you only need to destructure client variables:
	// experimental__runtimeEnv: {
	//   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
	// }
})
