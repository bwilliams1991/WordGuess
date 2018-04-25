
function Letter (letters) {
	this.current = "_";
	this.letters = letters;
	this.showLetter = false;
	this.existsLetter = (letter) => {
		if (this.letters == letter) {
			this.current = this.letters
			return true;
		}
		return false;
		
		}
		this.letterShows = function() {
			return this.current;
	}
}

// testing 
var a = new Letter("a");

console.log(a.letters);
console.log(a.letterShows());
console.log(a.existsLetter('t'));
console.log(a.existsLetter('a'));
console.log(a.letterShows());

// ===========================
module.exports = Letter;