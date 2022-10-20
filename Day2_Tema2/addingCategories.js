const Categories	= require('./Categories.js');
const mongoose		= require('mongoose');

async function addCategories(categoryName, articleID){
	await mongoose.connect("mongodb://localhost/aquasofttema2");
	const searchResult	= await Categories.find({Category_name: categoryName});
	console.log("THE length is: ", searchResult.length);
	if(searchResult.length > 0 && searchResult[0].Articles.includes(articleID)) {
		console.log("Category with name:", categoryName, "already exists and the article is already added as foreign key!");
		return false;
	} // Token already exists
	if(searchResult.length > 0 && !searchResult[0].Articles.includes(articleID)) {
		searchResult[0].Articles.push(articleID);
		searchResult[0].save();
		console.log("Category with name:", categoryName, "has added article as foreign key with id:", articleID);
		return false;
	}
	const newCategory = new Categories({
		Category_name: categoryName,
		Articles: []
	});
	newCategory.Articles.push(articleID);
	newCategory.save().then(()=>{
		console.log("Added Category: ", newCategory);
		return true;
	});
	await mongoose.disconnect();
}

module.exports = addCategories;