import { TwitchSignIn } from '@/components/twitch-sign-in'
import { WeekGrid } from '@/components/week-grid'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers()
	})
	return (
		<main className="container mx-auto space-y-8 py-8">
			<h1>Organizador de contenido</h1>
			{!session?.user && <TwitchSignIn />}
			{session?.user && <p>Bienvenido, {session.user.name}</p>}
			<WeekGrid />
		</main>
	)
}
