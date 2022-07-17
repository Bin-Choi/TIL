T = int(input())

for t in range(1, T+1) :
    N = int(input())
    value = ""
    for i in range(N):
        C, K = input().split()
        K = int(K)
        value += C * K
    
    print("#{}".format(t))
    for i in range(len(value)) :
        if (i+1)%10 == 0 :
            print(value[i])
        else :
            print(value[i], end="")
    print()