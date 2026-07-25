# Abdou Bank — Documentation

## Vue d’ensemble
Abdou Bank est une API Express.js destinée à gérer l’authentification d’utilisateurs et un flux de transfert bancaire basé sur un code OTP. Le projet inclut actuellement des routes d’authentification fonctionnelles, ainsi que des services de transfert préparés côté logique métier.

## Stack technique
- Runtime : Node.js (module ES)
- Framework : Express
- Base de données : MongoDB via mongoose (à connecter via la variable d’environnement)
- Authentification : jsonwebtoken, bcrypt
- Sécurité OTP : crypto

## Prérequis
- Node.js v16+ installé
- MongoDB en cours d’exécution si vous souhaitez utiliser la persistance réelle
- Un fichier .env à la racine du projet

## Installation
1. Installer les dépendances :

```bash
npm install
```

2. Créer un fichier .env à la racine avec au minimum :

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/abdou-bank
JWT_SECRET=your_jwt_secret
```

3. Démarrer le serveur :

```bash
npm start
```

L’application écoute par défaut sur http://localhost:3000. Voir [index.js](index.js).

## Endpoints API

### Santé du serveur
- GET / — retourne un message de disponibilité. Voir [index.js](index.js).

### Authentification
Base : /api/auth — voir [src/auth/authroute.js](src/auth/authroute.js).

- POST /api/auth/register
  - Corps attendu :
    ```json
    {
      "username": "testuser",
      "email": "testuser@example.com",
      "password": "password123"
    }
    ```
  - Crée un utilisateur et hash le mot de passe avec bcrypt.

- POST /api/auth/login
  - Corps attendu :
    ```json
    {
      "username": "testuser",
      "email": "testuser@example.com",
      "password": "password123"
    }
    ```
  - Retourne un JWT si les informations sont valides.

Exemple curl :

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"testuser@example.com","password":"password123"}'
```

### Services de transfert bancaire
Les services de transfert existent côté code dans [src/User/Client/clientServices.js](src/User/Client/clientServices.js), mais les routes HTTP associées ne sont pas encore exposées dans [src/User/Client/clientRoutes.js](src/User/Client/clientRoutes.js).

Le flux prévu est le suivant :
- requestTransfer : génère une demande de transfert et un OTP temporaire.
- verifyTransfer : vérifie le code OTP et exécute le transfert si le code est valide.

Ces services utilisent des champs tels que senderUserId, ReceiverUserId, amount et code.

## Structure du projet

Fichiers clés :
- [index.js](index.js) — point d’entrée de l’application et montage des routes
- [package.json](package.json) — dépendances et scripts npm
- [src/auth/authroute.js](src/auth/authroute.js) — routes d’authentification
- [src/auth/authcontrollers.js](src/auth/authcontrollers.js) — contrôleurs d’authentification
- [src/auth/authservice.js](src/auth/authservice.js) — logique métier d’authentification
- [src/User/userRepo.js](src/User/userRepo.js) — modèle utilisateur
- [src/User/Client/clientServices.js](src/User/Client/clientServices.js) — logique de transfert OTP
- [src/User/Client/clientRoutes.js](src/User/Client/clientRoutes.js) — routes clientes non encore implémentées

## Exécution et tests
- Démarrer le serveur : npm start
- Exécuter les tests : npm test
- Utiliser Postman ou curl pour tester manuellement les endpoints

## Prochaines étapes
- Connecter la base MongoDB avec MONGODB_URI dans l’application
- Exposer les routes de transfert dans [src/User/Client/clientRoutes.js](src/User/Client/clientRoutes.js)
- Ajouter une validation des entrées et une gestion d’erreurs plus robuste
- Ajouter des tests automatisés et une documentation OpenAPI/Swagger

## Contribution
Les contributions sont les bienvenues. Pour les tests locaux, suivez la section Installation puis démarrez le serveur avec npm start.
