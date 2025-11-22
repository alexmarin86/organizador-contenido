import { DayCard } from '@/components/day-card'

export default function Home() {
	return (
		<main className="container mx-auto">
			<h1>Organizador de contenidos</h1>
			<DayCard weekDay="Lunes" className="max-w-3xs" />
		</main>
	)
}
