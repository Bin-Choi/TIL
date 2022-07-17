A, B = map(int,input().split())

if A-B == 1 :
    print('A')
elif A-B == 2 :
    print('B')
elif B-A == 1 :
    print('B')
else :
    print('A')
