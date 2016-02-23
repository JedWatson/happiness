var eslint = require('eslint');
var extend = require('xtend');
var pkg = require('./package.json');

var configHappiness = require('./rc/.eslintrc.json');
var configStandard = require('eslint-config-standard');
var configStandardJsx = require('eslint-config-standard-jsx');

var config = extend(configStandard, configHappiness);
config.rules = extend(configStandard.rules, configStandardJsx.rules, configHappiness.rules);
config.plugins.push.apply(config.plugins, configStandardJsx.plugins);

module.exports = {
	eslint: eslint,
	cmd: 'happiness',
	version: pkg.version,
	homepage: pkg.homepage,
	bugs: pkg.bugs.url,
	tagline: 'Use JavaScript Happiness Style',
	eslintConfig: {
		baseConfig: config
	},
	formatter: 'Formatting is no longer included with standard. Install it separately: "npm install -g standard-format"'
};
