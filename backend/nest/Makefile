
db_schema:
	npm run typeorm migration:generate -- --dataSource src/infrastructure/db/dataSource.ts --pretty migrations/tsutsumi_chat

db_run:
	npm run typeorm migration:create ./migrations

db_migration: 
	npm run typeorm migration:run -- --dataSource src/infrastructure/db/dataSource.ts

db_create: 
	docker exec -it tsutsumi-chat_postgres_1 psql -U postgres -c 'CREATE DATABASE chat;'

up: 
	docker-compose up -d
down:
	docker-compose down

.PHONY: db_schema db_migration db_create up db_run db_schema
