const path = require('path');

module.exports = {
  entry: './react/main.jsx',
	output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },
	module: {
		loaders: [{
    	test: /\.jsx?$/,
    	loader: 'babel-loader',
    	exclude: /node_modules/,
    	query: {
      	presets: ['es2015', 'react']
    	}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
