import { WeekGrid } from '@/components/week-grid'

export default function Home() {
	return (
		<main className="container mx-auto space-y-8 py-8">
			<h1>Organizador de contenidos</h1>
			<WeekGrid />
		</main>
	)
}
