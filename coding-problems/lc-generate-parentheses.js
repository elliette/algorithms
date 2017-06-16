/*
GENERATE PARENTHESES:

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

function generateParenthesis(n){
	var parensArr = [];
	function recurse(needsToBeUsed, needsClosure, currParens){
		if (!needsToBeUsed && !needsClosure){
			parensArr.push(currParens);
		}
		if (needsToBeUsed) {
			recurse(needsToBeUsed - 1, needsClosure + 1, currParens + '(');
		}
		if (needsClosure) {
			recurse(needsToBeUsed, needsClosure - 1, currParens + ')' );
		}
	}
	recurse(n, 0, '');
	return parensArr.sort();
}
