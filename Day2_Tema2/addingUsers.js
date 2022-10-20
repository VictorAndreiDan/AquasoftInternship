// aceast file este folosit pentru a adauga useri in mongodb pentru testing ca alternativa pentru compass, creaza si colectia daca nu este facuta
const addToken			= require('./addingTokens.js');
const addCategories		= require('./addingCategories.js');
const mongoose  		= require('mongoose');
const Article   		= require('./Article.js');

// mongoose.connect("mongodb://localhost/aquasofttema2");

// const newUser = new Article({
//     Article_no: "nr789",
// 	Article_short_description: "short description 3",
// 	Article_date: new Date(),
// 	Collection_date: new Date(),
// 	Article_body: "body of article3",
// 	Article_source: "source of article3",
// 	Article_URL: "Url of article3",
// 	Location: "Location of article3",
// 	Article_keywords: "Keywords of article3",
// 	Article_weight: 3,
// 	Article_citations: "citations of article3"
// });
// newUser.save().then(()=>{
//     console.log("Added User: ", newUser);
//     mongoose.connection.close();
// });

async function doSmth(){
	await mongoose.connect("mongodb://localhost/aquasofttema2");
	const firstArticle = await Article.findOne({Article_no: 'nr2'});
	await mongoose.disconnect();
	console.log("got id:", firstArticle._id);
	await addToken('firstToken', firstArticle._id);
	await addToken('firstToken', firstArticle._id);
	await addCategories('firstCategory', firstArticle._id);
	await addCategories('firstCategory', firstArticle._id);

	await mongoose.connection.close();
}
doSmth();