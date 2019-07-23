const main = document.getElementById('main')
const country = document.getElementById('country')
const hello = document.getElementById('hello')
const language = document.getElementById('language')
const continent = document.getElementById('continent')
const population = document.getElementById('population')
const link = document.getElementById('link')
const flag = document.getElementById('flag')
const reset = document.getElementById('reset')

const countries = ['us', 'fr', 'jpn', 'brz']
const country_info = {
    us : {
        'country' : 'united states',
        'hello_world' : 'hello world',
        'language' : 'english',
        'continent' : 'north america',
        'population' : '327.2 million',
        'link' : 'https://en.wikipedia.org/wiki/United_States',
        'image' : 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png',
    },
    fr : {
        'country' : 'france',
        'hello_world' : 'bonjour le monde',
        'language' : 'french',
        'continent' : 'europe',
        'population' : '66 million',
        'link' : 'https://en.wikipedia.org/wiki/France',
        'image' : 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png',
    },
    jpn : {
        'country' : 'japan',
        'hello_world' : 'kon\'nichiwa sekai',
        'language' : 'japanese',
        'continent' : 'asia',
        'population' : '126 million',
        'link' : 'https://en.wikipedia.org/wiki/Japan',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Japan%28bordered%29.svg/125px-Flag_of_Japan%28bordered%29.svg.png',
    },
    brz : {
        'country' : 'brazil',
        'hello_world' : 'olá mundo',
        'language' : 'portiguese',
        'continent' : 'south america',
        'population' : '210 million',
        'link' : 'https://en.wikipedia.org/wiki/Brazil',
        'image' : 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
    },
}

countries.forEach(country_id => {
    let country_element = document.getElementById(country_id);
    let info = country_info[country_id];
    if (country_element && info) {
        country_element.innerHTML = info['hello_world']
        country_element.addEventListener('click', () => {
            country.innerHTML = 'country : ' + info['country'];
            hello.innerHTML = 'hello world : ' + info['hello_world'];
            language.innerHTML = 'language : ' + info['language'];
            continent.innerHTML = 'continent : ' + info['continent'];
            population.innerHTML = 'population : ' + info['population'];
            link.innerHTML = 'more information : <a target="_" href="' + info['link'] + '">' + info['link'] + '</a>';
            flag.setAttribute('src', info['image']);
        })
    } else {
        console.log('Country Element Does Not Exist');
    }
})

reset.addEventListener('click', () => {
    country.innerHTML = '';
    hello.innerHTML = '';
    language.innerHTML = '';
    continent.innerHTML = '';
    population.innerHTML = '';
    link.innerHTML = '';
    flag.setAttribute('src', '');
})
