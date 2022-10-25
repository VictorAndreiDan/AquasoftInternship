const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    Category_name: {
		type: String,
		required: true
	},
	Articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Articles', required: true }]
});

module.exports = mongoose.model("Categories", categoriesSchema);