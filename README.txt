Change settings in the settings.js file.
Define new sequences in game.js.
See notes below.

Description of the program that is shown to users (has some different wording):
	"Welcome to the Corsi Block-Tapping Task!
	You are about to take part in a test that measures your ability to remember a sequence
	of locations on the screen.
	You will see nine blocks on the screen. On each trial, several bocks will light up one at a time.
	Your job is to remember their exact sequence.
	As soon as the sequence is finished, you must repeat the sequence by clicking on the blocks
	IN THE SAME ORDER THEY WERE PRESENTED.
	When you are done, click the button labeled NEXT. If you made a mistake, click the button
	labeled CLEAR to retry.
	We will begin with a sequence of two blocks. After every two sequences, the sequence length
	to be recalled will increase. You must get one sequence of each length correct to be able to proceed.
	There will be no practice.  Click CONTINUE to begin.


To run this experiment:
1. Open a browser (chrome)
2. Resize browser window to full screen
3. Open the index.html file in the browser
4. Once entering in an ID and group number,
	 reading the description, and setting the calibration,
	 the game will start when the start button is clicked.
5. The data from the experiment will be downloaded from chrome
	 in JSON format, with the filename structure of date-group-ID.

Note about calibration:
	To not have the calibration screen appear before every trial, find the appropriate
	calibration and enter that value for the cal_mm variable in settings.js.

Note about calibration:
	You may set the calibration yourself for convenience, as mentioned above.  Note that
	the number automatically displayed in the input text box on the calibration screen is
	probably not the correct value for your display!  If you want to change that default
	input value, you must go into index.html.  In the function setupCalibrationScreen, there
	is a foreign object containing an input form.  Change the 'value' field there.  It's
	still probably a better idea to set this once yourself, and then reuse this value as the
	value of cal_mm in settings.js.

Note about user input:
	Any clicks made by the user will be ignored until the phrase 'Repeat the sequence.' is
	shown at the top of the game screen.

Note about defining new sequences:
	You can define new sequences in game.js.  Just know that the current setup for the game
	is to have two sequences of each length (span set), and only one mistake is allowed for each set of two.
	If you want to include more sequences, consider their lengths and how you want the program to behave.
	You can change the amount of allowed mistakes per span set by changing the variable this.allowedMistakes
	near the top of the game.js file.  The number of mistakes will always be reset to zero when a new
	span set is being tested.

