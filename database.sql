CREATE TABLE "chekov-list"(
	"id" SERIAL PRIMARY KEY,
	"priority" INTEGER NOT NULL DEFAULT 3,
	"title" varchar(50) NOT NULL,
	"description" varchar(500),
	"duedate" DATE NOT NULL,
	"complete" BOOLEAN DEFAULT false
);
INSERT INTO "chekov-list"("priority","title","description","duedate","complete")
VALUES 
	(1,'Merigues', 'new years eve party', '12-27-23','no'),
	
	(2,'creme puffs','new years eve party', '12-27-23','no'),
	
	(3,'cookies', 'new years eve party', '12-27-23','no'),
	
	(1,'chocolates', 'new years eve party', '12-27-23','no'),
	
	(2,'wreaths', 'new years eve party', '12-27-23','no'),
	
	(3,'rosettes', 'new years eve party', '12-27-23','no'),
	
	(1,'crostinis', 'new years eve party', '12-27-23','no');
