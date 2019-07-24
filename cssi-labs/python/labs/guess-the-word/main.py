import random

words = [
    'shamar',
    'computer',
    'pizza',
    'food',
]

configurations = {
    max_mistakes : 3,
}

state = {
    current_word : '',
    current_guessed_word: '',
    current_mistakes = 0,
    winner = False,
}

def random_word():
    return words[random.randint(1, len(words))]

def get_guess():
    while True:
        guess = input('What is your Guess')
        if guess:
            if len(guess) == 1:
                return guess

def check_guess(guess):


def start_game():
    state.current_word = random_word()
    state.guessed_word = '_' * len(state.current_word)


    while True:
        if state.current_mistakes < configurations.max_mistakes:
            guess = get_guess()
            positions = [pos for pos, char in enumerate(state.current_word) if char == guess ]
            if len(positions) < 0:
                
            else:
                state.current_mistakes++            
        else:
            break
    
    if state.winner:
        print('You won the game!')
    else:
        print('Try again.')