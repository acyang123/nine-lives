Creating an object on death should be feasible
	- the player position coordinates will be reset to the stored coordinate values
	- there will also be a rectangle of the size of the player drawn at the coordinates of the death of class platform
	- its image will be an altered version of the cat image

This whole making the dead cats usable and interactive objects seems not very feasible considering it is not a main part of the game also I think it would make it too easy. 

Gravity on player:
	- constantly be reducing the players position in the Y direction
	- if they are in contact with a platform: disable gravity
	- the jump function should increase the Y position with a greater value than gravity to allow Y position to go up

The tuna can collectibles are doable
	- there will be a variable with the number of tuna cans collected
	- each time the position of the player equals the position of a defined tuna can, erase the tuna can at that position and increase the tuna cans collected variable by one

For multiplayer:
	- check when down arrow pressed while player is on a corpse if the player is player 1 or player 2. if they are player two then set their position equal to the corpse below them, set a timer for invulnerability, erase the corpse below them, disable the gravity on the player.

Instant death feature is very doable
	- simply assign a button to execute the same function that occurs when the player encounters a hazard and dies
Play as dog feature seems doable but the double jump feature might be tricky
	- set the players available lives to 0 with each level
	- maybe while player is not in contact with a platform, allow jump button to be pressed then immediately after disable it until they come in contact with another platforms
Corpse ability feature seems like too much work with very little actual usage in the game
