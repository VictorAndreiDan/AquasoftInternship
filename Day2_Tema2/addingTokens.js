// aceast file este folosit pentru a adauga useri in mongodb pentru testing ca alternativa pentru compass, creaza si colectia daca nu este facuta

const mongoose  = require('mongoose');
const Tokens	= require('./Tokens.js');

mongoose.connect("mongodb://localhost/aquasofttema2", ()=> console.log("Connected to MongoDB locally!"), (err)=> console.log("Failed to connect with error: ", err));

async function addToken(tokenBody){
	const searchResult	= await Tokens.find({Token_body: tokenBody});
	if(searchResult.length > 0) {
		console.log("Token with body:", tokenBody, "already exists!");
		mongoose.connection.close();
		return false;
	} // Token already exists
	const newToken = new Tokens({
		Token_body: tokenBody
	});
	newToken.save().then(()=>{
		console.log("Added Token: ", newToken);
		mongoose.connection.close();
		return true;
	});
}

module.exports = addToken;