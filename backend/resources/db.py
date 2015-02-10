import os
from firebase import firebase

fb = firebase.FirebaseApplication(os.environ['DB'], None)