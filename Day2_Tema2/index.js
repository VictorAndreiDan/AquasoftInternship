const express           = require('express');
const addNewArticle     = require('./addingArticle.js');
const {toInteger}       = require('lodash');
const mongoose          = require('mongoose');
const Article           = require('./Article.js');
const Categories        = require('./Categories.js');
const Tokens            = require('./Tokens.js');
const app               = express();
const port              = process.env.PORT || 8080;
const serverURI         = "mongodb://localhost:27017/aquasofttema2";

// enable json usage on express
app.use(express.json());

// 2 GET (return every element in table/ return 1 element using its name)

// GET
// GET TOKEN WITH ALL ARTICLES IT IS IN AND ALL CATEGORIES OF THESE ARTICLES
app.get('/tokens/:token_name', async (request, response) =>{
    const result = await Tokens.findOne({Token_body: request.params.token_name});
    let tempArticle, tempCategory;
    let allCategories = [];
    let finalCategories = [];
    if (result.length == 0) return response.status(404).json({message: "404 - there are no tokens with that name yet yet!"});
    console.log("got result: ", result.Articles.length);
    let finalResult = [];
    for(let i=0; i<result.Articles.length; i++){
        // show every article
        tempArticle = await Article.findById(result.Articles[i]);
        finalResult.push(tempArticle);
        //console.log('Found article;', tempArticle);
        tempCategory = await Categories.findById(tempArticle.Article_category);
        if(allCategories.includes(tempCategory.Category_name) == false){
            allCategories.push(tempCategory.Category_name);
            finalCategories.push(tempCategory);
            //console.log('pushing categ:', tempCategory.Category_name);
        }
    }
    finalResult.push(finalCategories);
    console.log("ALL CATEGS:", finalResult);
    return response.status(200).json(finalResult);

});
app.get('/articles', async (request, response) =>{
    const result = await Article.find();
    if (result.length == 0) return response.status(404).json({message: "404 - there are no articles yet!"});
    return response.status(200).json(result);
});
app.get('/categories', async (request, response) =>{
    const result = await Categories.find();
    if (result.length == 0) return response.status(404).json({message: "404 - there are no articles yet!"});
    return response.status(200).json(result);
});
app.get('/tokens', async (request, response) =>{
    const result = await Tokens.find();
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
    let newArticle;
    // article name is mandatory
    validatePost(request.body).then(async (result) => {
        if(!result) return response.status(400).json({message: "bad request - article needs a name or has bad fields"});
        // newArticle._doc = {...newArticle._doc, ...request.body};
        // newArticle.save();
        newArticle = await addNewArticle(request.body);
        return response.status(200).json(newArticle);
    });
});
// add category
app.post('/categories', async (request, response) => {
    let newCategory = new Categories();
    newCategory.Category_name = request.body.Category_name;
    console.log("THE NEW CATEG IS: ", newCategory);
    await newCategory.save();
    return response.status(200).json(newCategory);
});
// add token
app.post('/tokens', async (request, response) => {
    let newToken = new Tokens();
    newToken.Token_body = request.body.Token_body;
    console.log("THE NEW TOKEN IS: ", newToken);
    await newToken.save();
    return response.status(200).json(newToken);
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
// put category
app.put('/categories/:primary_key', async (request, response) => {
    const primary_key = toInteger(request.params.primary_key);
    const allCategories = await Categories.find();
    if(primary_key > allCategories.length || primary_key < 0) return response.status(400).json({message: "bad request - wrong primary key"});
    await Categories.updateOne({ _id: allCategories[primary_key]._id }, request.body);
    const updatedTarget = await Categories.findById(allCategories[primary_key]._id);
    return response.status(200).json(updatedTarget);
});
// put token
app.put('/tokens/:primary_key', async (request, response) => {
    const primary_key = toInteger(request.params.primary_key);
    const allTokens = await Tokens.find();
    if(primary_key > allTokens.length || primary_key < 0) return response.status(400).json({message: "bad request - wrong primary key"});
    await Tokens.updateOne({ _id: allTokens[primary_key]._id }, request.body);
    const updatedTarget = await Tokens.findById(allTokens[primary_key]._id);
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
// delete category
app.delete('/categories/:primary_key', async (request, response) => {
    const primary_key = toInteger(request.params.primary_key);
    const allCategories = await Categories.find();
    if(primary_key > allCategories.length || primary_key < 0) return response.status(400).json({message: "bad request - wrong primary key"});
    const deletedTarget = await Categories.findByIdAndDelete(allCategories[primary_key]._id);
    return response.status(200).json(deletedTarget);
});
// delete token
app.delete('/tokens/:primary_key', async (request, response) => {
    const primary_key = toInteger(request.params.primary_key);
    const allTokens = await Tokens.find();
    if(primary_key > allTokens.length || primary_key < 0) return response.status(400).json({message: "bad request - wrong primary key"});
    const deletedTarget = await Tokens.findByIdAndDelete(allTokens[primary_key]._id);
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