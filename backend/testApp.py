import os
from flask import Flask, request, render_template, url_for, redirect, session, g
import requests

payload = {'key1': 'value1', 'key2': 'value2'}

r = requests.post("http://127.0.0.1:5000/getUser/1", data=payload)

r = requests.get("http://127.0.0.1:5000/getUser/1")

print r