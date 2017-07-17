#!/usr/bin/env node

if (process.version.match(/v(\d+)\./)[1] < 4) {
	console.error('happiness: Node v4 or greater is required. `happiness` did not run.');
} else {
	var opts = require('../options');
	require('standard-engine').cli(opts);
}
