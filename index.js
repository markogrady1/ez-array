"use strict";

var easy;

// this script simply returns an array from a given string of either characters or digits
// returning either a string array, number array or a mixed array. Your choice.

if (typeof exports != 'undefined' && !exports.nodeType) {
	if (typeof module != 'undefined' && !module.nodeType && module.exports) {
        exports = module.exports = easy = {};
    }
	exports.easy = easy;	
 } else {
	easy = {};
}

easy.words = function(str) {
	var wordArr = str.split(/\s+/);
	return wordArr;
}

easy.nums = function(numbers) {
	var arr = numbers.split(/\s+/);
	var numArr = arr.map((item) => {
		return parseInt(item);		
	});
	return numArr;
}

easy.mix = function(mixedStr) {
	var arr = mixedStr.split(/\s+/);
	var mxArr = arr.map((item) => {
		return !isNaN(parseInt(item)) ? parseInt(item) : item;	
	});
	return mxArr;
}
