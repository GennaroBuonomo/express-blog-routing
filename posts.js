//importo express
const express = require ('expres');

//definisco l' oggetto router
const router = express.router();

//definisco le rotte per i post
//INDEX
router.get('/', (req,res) => {
  res.send('Elenco dei post')
});