name = input("Hello User, what is your name: ")
greeted_Amt = int(input("how many times do you want to be greeted?")) # Get User name


for index in range(greeted_Amt): #loops the users name for chosen amount of times
    print(name)

UsrChoice = input("Alright " +name+ ", we'll now play a game. Would you like to guess?(y/n)") #user chooses to guess the name

if UsrChoice.lower() == "y": #if user wants to continue, we allow them
    input("Great! go ahead!")
else:
    print("Alright")  #if user says no, then 
print("Well it didn't matter anyway. The game is guess the number.\nThe rules of the game are simple. You chose the a low number and a high number. \nI then chose a random number and then you have to guess which one it is.\nI'll give hints if you want")

Valid = True
while (Valid): # create a while loop for if the user wants to play again
    print("Let's do this!") 
    import game # we start the game
    game.game()
    UsrChoice = input("would you like to play again?") 
    Valid = game.YesNo(UsrChoice) #Retrieves if user wants to continue or not

print("The following code demonstrates iteration with a list")
list = ["A","B","C"]
for index in range(list.len()): 
    print(list[index])