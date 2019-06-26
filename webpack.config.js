var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env','react']
	        }
	      }
	    },
	    {
        test: /\.css$/i,
        use: [
	        'style-loader', 
	        'css-loader'
        ],
      },
	  ]
	},
	plugins: [
	 	new HtmlWebpackPlugin({
	 		template:'./src/index.html'
	 	})
	]
};