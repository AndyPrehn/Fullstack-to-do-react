CREATE TABLE "chekov-list"(
	"id" SERIAL PRIMARY KEY,
	"priority" INTEGER NOT NULL DEFAULT 3,
	"title" varchar(50) NOT NULL,
	"description" varchar(500),
	"duedate" DATE NOT NULL,
	"complete" BOOLEAN DEFAULT false
);

INSERT INTO "chekov-list"("title","duedate","description")
VALUES
	('Create SQL table','2023-10-28','Need to define headers, create fake data'),
