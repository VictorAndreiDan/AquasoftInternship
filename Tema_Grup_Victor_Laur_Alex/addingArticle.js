// aceast file este folosit pentru a adauga useri in mongodb pentru testing ca alternativa pentru compass, creaza si colectia daca nu este facuta
const addToken			= require('./addingTokens.js');
const addCategories		= require('./addingCategories.js');
// const mongoose  		= require('mongoose');
const Article   		= require('./Article.js');


async function addNewArticle(articleJson){
	// await mongoose.connect("mongodb://localhost/aquasofttema2");
	const newArticle = new Article({
		Article_no: articleJson.Article_no,
		Article_short_description: articleJson.Article_short_description,
		Article_date: new Date(),
		Collection_date: new Date(),
		Article_body: articleJson.Article_body,
		Article_source: articleJson.Article_source,
		Article_URL: articleJson.Article_URL,
		Location: articleJson.Location,
		Article_keywords: articleJson.Article_keywords,
		Article_weight: articleJson.Article_weight,
		Article_citations: articleJson.Article_citations
		// Article_tokens: [],  // article has many tokens
		// Article_category: {} // article has only 1 category
	});
	//adding category
	let newCateg;
	newCateg = await addCategories(articleJson.Article_category, newArticle._id);
	console.log("NEWCATEG in articles: ", newCateg);
	newArticle.Article_category = newCateg;
	//adding tokens
	const futureTokens = newArticle.Article_body.split(" ");
	let auxToken;
	for(let i = 0; i < futureTokens.length; i++){
		auxToken = await addToken(futureTokens[i], newArticle._id);
		console.log("NEWTOKEN in articles: ", auxToken);
		newArticle.Article_tokens.push(auxToken);
	}
	await newArticle.save();
	// await mongoose.disconnect();
	// await mongoose.connection.close();
	return newArticle;
}

module.exports = addNewArticle;

// addNewArticle({
// 	"Article_no": "baseArticleForModel",
// 	"Article_short_description": "model article",
// 	"Article_body": "modelToken",
// 	"Article_source": "model source",
// 	"Article_URL": "model url",
// 	"Location": "model location",
// 	"Article_keywords": "model keywords",
// 	"Article_weight": 1,
// 	"Article_citations": "modelCitations",
// 	"Article_category": "modelCategory"
//   });