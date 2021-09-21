import sys
lis = ["Alpha", "Bravo", "CHarlie", "Delta", "Echo", "Foxtrot"]

def lister(i,l):
	if (i >= 0 and i < len(l)):
                print(lis[i])
	else:
                print("Not sufficient index")

lister(int(sys.argv[1]), lis)
