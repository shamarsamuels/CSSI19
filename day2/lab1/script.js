const main = document.getElementById('main')
const country = document.getElementById('country')
const hello = document.getElementById('hello')
const language = document.getElementById('language')
const continent = document.getElementById('continent')
const population = document.getElementById('population')
const link = document.getElementById('link')
const reset = document.getElementById('reset')

const width = '370px'
const height = '320px'
const empty = 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png'

const images_ids = ['image1', 'image2', 'image3', 'image4', 'image5']
const images = images_ids.map(el => {
    el = document.getElementById(el);
    if (el) {
        el.style.height = height;
        el.style.width = width;
        el.setAttribute('src', empty)
        return el
    }
})

const countries = ['us', 'fr', 'jpn', 'brz']
const country_info = {
    us : {
        'country' : 'united states',
        'hello_world' : 'hello world',
        'language' : 'english',
        'continent' : 'north america',
        'population' : '327.2 million',
        'link' : 'https://en.wikipedia.org/wiki/United_States',
        'images' : [
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Greater_coat_of_arms_of_the_United_States.svg/85px-Greater_coat_of_arms_of_the_United_States.svg.png',
            'https://i.kinja-img.com/gawker-media/image/upload/s--_FkwptPI--/c_scale,f_auto,fl_progressive,q_80,w_800/asonbeoxc84ux4oklgm6.jpg',
            'https://i.pinimg.com/originals/d7/0a/db/d70adb89e5a2f9d8fb4c4204eb1e7009.jpg',
            'https://www.planetware.com/photos-large/USCA/california-golden-gate-bridge-night.jpg',
        ],
    },
    fr : {
        'country' : 'france',
        'hello_world' : 'bonjour le monde',
        'language' : 'french',
        'continent' : 'europe',
        'population' : '66 million',
        'link' : 'https://en.wikipedia.org/wiki/France',
        'images' : [
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png',
            'https://www.vikingrivercruises.com/images/Paris_Effel_Tower_Seine_Panorama_478x345_tcm21-137845.jpg?w=359&h=259',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/France_base_map_18_regions.png/400px-France_base_map_18_regions.png',
            'https://s.marketwatch.com/public/resources/images/MW-GO787_france_ZH_20180823041143.jpg',
            'https://www.slh.com/globalassets/country-pages/hero-images/france3.jpg',
        ],
    },
    jpn : {
        'country' : 'japan',
        'hello_world' : 'kon\'nichiwa sekai',
        'language' : 'japanese',
        'continent' : 'asia',
        'population' : '126 million',
        'link' : 'https://en.wikipedia.org/wiki/Japan',
        'images' : [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Japan%28bordered%29.svg/125px-Flag_of_Japan%28bordered%29.svg.png',
            'https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/japan-1200x729.jpg',
            'https://www.kids-world-travel-guide.com/images/xjapan_map_shutterstock_96744496-2.jpg.pagespeed.ic.3j6Thx5v9p.jpg',
            'https://d3ertfc829vzop.cloudfront.net/-/media/Tauck/Products/Hero-Images/XJ_18_banner.jpg?h=817&la=en&w=1400&rev=2b50a6fb23c64c7bb1a29714663ff205&hash=EE8E41BE22F0F979EBBD8415EBD8B9208B97ED94',
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/10/15/japan.jpg?w968h681',
        ],
    },
    brz : {
        'country' : 'brazil',
        'hello_world' : 'olá mundo',
        'language' : 'portiguese',
        'continent' : 'south america',
        'population' : '210 million',
        'link' : 'https://en.wikipedia.org/wiki/Brazil',
        'images' : [
            'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
            'https://kids.nationalgeographic.com/content/dam/kids/photos/Countries/A-G/Brazil-Country-Map-UPDT.ngsversion.1466609459209.adapt.710.1.jpg',
            'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg',
            'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2014/05/brazil-main.jpg',
            'https://www.worldatlas.com/r/w728-h425-c728x425/upload/d5/6a/da/shutterstock-765387754.jpg',
        ],
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
            info.images.forEach((el, index) => {
                images[index].setAttribute('src', el)
            })
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
    images.forEach(el => {
        el.setAttribute('src', empty)
    })
})
