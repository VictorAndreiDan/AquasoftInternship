const Categories	= require('./Categories.js');

async function addCategories(categoryName, articleID){
	const searchResult	= await Categories.find({Category_name: categoryName});
	console.log("CATEG THE length is: ", searchResult.length);
	if(searchResult.length > 0 && searchResult[0].Articles.includes(articleID)) {
		console.log("Category with name:", categoryName, "already exists and the article is already added as foreign key!");
		return searchResult[0]._id;
	} // Token already exists
	if(searchResult.length > 0 && !searchResult[0].Articles.includes(articleID)) {
		searchResult[0].Articles.push(articleID);
		searchResult[0].save();
		console.log("Category with name:", categoryName, "has added article as foreign key with id:", articleID);
		return searchResult[0]._id;
	}
	const newCategory = new Categories({
		Category_name: categoryName,
		Articles: []
	});
	newCategory.Articles.push(articleID);
	await newCategory.save();
	console.log("Added Category: ", newCategory);
	return newCategory._id;
}

module.exports = addCategories;