import { Event } from '@/db/schema'

export const mockData: Event[] = [
	{
		id: 1,
		title: 'Monday Community Hangout',
		description: 'Casual start-of-week livestream with community Q&A.',
		platform: 'twitch',
		contentForm: 'livestream',
		scheduledFor: 1763976000000,
		weekYear: '48/2025'
	},
	{
		id: 2,
		title: 'Gameplay Deep Dive',
		description: 'In-depth livestream focusing on strategy and mechanics.',
		platform: 'twitch',
		contentForm: 'livestream',
		scheduledFor: 1764062400000,
		weekYear: '48/2025'
	},
	{
		id: 3,
		title: 'Midweek Chill Stream',
		description: 'Relaxed midweek stream with viewer challenges.',
		platform: 'twitch',
		contentForm: 'livestream',
		scheduledFor: 1764148800000,
		weekYear: '48/2025'
	},
	{
		id: 4,
		title: 'Thanksgiving Special Stream',
		description: 'Holiday-themed livestream with giveaways.',
		platform: 'twitch',
		contentForm: 'livestream',
		scheduledFor: 1764235200000,
		weekYear: '48/2025'
	},
	{
		id: 5,
		title: 'Friday Wrap-Up Stream',
		description: 'End-of-week livestream, highlights and announcements.',
		platform: 'twitch',
		contentForm: 'livestream',
		scheduledFor: 1764321600000,
		weekYear: '48/2025'
	},

	{
		id: 6,
		title: 'Weekly Feature Video',
		description: 'Long-form YouTube video covering the topic of the week.',
		platform: 'youtube',
		contentForm: 'long',
		scheduledFor: 1764408000000,
		weekYear: '48/2025'
	},

	{
		id: 7,
		title: 'Quick Tip #1',
		description: 'Short TikTok tip to boost engagement.',
		platform: 'tiktok',
		contentForm: 'short',
		scheduledFor: 1764062400000,
		weekYear: '48/2025'
	},
	{
		id: 8,
		title: 'Quick Tip #2',
		description: 'Short TikTok video showing a useful shortcut.',
		platform: 'tiktok',
		contentForm: 'short',
		scheduledFor: 1764235200000,
		weekYear: '48/2025'
	},
	{
		id: 9,
		title: 'Quick Tip #3',
		description: 'Fun weekend TikTok clip to boost reach.',
		platform: 'tiktok',
		contentForm: 'short',
		scheduledFor: 1764494400000,
		weekYear: '48/2025'
	}
]
