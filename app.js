//IMPORTO EXPRESS
const express = require('express');
//CHIAMO LA FUNZIONE EXPRESS E NE RESTITUISCO IL VALORE IN UNA VARIABILE APP
const app = express();
//DEFINISCO LA PORTA 3000
const port = 3000;

//importo il file router per i post
const postRouter = require('./routers/post.js');

//INSERIMENTO DEL MIDDLEWARE PER I FILE STATICI
app.use(express.static('public'));

app.use('/post', postRouter);

//DEFINISCO LA ROTTA ENTRY POINT DELLA NOSTRA APPLICAZIONE
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

//DICHIARO ALLA NOSTRA APPLICAZIONE DI RESTARE IN ASCOLTO SULLA PORTA DEFINITA IN ALTO
app.listen(port, () => {
  console.log(`Server del mio blog sulla porta ${port}`);
})

//DEFINISCO LA ROTTA PER OTTENERE LA BACHECA 
app.get('/bacheca', (req, res) => {
  const posts = [
    {
     titolo: "Jaws: Lo Squalo che ha cambiato il cinema",
     contenuto: "Un approfondimento sul film cult di Steven Spielberg che ha terrorizzato intere generazioni e  lanciato il concetto di blockbuster estivo.",
     immagine: "img/jaws.jpeg",
     tags: ["thriller", "classico", "animali", "anni70"]
    },
    {
     titolo: "Pirates of the Caribbean: La maledizione della Perla Nera",
     contenuto: "Analisi del primo film della saga che ha trasformato i pirati in icone pop, tra humor e  avventure soprannaturali.",
     immagine: "img/pirates of the caribbean.jpeg",
     tags: ["avventura", "pirati", "fantasy", "disney"]
    },
    {
     titolo: "Spider-Man: Un eroe tra le ragnatele",
     contenuto: "Dal fumetto al grande schermo: come l' Uomo Ragno è diventato uno dei supereroi più amati di   sempre.",
     immagine: "img/spiderman.jpeg",
     tags: ["supereroi", "marvel", "azione", "fumetti"]
    },
    {
     titolo: "The Godfather: Il padrino della cinematografia",
     contenuto: "Un omaggio a uno dei capolavori assoluti della storia del cinema, tra famiglia, onore e crimine organizzato.",
     immagine: "img/the godfather.jpeg",
     tags: ["mafia", "dramma", "anni70", "coppola"]
    },
    {
     titolo: "Zombie: Quando i morti camminano",
     contenuto: "Dai film di Romero alle serie TV moderne: l' evoluzione del genere zombie nell' immaginario collettivo.",
     immagine: "img/zombie.jpeg",
     tags: ["horror", "apocalisse", "non-morti", "survival"]
    }
  ];

  res.json(posts);

})