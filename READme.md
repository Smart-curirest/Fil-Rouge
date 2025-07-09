# GestionLogi

GestionLogi est une application web de gestion de logements, composée d’un frontend React et d’une API backend Laravel.

## Structure du projet

```
gestionlogi/      # Frontend React (interface utilisateur)
laravel-api/      # Backend Laravel (API, base de données)
```

### Détail des dossiers

#### gestionlogi/ (Frontend React)

- `public/`  
  Fichiers statiques (index.html, favicon, manifest…)
- `src/`  
  Code source React :
  - `components/`  
    Composants réutilisables (Navbar, Footer, CommentCard, etc.)
  - `pages/`  
    Pages principales de l’application (Home, Login, Signup, Logement, etc.)
  - `services/`  
    Fonctions pour communiquer avec l’API Laravel (ex : appels axios)
  - `contexts/`  
    Contextes React pour la gestion globale de l’état utilisateur
  - `App.js`  
    Point d’entrée principal de l’application React
  - `Router.jsx`  
    Définition des routes de l’application

#### laravel-api/ (Backend Laravel)

- `app/`  
  Code métier Laravel (contrôleurs, modèles…)
- `routes/`  
  Définition des routes API et web
- `database/`  
  Migrations, seeders, factories pour la base de données
- `public/`  
  Fichiers accessibles publiquement (index.php, assets…)
- `resources/`  
  Vues Blade, assets CSS/JS
- `config/`  
  Fichiers de configuration Laravel
- `storage/`  
  Fichiers générés, logs, cache…
- `composer.json`  
  Dépendances PHP/Laravel

## Lancement du projet

### Backend Laravel

```sh
cd laravel-api
composer install
cp .env.example .env
php artisan key:generate
# Configure la base de données dans .env
php artisan migrate
php artisan serve
```

### Frontend React

```sh
cd gestionlogi
npm install
npm start
```

- Frontend : http://localhost:3000  
- Backend API : http://localhost:8000

## Fonctionnalités principales

- Authentification (inscription, connexion, déconnexion)
- Ajout, modification, suppression de logements
- Consultation de la liste et du détail des logements
- Gestion du profil utilisateur
- Affichage d’avis et de témoignages

## Liens utiles

- [gestionlogi/src/pages/Home.jsx](gestionlogi/src/pages/Home.jsx) — Page d’accueil principale
- [gestionlogi/src/components/Navbar.jsx](gestionlogi/src/components/Navbar.jsx) — Barre de navigation
- [gestionlogi/src/pages/Logement.jsx](gestionlogi/src/pages/Logement.jsx) — Liste des logements
- [laravel-api/database/migrations/2025_05_04_134709_create_posts_table.php](laravel-api/database/migrations/2025_05_04_134709_create_posts_table.php) — Migration de la table logements

---

Ce projet est sous licence
