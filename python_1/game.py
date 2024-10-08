Valid = True
while (Valid):
    try:
        highVar = int(input("What is your high variable?"))
        lowVar = int(input("What is your lwo variable?"))
    except:
        UsrChoice = int(input("An error occured with your inputs, would you like to try again?"))
        if UsrChoice.lower() == "y":
            print("Alright!")
        else:
            print("Alright")
            Valid = False
botNum = random.randint(lowVar, highVar)

input