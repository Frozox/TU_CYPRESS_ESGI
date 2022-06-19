help:		##Shows help
	@cat makefile | grep "##." | sed '2d;s/##//;s/://'

install: 	##Installation des dépendances + .env
	@composer validate
	@composer install -n
	@npm install --prefer-offline --no-audit --progress=false
	@cp .env.example .env
	@php artisan key:generate

run:		##Run cypress
	@npm run cypress
