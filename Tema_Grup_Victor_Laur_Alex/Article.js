const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    Article_no: {
		type: String,
		required: true
	},
	Article_short_description: String,
	Article_date: Date,
	Collection_date: Date,
	Article_body: String,
	Article_source: String,
	Article_URL: String,
	Location: String,
	Article_keywords: String,
	Article_weight: Number,
	Article_citations: String,
	Article_tokens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tokens' }],  // article has many tokens
	Article_category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' } // article has only 1 category
});

module.exports = mongoose.model("Articles", articleSchema);