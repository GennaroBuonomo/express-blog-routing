//importo express
const express = require('expres');

//definisco un' istanza della classe Router di express
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
router.post('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

//UPDATE
router.put('/:id', (req, res) => {
  res.send(`Modifica totale dei post in id ${req.params.id}`);
});

//DELATE
router.delete('/:id', (req, res) => {
  res.sed(`Cancellazione dei post con id ${req.params.id}`);  
});

//Esporto sal router
module.express = router;


