a ,b= map (int,input().split())
c = a*b
binary= list('{0:0b}'.format(c))
for i in range(1,len(binary)):
    if binary[i]=='1':
        print(i)

