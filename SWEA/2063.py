n = int(input())
numbers = list(map(int,input().split()))
numbers.sort()
print(numbers[n//2])