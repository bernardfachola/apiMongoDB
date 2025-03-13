// appell d'express
const express = require(`express`);
const mongoose = require(`mongoose`);
const app = express();
const port = 8080;

// connexion à MongoDB
mongoose.connect(`mongodb://localhost:27017/taskDB`)
.then(() => console.log(`MongoDB connecté`))
.catch(err => console.error(`erreur de connexion`, err));


// Middleware pour analyser le corps des requêtes
app.use(express.json());

// defition du modele Task avec Mongoose
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    completed: {type:Boolean, default: false}
})

const Task = mongoose.model(`Task`,taskSchema);

// crud
// post
app.post('/tasks', async (req, res) => {
    try {
        const task = new Task({ title: req.body.title });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({error: `Erreur lors de la création de la tache`});
    }
});

// get
app.get('/tasks', async (req, res) => {
    try {
       const tasks = await Task.find();
       res.json(tasks); 
    } catch (error) {
        res.status(500).json({ error: `erreur lors de la recuperation des taches`});
    }
});

// afficher une tache specifique

app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Tâche non trouvée');
    res.json(task);
    } catch (error) {
        res.status(500).json({error: `erreur lors de la recuperation des taches`})
    }
});

// modifier une tache

app.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!task) return res.status(404).send('Tâche non trouvée');
    res.json(task);
    } catch (error) {
        res.status(500).json({error: `erreur lors de la recuperation des taches`})
    }
});


// delete

app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send('Tâche non trouvée');
    res.json({message: `Tache supprimée avec succes`});
    } catch (error) {
        res.status(500).json({error: `erreur lors de la suppression de la tache`})
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});