const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/video-api', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error(error));
    
// Middlewares
app.use(express.json());

// Models
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre){
    const schema = {
        name: Joi.string().min(3).max(50).required()
    }
    return Joi.validate(genre, schema);
    //Joi야, 들어온 장르를 스키마 조건을 이용해서 똑같은 놈인지 확인해봐.
};


// Routes

app.get('/api/genres', async (req, res) => {
    const genres = Genre.find().sort('name'); //Genre로 다 가져오고(find) 네임으로 소팅해라.
    res.send(genres);
})

app.post('/api/genres', async(req, res) => {
    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.message);

    let genre = new Genre({name: req.body.name});
    genre = await genre.save();

    res.send(genre);
})

app.get('api/genres/:id', async (req, res) => {
    const genre = Genre.findById(req.params.id);
    //사용자가 넘긴 파라미터의 id에서 찾아라.
    if(!genre) return res.status(404).send('The genre with the given ID was not found.')
    res.send(genre);
});

app.patch('/api/genres/:id', async (req, res) => {
    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, {new: true})    

    res.send(genre);
})

app.delete('/api/genres/:id', async (req, res) => {
    const genre = await Genre.findByIdAndDelete(req.params.id);

    if(!genre) return res.status(404).send('The genre with the given ID was not found.');
})


// Server & Run
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening onport ${port}`));
