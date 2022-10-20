const mongoose = require("mongoose");

const tokensSchema = new mongoose.Schema({
    Token_body: {
		type: String,
		required: true
	},
	Articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Articles', required: true }]  // token is used by many articles
});

module.exports = mongoose.model("Tokens", tokensSchema);