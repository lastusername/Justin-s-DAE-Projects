name = input("Hello User, what is your name: ")
greeted_Amt = int(input("how many times do you want to be greeted?")) # Get User name


for x in range(greeted_Amt): #loops the users name for chosen amount of times
    print(name)

UsrChoice = input("Alright " +name+ ", we'll now play a game. Would you like to guess?(y/n)") #user chooses to guess the name

if UsrChoice.lower() == "y":
    input("Great! go ahead!")
else:
    print("Alright") 
print("Well it didn't matter anyway. The game is guess the number. THe rules of the game are simple. You chose the a low number and a high number. I then chose a random number and then you have to guess which one it is. I'll give hints if you want")

Valid = True
while (Valid): # create a while loop for if the user wants to play again
    print("Let's do this!") 
    import game # we start the game
    game.game()
    UsrChoice = input("would you like to play again?") 
    Valid = game.YesNo(UsrChoice) #Retrieves if user wants to continue or not
