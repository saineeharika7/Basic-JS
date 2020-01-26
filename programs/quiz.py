def mcq(Q,O,S1):
    for q,o,s1 in zip(Q,O,S1):
        print(q)
        print(o)
        a = int(input("enter your ans:"))
        if(a==s1):
            print("correct")
        else:
            print("wrong")
Q = ["q1=can we change a tuple ?" , "q2=is def necessary in functions"]
O = [["1.yes","2.no","3.maybe","4.none"],["1.maybe","2.no","3.yes","4.i dont know"]]
S1= {2:"no",3:"yes"}
(mcq(Q,O,S1))
