import { index, int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const event = sqliteTable(
	'event',
	{
		id: int().primaryKey({ autoIncrement: true }),
		title: text().notNull(),
		description: text().notNull(),
		platform: text().notNull(),
		contentForm: text('content_form').notNull(),
		scheduledFor: int('scheduled_for').notNull(),
		weekYear: text('week_year').notNull(),
		createdAt: int('created_at')
			.notNull()
			.$defaultFn(() => Date.now()),
		updatedAt: int('updated_at')
			.notNull()
			.$defaultFn(() => Date.now())
			.$onUpdate(() => Date.now())
	},
	(table) => [index('week_year_idx').on(table.weekYear)]
)
