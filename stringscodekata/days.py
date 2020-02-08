c = input()
a = ['monday','tuesday','wednsday','thursday','friday']
b = ['saturday','sunday']
for i in range(len(a)):
    if(a[i] == c):
        print("no")
        break
    elif(b[i] == c):
        print("yes")
        break
