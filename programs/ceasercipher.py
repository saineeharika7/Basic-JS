def encrypt(word,n):
    output = ""
    for i in range(len(word)):
        char = word[i]
        if(char.isupper()):
            output += chr((ord(char)+n-65) % 26+65)
        else:
            output += chr((ord(char)+n-97) % 26+97)
    return output
word = input("enter your string:")
n = 1
print(encrypt(word,n))
            
            
 
