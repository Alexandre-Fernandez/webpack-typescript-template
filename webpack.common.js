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

/*
module.exports = {
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

*/
