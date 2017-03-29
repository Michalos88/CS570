# JavaScript Projects
Collection of my projects in JavaScript:

1. **FizzBuzz**:

 Output numbers between 74 and 291.
 If the number is divisible by 3, output the word Buzz instead of the number.
 If the number is divisble by 5, output Fizz to the screen instead of the number.
 If the number is divisible by both, output BuzzFizz to the screen instead of the number


2. **Ceasar's Cipher**

 Deciphering a given message. It is encrypted with a Caesar Cipher.
 that increases by 2 after every 3 characters (including symbol characters, which are not encoded), starting at key = 5.
 The program saves this message to a file using a text editor.
 Then, it prompts the user for the name of the file, decrypt the message stored in the file,
 and then write the decrypted message to a new file called solution.txt.

3. **TIC-TAC-TOE**

 A. Ask if the player would like to resume a saved game. If yes, load game state from a text or binary file (your choice of file format).
 For a new game, ask how many players are playing as a prompt on its own line. The maximum number of players is 26.
 For a new game, ask how large the board should be as a prompt on its own line. The maximum number is 999.
 For a new game, ask what the win sequence count should be (i.e. 3 would be normal standard tic-tac-toe) as a prompt on its own line.
 For a new game, check to ensure that winning is possible given the criteria specified, and display an error and quit if not.
 
 B. Output a board in a specific format.
 
 C. Repeat the following process over and over again until the user saves and quits, the game is won, or a tie occurs:
 Ask the user for a row and column number separated by spaces, or Q to quit. Put the appropriate symbol for that player in the specified spot. Players should be given the following symbols, in order: XOABCDEFGHIJKLMNPQRSTUVWYZ
 If the user chooses instead to save and quit, ask them for a filename in a prompt on its own line. Then, save to that file and quit.
 
4. **Bouncy Bubble Sort**

 In standard bubble sort, the algorithm makes multiple passes through the list, swapping items so that the smaller value comes first and the larger value comes second.
 Implement a "bouncing" bubble sort. In this version of bubble sort, instead of making passes through a list that starts at the beginning and runs through to the end, you should reverse the direction of each pass. That is, if the first pass starts at the beginning of the list and runs through to the end, the second pass would run from the end of the list back to the beginning, and then the third pass would start at the beginning again.
 
5. **Reverse Polish Notation Calculator**

 Implement the RPN calculator pseudo-code supplied in the lecture as real code. Your program must:

  Prompt the user for an infix math problem.
  Convert the problem to postfix.
  Output the problem in postfix.
  Calculate the result.
  Display the result.
  Ask the user for another math problem.
  If the user enters quit for the problem, end the program.

  Use the standard stack and queue class/methodology provided by your preferred language's framework, such as the STL stack/queue classes in C++ or the Array class in JavaScript. Put the conversion procedure in its own function. Put the calculate result procedure in its own function as well.

  You need to handle multi-digit numbers even though the sample code does not. In your version, numbers (operands) are separated from operators by zero or more spaces, while numbers are separated from other numbers by one or more spaces. While negative numbers cannot be input by the user, the result may be negative based on the input math problem.

  You must support +, -, *, /,^ and % operators, as well as (potentially nested) parenthesis.

6. **Sorted Set**

 Write a sorted set data structure using binary search trees. Then, read in numbers from a file named infile.dat, inserting them into an instance of your sorted set. You will then prompt the user for a value, and search the tree to determine if the value is found in the tree. If the value is present, output "Yes" and no other text. If the value is missing, output "No" and no other text.

 SortedSet {
   isEmpty()
   add(value)
   remove(value)
   contains(value)
 }
