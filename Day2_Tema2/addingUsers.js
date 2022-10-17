// aceast file este folosit pentru a adauga useri in mongodb pentru testing ca alternativa pentru compass, creaza si colectia daca nu este facuta

const mongoose  = require('mongoose');
const Article   = require('./Article.js');

mongoose.connect("mongodb://localhost/aquasofttema2", ()=> console.log("Connected to MongoDB locally!"), (err)=> console.log("Failed to connect with error: ", err));

const newUser = new Article({
    Article_no: "nr3",
	Article_short_description: "short description 3",
	Article_date: new Date(),
	Collection_date: new Date(),
	Article_body: "body of article3",
	Article_source: "source of article3",
	Article_URL: "Url of article3",
	Location: "Location of article3",
	Article_keywords: "Keywords of article3",
	Article_weight: 3,
	Article_citations: "citations of article3"
});
newUser.save().then(()=>{
    console.log("Added User: ", newUser);
    mongoose.connection.close();
});
