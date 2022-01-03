const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/index.ts"
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				use: "babel-loader",
				include: [path.resolve(__dirname, "src")]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			chunks: "index",
			inject: "head",
			scriptLoading: "defer"
		})
	],
	optimization: {
		minimizer: [
			new CssMinimizerPlugin()
		]
	},
}
