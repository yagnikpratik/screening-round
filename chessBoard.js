function chessBoard(x,y,n){
	// All possible moves of Knight
	let knightMoves = [
		{x:2, y:-1},{x:2, y:1},{x:1, y:-2},{x:1, y:2},
		{x:-2, y:-1},{x:-2, y:1},{x:-1, y:-2},{x:-1, y:2}
	]

	// variable to hold all possible moves from given coordinates
	let possibleMoves = []
	
	// loop through all possible moves
	for(let move of knightMoves) {
		let row = x + move.x // add x value of possible move to coordinate X
		let column = y + move.y // add y value of possible move to coordinate Y

		// if row and column is within chess board push value to an array of possible moves
		if((row < n) || (row >= 0) || (column < n) || (column >= 0)){
		    possibleMoves.push("Row : " + row + " , Column : " + column)
		}
	}
	// return all possible moves
    return possibleMoves
}

// x = 3, y = 3, n = 8
chessBoard(3,3,8)