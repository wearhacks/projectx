from db import fb
import json

with open('MOCK_DATA.json') as f:
	database = json.load(f)

for data in database:
	fb.post('/event/toronto/'+ str(data['id']), data)