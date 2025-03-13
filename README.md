API RESTful de Gestion de Tâches avec Node.js et MongoDB

Description
Cette API permet de gérer des tâches (CRUD) en utilisant Node.js, Express.js et MongoDB avec Mongoose.

Installation
1. Cloner le dépôt
```sh
git clone git@github.com:bernardfachola/apiMongoDB.git
cd <NOM_DU_REPO>
```

2. Installer les dépendances
```sh
npm install
```

3. Lancer le serveur
```sh
node server.js
```
Ou avec nodemon (si installé) :
```sh
nodemon server.js
```

Configuration de la base de données
Assurez-vous que MongoDB est installé et en cours d'exécution sur `mongodb://localhost:27017/taskDB`.

Routes de l'API

1. Créer une tâche (POST)
```http
POST /tasks
```
Body JSON:
```json
{
  "title": "Ma nouvelle tâche"
}
```

2. Récupérer toutes les tâches (GET)
```http
GET /tasks
```

3. Récupérer une tâche spécifique (GET)
```http
GET /tasks/:id
```

4. Modifier une tâche (PUT)
```http
PUT /tasks/:id
```
Body JSON:
```json
{
  "title": "Tâche mise à jour",
  "completed": true
}
```

5. Supprimer une tâche (DELETE)
```http
DELETE /tasks/:id
```

Technologies utilisées
- Node.js
- Express.js
- MongoDB avec Mongoose

Auteur
BERNARD LE BOSS

