var easy = require('../');

var result1 = easy.words("hey man whats up");
// all string array
// == > [ 'hey', 'man', 'whats', 'up' ]

var result2 = easy.nums("23 235 64 24 12");
// all number array
// == > [ 23, 235, 64, 24, 12 ]

var result3 = easy.mix("hey man 23 453 whats 2 643 up");
// string and number array
// == > [ 'hey', 'man', 23, 453, 'whats', 2, 643, 'up' ]

console.log(result1, result2, result3)