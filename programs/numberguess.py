import random
g=random.randrange(1,0)
chance =5
while(chance!=0):
    a = int(input())
    if a==g:
        print("your guess is correct")
    else:
        print("try again")
        chance-=1
if chance==0:
    print("you ran out of chances")
