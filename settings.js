/*
	Configurable task parameters
 */

// Display color for blocks in unhighlighted state.
var blockColor = 'rgb(0,0,255)'
// Display color for currently highlighted ("tapped") blocks.
   ,tapColor = 'rgb(255, 255, 255)'
// Display color for the virtual game board.
   ,boardColor = 'black'
// Display color for the buttons.
   ,buttonColor = 'rgb(200,200,200)'
// Size of blocks in mm. Default is '30mm'.
   ,blockSize = 30//mm
// The size used for the user ID entry screen and the calibration screen
   ,tmpBoardSize = 1000
// Width of the virtual game board in mm. Default is '255mm'.
   ,boardWidth = 255//mm
// Height of the virtual game board in mm. Default is '205mm".
   ,boardHeight = 205//mm
   ,buttonWidth
   ,buttonHeight
// The number of mistakes allowed for each span length.
// 2 sequences per span length, so only 1 mistake is allowed.
   ,allowedMistakes = 1
// 'true' -> show performance feedback after each completed sequence.
// 'false" -> don't show performance feedback after each completed sequence.
   ,showFeedback = true
// 'true' -> show score summary at the end of the procedure.
// 'false' -> don't show score summary at the end of the procedure.
   ,showScores = true
// "Interval between "taps" in ms. Default is '1000'."
   ,tapInterval = 1000
// "Time between erasing a previously highlighted block and highlighting the next one in ms."
// These two quoted comments I'm actually not sure what they mean.  By my interpretation,
// the sequence will be: highlight -> wait 750 ms -> unhighlight -> wait 250 ms -> cont...
   ,postTapInterval = 250
// Duration of performance feedback after recalling a sequence.
// Right now there is always a countdown, so the minimum is 3 seconds.
   ,feedbackDuration = 1000
// Length of the calibration line as measured in mm.
// Will be set when the user presses the 'Calibrate' button before the game starts.
   ,cal_mm // = ??? // (set yourself here: remove '//' before the '=' and replace '???' with your measurement)
// Length of the calibration line in pixels.
   ,cal_px = 500
// Used in all mm-to-pixel (and vice versa) conversions.
// Computes a given display's mm-to-pixel-ration based on calibration data.
 	 ,mmtopx;

var blockLocs;

var blocks;

// This must be called for the program to work.
var calibrateVals = function() {
   // Used in all mm-to-pixel (and vice versa) conversions.
   // Computes a given display's mm-to-pixel-ration based on calibration data.
      mmtopx = cal_mm/cal_px
   // Returns blocks' display sizes in pixels.
      ,blockSize = Math.round((blockSize/mmtopx))
   // Returns game board width in pixels.
      ,boardWidth = Math.round((boardWidth/mmtopx))
   // Returns gameboard height in pixels.
      ,boardHeight = Math.round((boardHeight/mmtopx))

      ,buttonWidth = boardWidth/5
      ,buttonHeight = boardHeight/20;

   // The locations of the blocks within the board
   blockLocs = [[75/mmtopx, 155/mmtopx]
                ,[175/mmtopx, 145/mmtopx]
                ,[25/mmtopx, 120/mmtopx]
                ,[135/mmtopx, 110/mmtopx]
                ,[65/mmtopx, 90/mmtopx]
                ,[10/mmtopx, 60/mmtopx]
                ,[190/mmtopx, 50/mmtopx]
                ,[130/mmtopx, 20/mmtopx]
                ,[70/mmtopx, 30/mmtopx]];

   blocks = [new Block(0, blockLocs[0])
             ,new Block(1, blockLocs[1])
             ,new Block(2, blockLocs[2])
             ,new Block(3, blockLocs[3])
             ,new Block(4, blockLocs[4])
             ,new Block(5, blockLocs[5])
             ,new Block(6, blockLocs[6])
             ,new Block(7, blockLocs[7])
             ,new Block(8, blockLocs[8])];
}