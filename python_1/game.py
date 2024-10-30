import random

def YesNo(UsrChoice): # Check if user input is 'y' to continue
    Valid = True
    if UsrChoice.lower() == "y":
            print("Alright!")
            return Valid
    else:
            print("Alright")
            Valid = False
            return Valid
def game(): # Main game function
    Valid = True
    while (Valid): # Loop for valid low and high values

        try:
            lowVar = int(input("What is your low variable?"))
            highVar = int(input("What is your high variable?"))
            botNum = random.randint(lowVar, highVar)
            Valid = False
        except:
            UsrChoice = input("An error occured with your input, would you like to try again?")
            YesNo(UsrChoice)


    Valid = True
    while (Valid):  # Loop for user guesses
        try:
            Var = int(input("Guess a number between " + str(lowVar) + " through " + str(highVar) + "?"))
            Valid = False
            if Var == botNum:
                print("You got it!")
            else:
                print("You didn't get it, try again")
                Valid = True
        except:
            UsrChoice = input("An error occured with your input, would you like to try again?")
            YesNo(UsrChoice)
    