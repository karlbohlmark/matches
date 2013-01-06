module.exports = function (el, selector) {
	if (el.matches) return el.matches(selector);

	var matchesSelector = el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector;
	if (matchesSelector) return matchesSelector.bind(el)(selector);

	throw new Exception('No fallback for missing matchesSelector implemented');
};