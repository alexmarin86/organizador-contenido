ALTER TABLE `event` ADD `platform` text NOT NULL;--> statement-breakpoint
ALTER TABLE `event` ADD `content_form` text NOT NULL;--> statement-breakpoint
ALTER TABLE `event` ADD `week_year` text NOT NULL;--> statement-breakpoint
CREATE INDEX `week_year_idx` ON `event` (`week_year`);