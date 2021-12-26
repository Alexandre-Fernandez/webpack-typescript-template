const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const path = require("path")

module.exports = merge(common, {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		hot: false
	},	
})