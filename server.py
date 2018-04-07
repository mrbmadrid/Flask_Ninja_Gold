from flask import Flask, redirect, session, render_template, request
import random
import math
app = Flask(__name__)
app.secret_key = 'NINJA987'


@app.route('/')
def index():
	session['gold'] = 0
	return render_template('index.html', gold=session['gold'])

@app.route('/ninjado/<action>')
def action(action):
	if action == 'farm':
		session['gold'] += int(math.floor(random.random()*10+10))
		print action
	elif action == 'cave':
		session['gold'] += int(math.floor(random.random()*6+5))
		print action
	elif action == 'house':
		session['gold'] += math.floor(random.random()*4+2)
		print action
	elif action == 'casino':
		session['gold'] += math.floor(random.random()*101-50)
		print action
	return str(int(session['gold']))

app.run(debug=True)
