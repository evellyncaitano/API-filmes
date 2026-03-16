//Primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

//Permitir aceita JSON na requisição
app.use(express.json())

let filmes = [
    {
        id: 1,
        title: "Annabelle: A Criação do Mal",
        description: "Prequel do filme Annabelle, que mostra a origem da boneca demoníaca e os horrores que ela traz para uma família.",
        genre: "Terror",
        releaseYear: 2017,
        image: "https://br.web.img3.acsta.net/pictures/17/06/28/17/44/432896.jpg"
    }
]
 
let series = [
    {
        id: 1,
        title: "All of Us Are Dead",
        description: "Estudantes em uma escola secundária enfrentando um surto de zumbis",
        genre: "Suspense",
        releaseYear: 2022,
        image: "https://br.web.img2.acsta.net/pictures/22/05/23/15/48/433386.jpg"
    }
]
 
 
app.get("/filmes", (req, res) => {
    const { genre } = req.query
    if (genre) {
        return res.json(filmes.filter(f => f.genre.toLowerCase() === genre.toLowerCase()))
    }
    return res.json(filmes)
})
 
app.get("/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const filme = filmes.find(f => f.id === id)
 
    if (!filme) {
        return res.status(404).json({ error: "Filme não encontrado" })
    }
    return res.json(filme)
})
 
//Criar filme
app.post("/filmes", (req, res) => {
    const { title, genre, description, image, releaseYear } = req.body
 
    if (!title || !genre || !description || !image || !releaseYear) {
        return res.status(400).json({ mensagem: "Título inválido" })
    }
 
    const novoFilme = {
        id: filmes.length + 1,
        title: title,
        genre: genre,
        description: description,
        releaseYear: releaseYear,
        image: image
    }
 
    filmes.push(novoFilme)
    return res.status(201).json(novoFilme)
})
 
 

app.get("/series", (req, res) => {
    const { genre } = req.query
    if (genre) {
        return res.json(series.filter(s => s.genre.toLowerCase() === genre.toLowerCase()))
    }
    return res.json(series)
})
 
app.get("/series/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const serie = series.find(s => s.id === id)
 
    if (!serie) {
        return res.status(404).json({ error: "Série não encontrada" })
    }
    return res.json(serie)
})
 
//Criar série
app.post("/series", (req, res) => {
    const { title, genre, description, image, releaseYear } = req.body
 
    if (!title || !genre || !description || !image || !releaseYear) {
        return res.status(400).json({ mensagem: "Título inválido" })
    }
 
    const novaSerie = {
        id: series.length + 1,
        title: title,
        genre: genre,
        description: description,
        releaseYear: releaseYear,
        image: image
    }
 
    series.push(novaSerie)
    return res.status(201).json(novaSerie)
})
 
// Acessar Servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
 