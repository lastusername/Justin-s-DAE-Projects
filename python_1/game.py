import random

def tryAgain():
    UsrChoice = input("An error occured with your input, would you like to try again?")
    if UsrChoice.lower() == "y":
            print("Alright!")
    else:
            print("Alright")
            Valid = False






Valid = True
while (Valid):
    try:
        highVar = int(input("What is your high variable?"))
        lowVar = int(input("What is your low variable?"))
        Valid = False
    except:
        tryAgain()
botNum = random.randint(lowVar, highVar)

Valid = True
while (Valid):
    try:
        Var = int(input("Guess a number between " + str(lowVar) + " through " + str(highVar) + "?"))
        Valid = False
        if Var == botNum:
            print("You got it!")
        else:
            print("You didn't get it, try again")
            Valid = True
    except:
        tryAgain()
    