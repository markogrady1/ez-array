## ez-array
##### This module simply provides an array from a given string of either characters or digits.
##### Return either a string array, number array or a mixed array. Your choice.

### Usage 
```bash

$ npm install ez-array
```



```js

var easy = require('ez-array');
```
##### String array.
```js
var strArr = easy.words("hello world its good to be here");
console.log(strArr);
// == > [ 'hello', 'world', 'its', 'good', 'to', 'be', 'here' ]
```
##### Number array
```js
var numArr = easy.nums("23 235 64 24 12");
console.log(numArr);
// == > [ 23, 235, 64, 24, 12 ]
```
##### Mixed Array
```js
var mixArr = easy.mix("hey man 23 453 whats 2 643 up");
console.log(mixArr);
// == > [ 'hey', 'man', 23, 453, 'whats', 2, 643, 'up' ]
```
