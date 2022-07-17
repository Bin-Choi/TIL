t = int(input())
for i in range(t):
    string = input()
    reversed_str = string[::-1]
    print('#{} {}'.format(i+1, int(string == reversed_str)))

        
