name = input("Hello User, what is your name: ")
greeted_Amt = int(input("how many times do you want to be greeted?"))


for x in range(greeted_Amt):
    print(name)

UsrChoice = input("Alright" +name+ " We'll now play a game. Would you like tog guess?(y/n)")

if UsrChoice.lower() == "y":
    input("Great! go ahead!")
else:
    print("Alright")
print("Well it didn't matter anyway. The game is guess the number. THe rules of the game are simple. You chose the a low number and a high number. I then chose a random number and then you have to guess which one it is. I'll give hints if you want")


