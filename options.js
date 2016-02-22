var eslint = require('eslint');
var path = require('path');
var pkg = require('./package.json');

module.exports = {
	cmd: 'happiness',
	version: pkg.version,
	homepage: pkg.homepage,
	bugs: pkg.bugs.url,
	eslint: eslint,
	tagline: 'Use JavaScript Happiness Style',
	eslintConfig: {
		configFile: path.join(__dirname, 'rc', '.eslintrc')
	},
	formatter: require('happiness-format'),
	formatterName: 'happiness-format'
};
