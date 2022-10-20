const mongoose = require("mongoose");

const tokensSchema = new mongoose.Schema({
    Token_body: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Tokens", tokensSchema);