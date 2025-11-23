import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import db from '@/db/index' // your drizzle instance
import { env } from '@/env'

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite'
	}),
	socialProviders: {
		google: {
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET
		},
		twitch: {
			clientId: env.TWITCH_CLIENT_ID,
			clientSecret: env.TWITCH_CLIENT_SECRET
		}
	}
})
