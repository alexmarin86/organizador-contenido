import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Event } from '@/db/schema'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { PlusCircle } from 'lucide-react'

const getPlatformBrandColor = (platform: string): string => {
	const platformColors: Record<string, string> = {
		youtube: 'bg-red-600 hover:bg-red-700',
		twitch: 'bg-purple-600 hover:bg-purple-700',
		tiktok: 'bg-black hover:bg-gray-900'
	}

	return (
		platformColors[platform.toLowerCase()] || 'bg-gray-500 hover:bg-gray-600'
	)
}

type DayCardProps = {
	weekDay: string
	events?: Event[]
	className?: string
}

export function DayCard({ weekDay, events, className }: DayCardProps) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle className="text-center">{weekDay}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				{events &&
					events.map((event) => (
						<div
							key={event.id}
							className="border border-neutral-300 p-4  lg:p-2 rounded-sm bg-neutral-100"
						>
							<Badge
								className={`ml-2 text-white border-0 ${getPlatformBrandColor(
									event.platform
								)}`}
							>
								{event.platform}
							</Badge>
							<p className="text-sm">{event.title}</p>
						</div>
					))}
				{(!events || events.length === 0) && (
					<div className="flex flex-col items-center gap-4">
						<p className="text-muted-foreground text-center">
							No hay eventos programados.
						</p>
						<Button size="icon-lg">
							<PlusCircle />
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	)
}
