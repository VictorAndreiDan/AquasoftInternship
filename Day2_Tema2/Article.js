const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    Article_no: String,
	Article_short_description: String,
	Article_date: Date,
	Collection_date: Date,
	Article_body: String,
	Article_source: String,
	Article_URL: String,
	Location: String,
	Article_keywords: String,
	Article_weight: Number,
	Article_citations: String
});

module.exports = mongoose.model("Articles", articleSchema);