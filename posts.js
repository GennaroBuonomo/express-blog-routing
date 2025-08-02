//importo express
const express = require ('expres');

//definisco l' oggetto router
const router = express.router();

//definisco le rotte per i post
//INDEX
router.get('/', (req,res) => {
  res.send('Elenco dei post')
});

//SHOW
router.get('/:id', (req, res) =>{
  res.send(`Dettaglio dei post con id ${req.params.id}`);
});

//CREATE 
router.get('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

//UPDATE
