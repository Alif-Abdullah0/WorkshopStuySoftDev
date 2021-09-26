import random
#Lists containing names of people in each period
pd1 = ['Owen Yaggy', 'Haotain Gan', 'Ishraq Mahid', 'Ivan Lam', 'Michelle Lo', 'Christopher Liu', 'Michael Borzuk', 'Ivan Mijacika', 'Lucas Lee', 'Rayat Roy', 'Emma Buller', 'Andrew Juang', 'Renggeng Zheng', 'Annabel Zhang', 'Alejandro Alonso', 'Deven Mahehwari', 'David', 'Aryaman Goenka', 'Oscar Wang', 'Tami Takada', 'Yusuf Elsharawy', 'Ella Krechmer', 'Tomas Acuna', 'Tina Nguyen', 'Sadid Ethun', 'Shyne Choi', 'Shriya Anand']
pd2 = ['Patrick Ging', 'Raymond Yeung', 'Josephine Lee', 'Alif Abdullah', 'William Chen', 'Justin Zou', 'Andy Lin', 'Rachel Xiao', 'Yuqing Wu', 'Shadman Rakib', 'Liesel Wong', 'Daniel Sooknanan', 'Cameron Nelson', 'Austin Ngan', 'Thomas Yu', 'Yaying Liang Li', 'Jesse Xie', 'Eric Guo', 'Jonathan Wu', 'Zhaoyu Lin', 'Joshua Kloepfer', 'Noakai Aronesty', 'Yoonah Chang', 'Hebe Huang', 'Wen Hao Dong', 'Mark Zhu', 'Kevin Cao']

#Variables used to hold randomly selected index from both lists
pd1Chosen = random.randint(0,len(pd1))
pd2Chosen = random.randint(0,len(pd2))

#Printing the name associated with each list
print("Period 1 Name: " + pd1[pd1Chosen])
print("Period 2 Name: " + pd1[pd1Chosen])