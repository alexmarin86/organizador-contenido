import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const event = sqliteTable('event', {
	id: int().primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	description: text().notNull(),
	scheduledFor: int('scheduled_for').notNull(),
	createdAt: int('created_at')
		.notNull()
		.$defaultFn(() => Date.now()),
	updatedAt: int('updated_at')
		.notNull()
		.$defaultFn(() => Date.now())
		.$onUpdate(() => Date.now())
})
