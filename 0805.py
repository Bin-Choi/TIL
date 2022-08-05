import numpy as np

test=int(input())
for y in range(test):
    n,m = map(int,input().split())

    NN=[]
    for i in range(n):
        N=list(map(int,input().split()))
        NN.append(N)
    array_1 = np.array(NN)
    max = 0
    for i in range(0,n-m+1):
        for j in range(0,n-m+1):  
            sum =np.sum(array_1[i:i+m,j:j+m])
            if max < sum:
                max = sum
    print(f'#{y+1} {max}')




    



