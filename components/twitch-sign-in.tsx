'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from './ui/button'
import { TwitchIcon } from './twitch-icon'

export function TwitchSignIn() {
	async function signIn() {
		await authClient.signIn.social({
			provider: 'twitch'
		})
	}

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={signIn}
			className="cursor-pointer dark:text-muted"
		>
			<TwitchIcon className="mr-2 h-4 w-4 fill-[#6441a5]" />
			Sign In with Twitch
		</Button>
	)
}
