const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.listen(port, () => {
  console.log(`Il server rimane in ascolto sulla porta ${port}`)
})

const posts = [
  {
    title: "Estate al mare",
    content: "Una bellissima estate nelle meravigliose spiagge della Sicilia!",
    image: "img/Estate.jpeg",
    tags: ["mare", "sole", "cuore", "amore"]
  },
  {
    title: "Autunno in montagna",
    content: "Bellissime passeggiate tra le montagne!",
    image: "img/Autunno.jpeg",
    tags: ["alberi", "foglie", "castagne", "vino"]
  },
  {
    title: "Inverno e camino",
    content: "Neve fuori le finestre....",
    image: "img/Inverno.jpeg",
    tags: ["neve", "plaid", "cioccolata calda", "caminetto"]
  },
  {
    title: "Primavera tra i campi",
    content: "Una passeggiata tra i campi fioriti",
    image: "img/Primavera.jpeg",
    tags: ["fiori", "polline", "allergie"]
  },
  {
    title: "Passatempo preferito",
    content: "Pigiama e videogames",
    image: "img/Videogames.jpeg",
    tags: ["controller", "divano", "relax"]
  }
]