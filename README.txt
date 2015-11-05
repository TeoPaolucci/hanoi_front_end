This is the front end portion of my tower of hanoi stat tracking web application.

The ultimate goal of this web application is to have a site that a user can log into to track a user's statistics in the completion of the puzzle called "The Tower of Hanoi". A user will be able to add/remove/update entries and access their stats in a variety of useful ways. Ways of accessing entries will be:

-Chronological list: A list of all of the entries ordered chronologically, newest entries at the top.
-Best times list: A list of all of the entries ordered from fastest to slowest
-Least moves list: Same as above, ordered from least moves to most moves
-Average time completion: return an average of the completion time for all entries
-Average number of moves: same as above but for number of moves
-Minimum move completions: Returns how many puzzles were solved in the minimum number of moves and overall percentage
-Difficulty filtering: Using ANY of the menthods above, a user can filter the results by how many discs were in the puzzle
  i.e Average time completion with the filter set to 5 discs wil return the average time of only the 5 disc puzzle entries

Once logged in, a user will be able to select the number of discs the puzzle starts with and play the puzzle, the website will keep track of the number of moves and how long it took for the user to complete the puzzle. Once solved, the record is submitted to the database for the user and they have the option of starting a new game. A user can also manually submit records through an interface at the bottom of the page. This form will only work if the user is logged in, and make sure that information provided is valid (enforcing minimum number of moves, puzzles can not have 0 discs, etc.).
