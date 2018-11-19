const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    {id: 1, title: 'Bohemian Rhapsody'},
    {id: 2, title: 'Matrix'},
    {id: 3, title: 'Edge of Tommorow'},
];

app.get('/', (req, res) => {
    res.send('Happy Hacking');
  });

app.get('/:name', (req, res) => {
    res.send(`Hi, ${req.params.name}`);
});

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
    const movie = getMovie(movies, parseInt(req.params.id));
    if(!movie) res.status(404).send(`Movie with given id(${req.params.id}) is not found.`);
    res.send(movie);
});

app.post('/api/movies', (req, res) => {
    const {error} = validateMovie(req.body)

    if (error) return res.status(400).send(error.message);

    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };

    movies.push(movie);
    res.send(movie);
});

app.put('/api/movies/:id', (req, res) => {
    // id 에 맞는 movie 를 찾는다.
    const movie = getMovie(movies, parseInt(req.params.id));
    // movie 가 없으면, 404 에러
    if(!movie) return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`);

    // 있을때, 사용자가 입력한 값을 validate 한다.
    const {error} = validateMovie(req.body)
    // 에러가 있으면, 400 에러
    if (error) return res.status(400).send(error.message);

    // movie 의 title 을 사용자 입력으로 교체
    movie.title = req.body.title;
    // 사용자에게 movie 보내주기
    res.send(movie);
});

app.delete('/api/movies/:id', (req, res) => {
    const movie = getMovie(movies, parseInt(req.params.id));
    if(!movie) return res.status(404).send(`The Movie with the given ID(${req.params.id}) was not found.`);

    const index = movies.indexOf(movie);
    movies.splice(index, 1);

    res.send(movie);
})




function validateMovie(movie){
    const schema = {
        title: Joi.string().min(2).required(),
    }
    return Joi.validate(movie, schema);
}

function getMovie(movies, id){
    return movies.find(movie => movie.id === id)
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));