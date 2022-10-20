const Tokens	= require('./Tokens.js');
const mongoose  = require('mongoose');

async function addToken(tokenBody, objectId){
	await mongoose.connect("mongodb://localhost/aquasofttema2");
	const searchResult = await Tokens.find({Token_body: tokenBody});
	console.log("THE length is: ", searchResult.length);
	if(searchResult.length > 0 && searchResult[0].Articles.includes(objectId)) {
		console.log("Token with body:", tokenBody, "already exists and has post as primary key!");
		return false;
	} // Token already exists
	if(searchResult.length > 0 && !(searchResult[0].Articles.includes(objectId))){
		searchResult[0].Articles.push(objectId);
		searchResult[0].save();
		console.log("Token with body:", tokenBody, "already exists but article was added as foreign key with id:", objectId);
		return false;
	}
	const newToken = new Tokens({
		Token_body: tokenBody,
		Articles: []
	});
	newToken.Articles.push(objectId);
	newToken.save().then(()=>{
		console.log("Added Token: ", newToken);
		return true;
	});
	await mongoose.disconnect();
}

module.exports = addToken;