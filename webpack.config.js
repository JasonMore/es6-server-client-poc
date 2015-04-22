module.exports = {
	cache:true,
	debug:true,
	devtool: 'eval',
	context: __dirname + "/app",
	//entry: "./entry.js",
	entry: {
		app: ['./entry.js']
	},
	output: {
		path: __dirname + "/app/_bundle",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: "raw" },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime', cacheDirectory:__dirname + "/app/_bundle/cache"},
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.less$/, loader: "style!css!less"}
		]
	}
};