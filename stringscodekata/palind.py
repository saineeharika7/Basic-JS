def reverse(string):
    string = string[::-1]
    return string
s = input()
d = reverse(s)
if (s==d):
	print(1)
else:
	print(0)
