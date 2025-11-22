'use client'

import { useState } from 'react'
import { Button } from './ui/button'

export function TestComponent() {
	const [count, setCount] = useState(0)

	return (
		<Button onClick={() => setCount(count + 1)}>ShadCN Test {count}</Button>
	)
}
