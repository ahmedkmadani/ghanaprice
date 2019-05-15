import csv 
import matplotlib.pyplot as plt
import pandas as pd
import os

file = os.listdir('/home/ahmedk/Desktop/yfarm/prices/yam_years')
print(file)
for f in file :
        print (f)
for f in file : 
        with open('/home/ahmedk/Desktop/yfarm/prices/yam_years/'+f ) as csvfile:
                # print(f)
                year = (f[6:10])
                df = pd.read_csv(csvfile)
                # print(df)
                month = df.iloc[:,0]
                price = df.iloc[:,1]
                plt.bar(month, price, color='b')
                plt.xlabel('MONTH')
                plt.xticks(rotation=45)
                plt.ylabel('PRICE IN GHS')
                plt.title('YAM PRICE FOR ' + year)
                plt.savefig('/home/ahmedk/Desktop/yfarm/prices/Fig/' + year + '.png')
                print('Saving Figure for ' +year)
                # plt.show()
 

   