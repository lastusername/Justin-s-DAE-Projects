import random

def YesNo(UsrChoice): #checks if user says yes
    Valid = True
    if UsrChoice.lower() == "y":
            print("Alright!")
            return Valid
    else:
            print("Alright")
            Valid = False
            return Valid
def game(): #main component function
    Valid = True
    while (Valid): #checks for the low and high variable
        try:
            lowVar = int(input("What is your low variable?"))
            highVar = int(input("What is your high variable?"))
            botNum = random.randint(lowVar, highVar)
            Valid = False
        except:
            UsrChoice = input("An error occured with your input, would you like to try again?")
            YesNo(UsrChoice)


    Valid = True
    while (Valid): #process of asking user to guess what the number is
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
    