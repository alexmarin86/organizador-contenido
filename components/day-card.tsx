import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Event } from '@/db/schema'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { PlusCircle } from 'lucide-react'
import React from 'react'

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
			<CardContent>
				{events &&
					events.map((event) => (
						<div key={event.id}>
							<h3 className="text-lg font-semibold">
								{event.title}
								<Badge className="ml-2">{event.platform}</Badge>
							</h3>
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
