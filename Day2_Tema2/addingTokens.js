const Tokens	= require('./Tokens.js');

async function addToken(tokenBody, objectId){
	const searchResult = await Tokens.find({Token_body: tokenBody});
	console.log("THE length is: ", searchResult.length);
	if(searchResult.length > 0 && searchResult[0].Articles.includes(objectId)) {
		console.log("Token with body:", tokenBody, "already exists and has post as foreign key!");
		return searchResult[0]._id;
	} // Token already exists
	if(searchResult.length > 0 && !(searchResult[0].Articles.includes(objectId))){
		searchResult[0].Articles.push(objectId);
		searchResult[0].save();
		console.log("Token with body:", tokenBody, "already exists but article was added as foreign key with id:", objectId);
		return searchResult[0]._id;
	}
	const newToken = new Tokens({
		Token_body: tokenBody,
		Articles: []
	});
	newToken.Articles.push(objectId);
	await newToken.save();
	console.log("Added Token: ", newToken);
	return newToken._id;
}

module.exports = addToken;