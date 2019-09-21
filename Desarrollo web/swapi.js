// console.log('a')
// setTimeout(() =>  console.log('b'), 2000)
// console.log('c')

// setTimeout(() => console.log('d'), 2000)
// for(var i = 0; i < 10000000000; i++) {

// }

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onCharacterResponse = function(onCharacterResponse) {
    console.log(`Que pedos raza!!! yo soy ${onCharacterResponse.name}`)
}

$.get(lukeUrl, opts, onCharacterResponse)
