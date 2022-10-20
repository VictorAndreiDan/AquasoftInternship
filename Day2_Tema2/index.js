const express   = require('express');
const {toInteger}= require('lodash');
const mongoose  = require('mongoose');
const Article   = require('./Article.js');
const app       = express();
const port      = process.env.PORT || 8080;
const serverURI = "mongodb://localhost:27017/aquasofttema2";

// enable json usage on express
app.use(express.json());

// 2 GET (return every element in table/ return 1 element using its name)

// GET all articles
app.get('/articles', async (request, response) =>{
    const result = await Article.find();
    if (result.length == 0) return response.status(404).json({message: "404 - there are no articles yet!"});
    return response.status(200).json(result);
});
// GET article by name
app.get('/articles/:name', async (request, response) =>{
    const result = await Article.find({Article_no: request.params.name});
    if (result.length == 0) return response.status(400).json({message: "bad request - article doesn't exist"});
    return response.status(200).json(result);
});

// POST create new article
app.post('/articles', (request, response) => {
    const newArticle = new Article();
    // article name is mandatory
    validatePost(request.body).then((result) => {
        if(!result) return response.status(400).json({message: "bad request - article needs a name or has bad fields"});
        newArticle._doc = {...newArticle._doc, ...request.body};
        newArticle.save();
        return response.status(200).json(newArticle);
    });
});

// 1 PUT (update after primary key)
// Presupun ca primary key in mongodb este nr fiecarui document din arrayul colectie
app.put('/articles/:primary_key', async (request, response) => {
    const primary_key = toInteger(request.params.primary_key);
    const allArticles = await Article.find();
    if(primary_key > allArticles.length || primary_key < 0) return response.status(400).json({message: "bad request - wrong primary key"});
    await Article.updateOne({ _id: allArticles[primary_key]._id }, request.body);
    const updatedTarget = await Article.findById(allArticles[primary_key]._id);
    return response.status(200).json(updatedTarget);
});

// 1 DELETE (delete after primary key)
app.delete('/articles/:primary_key', async (request, response) => {
    const primary_key = toInteger(request.params.primary_key);
    const allArticles = await Article.find();
    if(primary_key > allArticles.length || primary_key < 0) return response.status(400).json({message: "bad request - wrong primary key"});
    const deletedTarget = await Article.findByIdAndDelete(allArticles[primary_key]._id);
    return response.status(200).json(deletedTarget);
});
// check if json sent in post request has valid fields
async function validatePost(post){
    const modelArticle = await Article.findOne({});
    let checker = (arr, toBeIncluded) => toBeIncluded.every(v => arr.includes(v));
    // check for valid keys in json and if the name is entered
    // article._doc is the document body
    if(!checker(Object.keys(modelArticle._doc), Object.keys(post)) || post.Article_no.length < 1){ return false; }
    return true;
}

const start = async () =>{
    try{
        await mongoose.connect(serverURI);
        app.listen(port, ()=> console.log(`API WORKING ON PORT ${port}`));
    }
    catch (e){
        console.error(e);
        process.exit(1);
    }
};

start();