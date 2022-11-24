import csv
import json

with open('worldcities.csv', 'r') as f:
    reader = csv.DictReader(f)
    # for every row in the csv file, add city, country to name
    # Increment id by 1
    rows = [dict(id=i, name=row['city'] + ', ' + row['admin_name'] + ', ' + row['country'], lat=row['lat'], lng=row['lng']) for i, row in enumerate(reader)]

with open('worldcities.json', 'w') as f:
    json.dump(rows, f)
