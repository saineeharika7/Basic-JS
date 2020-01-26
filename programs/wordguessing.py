import random
name =input("wnat is your name?")
words = ["virat","dhoni","rahul","rohit"]
word = random.choice(words)
print("guess the character")
guesses = ''
turns = 10
while(turns > 0):
    failed = 0
    for char in word:
        if char in guesses:
            print(char)
        else:
            print("_")
            failed+=1
    if failed == 0:
        print("you win")
        print("the word is :", word)
        break
    guess = input("guess a character :")
    guesses += guess
    if guess not in word:
        turns-=1
        print("wrong")
        print("you have",+turns , "more gusses")
if(turns == 0):
    print("you loose")
