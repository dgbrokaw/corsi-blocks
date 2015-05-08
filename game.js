// The game object is where the sequences are defined.
// It also keeps track of the state of the experiment.

var Game = function() {
	this.userID = null;
	this.userGroupNum = null;

	this.sequences = [new Sequence(0, [7,4])
									 ,new Sequence(1, [5,3])];
									 // ,new Sequence(2, [3,6,1])
									 // ,new Sequence(3, [8,0,4])
									 // ,new Sequence(4, [2,3,0,6])
									 // ,new Sequence(5, [5,0,4,7])
									 // ,new Sequence(6, [4,1,0,7,5])
									 // ,new Sequence(7, [3,1,6,2,0])
									 // ,new Sequence(8, [2,8,1,3,7,6])
									 // ,new Sequence(9, [2,6,7,1,8,3])
									 // ,new Sequence(10, [4,8,0,6,3,1,7])
									 // ,new Sequence(11, [4,6,8,1,7,3,5])
									 // ,new Sequence(12, [4,7,0,8,1,5,3,6])
									 // ,new Sequence(13, [4,8,2,5,6,1,3,2])
									 // ,new Sequence(14, [4,2,7,6,0,1,3,5,8])
									 // ,new Sequence(15, [3,1,5,7,0,6,8,2,4])];
	this.idx = 0;

	// possible values will be 'display', 'user', 'report', and 'done'
	// display: the current sequence will be flashed at the user
	// user: when the user will be allowed to store input and input final answer
	// report: the success of the previous sequence will be shown
	// done: the game is over, the final data collection will take place
	this.mistakesInCurrentSpanLength = 0;
	this.allowedMistakes = 1;
	this.stage = null;
	this.numCorrect = 0;
	this.longestSpan = 0;
	this.results = [];
}

Game.prototype.setUserID = function(id) {
	this.userID = id;
}

Game.prototype.setUserGroupNum = function(num) {
	this.userGroupNum = num;
}

Game.prototype.getUserID = function() {
	return this.userID;
}

Game.prototype.getUserGroupNum = function() {
	return this.userGroupNum;
}

Game.prototype.newSpan = function() {
	if (this.idx === 0) return true;
	return this.sequences[this.idx].getSpan() > this.sequences[this.idx-1].getSpan();
}

Game.prototype.mistake = function() {
	this.mistakesInCurrentSpanLength++;
}

Game.prototype.tooManyMistakes = function() {
	return this.mistakesInCurrentSpanLength > this.allowedMistakes;
}

Game.prototype.mistakeReset = function() {
	this.mistakesInCurrentSpanLength = 0;
}

Game.prototype.outOfSequences = function() {
	return this.idx >= this.sequences.length-1;
}

Game.prototype.increment = function() {
	this.idx++;
}

Game.prototype.nextSequence = function() {
	return this.sequences[this.idx];
}

Game.prototype.setStage = function(stage) {
	console.log('Now in ' + stage + ' stage.');
	this.stage = stage;
}

Game.prototype.getStage = function() {
	return this.stage;
}

Game.prototype.inDisplayStage = function() {
	return this.stage === 'display';
}

Game.prototype.inUserStage = function() {
	return this.stage === 'user';
}

Game.prototype.inResultStage = function() {
	return this.stage === 'result';
}

Game.prototype.isDone = function() {
	return this.stage === 'done';
}

Game.prototype.collectScores = function() {
	this.results = [];
	this.numCorrect = 0;
	this.longestSpan = 0;
	for (var i = 0; i < this.sequences.length; i++) {
		var s = this.sequences[i]
			 ,span = s.getSpan()
		   ,c = s.isCorrect();
		this.results.push(c);
		if (c) {
			this.numCorrect++;
			if (span > this.longestSpan) this.longestSpan = span;
		}
	}
}

Game.prototype.reportScores = function() {
	return [this.numCorrect, this.longestSpan];
}

Game.prototype.log = function() {
	console.log(this);
}