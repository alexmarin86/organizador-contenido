import { mockData } from '@/consts/mockData'
import type { Event } from '@/db/schema'
import { DayCard } from './day-card'

type DayData = {
	weekDay: string
	events: Event[]
}

function formatEventsByDay(events: Event[]): DayData[] {
	// Days of the week in Spanish, starting with Monday
	const daysOfWeek = [
		'Lunes',
		'Martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
		'Domingo'
	]

	// Group events by day of the week
	const eventsByDay: { [key: number]: Event[] } = {}

	events.forEach((event) => {
		const date = new Date(event.scheduledFor)
		// Get day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
		let dayOfWeek = date.getDay()
		// Convert to Monday-based indexing (0 = Monday, 1 = Tuesday, ..., 6 = Sunday)
		dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1

		if (!eventsByDay[dayOfWeek]) {
			eventsByDay[dayOfWeek] = []
		}
		eventsByDay[dayOfWeek].push(event)
	})

	// Create array with all 7 days
	return daysOfWeek.map((day, index) => ({
		weekDay: day,
		events: eventsByDay[index] || []
	}))
}

export function WeekGrid() {
	const weekData = formatEventsByDay(mockData)

	return (
		<section className="grid grid-cols-1 lg:grid-cols-7 gap-4">
			{weekData.map((dayData) => (
				<DayCard
					key={dayData.weekDay}
					weekDay={dayData.weekDay}
					events={dayData.events}
				/>
			))}
		</section>
	)
}
