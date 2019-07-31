name = raw_input('What is your name? : ')
celebrity = raw_input('What is a celebrity you would like to meet? : ')
weather = raw_input('Do you prefer it sunny or rainy or something else? : ')
season = raw_input('What is your favorite season? : ')
country = raw_input('Where would you like to visit? : ')

story = '''
On a {weather} {season} day in {country} where we meet {name}.
He was on a journey to find the imfamous {celebrity}.
'''

print(story.format(name = name, weather = weather, season = season, country = country, celebrity = celebrity))