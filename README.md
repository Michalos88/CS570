# JavaScript Projects
Collection of my projects in JavaScript:

1. FizzBuzz:

 Output numbers between 74 and 291.
 If the number is divisible by 3, output the word Buzz instead of the number.
 If the number is divisble by 5, output Fizz to the screen instead of the number.
 If the number is divisible by both, output BuzzFizz to the screen instead of the number


2. Ceasar's Cipher

 Deciphering a given message. It is encrypted with a Caesar Cipher.
 that increases by 2 after every 3 characters (including symbol characters, which are not encoded), starting at key = 5.
 The program saves this message to a file using a text editor.
 Then, it prompts the user for the name of the file, decrypt the message stored in the file,
 and then write the decrypted message to a new file called solution.txt.

3. TIC-TAC-TOE

 1. Ask if the player would like to resume a saved game. If yes, load game state from a text or binary file (your choice of file format).
 For a new game, ask how many players are playing as a prompt on its own line. The maximum number of players is 26.
 For a new game, ask how large the board should be as a prompt on its own line. The maximum number is 999.
 For a new game, ask what the win sequence count should be (i.e. 3 would be normal standard tic-tac-toe) as a prompt on its own line.
 For a new game, check to ensure that winning is possible given the criteria specified, and display an error and quit if not.
 2. Output a board in the following general format:

       >   1   2   3
       >1     |   |
       >   ---+---+---
       >2     |   |
       >  ---+---+---
       >3     |   |

 3. Repeat the following process over and over again until the user saves and quits, the game is won, or a tie occurs:
 Ask the user for a row and column number separated by spaces, or Q to quit. Put the appropriate symbol for that player in the specified spot. Players should be given the following symbols, in order: XOABCDEFGHIJKLMNPQRSTUVWYZ
 If the user chooses instead to save and quit, ask them for a filename in a prompt on its own line. Then, save to that file and quit.
