# Test d'intégration sur un CRUD

## Installation
1. git clone git@github.com:Frozox/TU_CYPRESS_ESGI.git
2. cd TU_CYPRESS_ESGI/
3. composer install
4. npm install
5. copier .env.example -> .env
6. php artisan key:generate
7. Ajout des infos de BDD dans le fichier .env
8. php artisan migrate
9. php artisan serve (pour lancer un serveur web)
10. URL : http://127.0.0.1:8000/projects

##Run cypress
1. npm run cypress
