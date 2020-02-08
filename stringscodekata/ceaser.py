def ceser(s,n):
    m=""
    for i in range(len(s)):
        char=s[i]
        if(char.isupper()):
            m+=chr((ord(char)+n-65)%26+65)
        else:
            m+=chr((ord(char)+n-97)%26+97)
    return m
s=input()
n=3
print(ceser(s,n))
