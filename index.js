// Load the full build.
var _ = require('lodash');


console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));