// complete the given function

function palindrome(str){
	let s = str.toLowerCase();
	let i=0, j=s.length-1;
	while(i<=j){
		if(s[i]!=s[j])return false;
		i++;j--;
	}
	return true;
}
module.exports = palindrome
