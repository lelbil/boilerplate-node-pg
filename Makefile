## App Control ##
start:
	@docker-compose up -d --build
	@sleep 5
	@make migrate
	#TODO: add seeding support at the start of the app
	#@docker exec app make seed
	@make applog

quit:
	@docker-compose stop
	@docker-compose rm -f

restart:
	@make quit
	@make start

applog:
	@docker logs api -f

migrate:
	@node_modules/.bin/knex migrate:latest

#seed:
#	@node scripts/seed.js

restart-app:
	@docker-compose up -d --build app
	@make applog

## Tests ##
func-test:
	@docker exec api ./node_modules/.bin/cucumber-js tests/func/features --require tests/func/support

# TODO: Add support for unit test (issue #4)
unit-test:
	@echo "WARNING: Unit tests are not implemented yet"

test:
	#TODO: make sure app is up before trying to run tests, otherwise show an explicit error message
	@echo "Starting Unit Tests.."
	make unit-test
	@echo "Starting Functional Tests.."
	make func-test