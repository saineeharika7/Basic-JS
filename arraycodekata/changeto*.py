a = input()
b = list(a)
d = len(b)//2
if(d%2==0):
    b[d]='*'
else:
    b[d+1]='*'
j = ''.join(map(str,b))
print(j)
