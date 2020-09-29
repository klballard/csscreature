/* let movieArray = {
    nameOfMovie: 'The Matrix',
    runTime: 150,
    characters:
    [{charOne: {name:'Neo', age: 24, items: ['guns','sunglasses']}}, 
        {charTwo: {name:'Morpheus', age: 30, items: ['red pill','blue pill']}}],
    genre: 'Sci-Fi',
}

console.log(movieArray.nameOfMovie);
console.log(movieArray.runTime);
console.log(Object.values(movieArray.characters));
console.dir(movieArray);
console.log(Object.keys(movieArray.characters[0].charOne.items));
console.log(movieArray.genre);
console.log(movieArray.characters[0].charOne.name);
console.log(movieArray.characters[0].charOne.items[1]);


let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 288,
    characters: [
        {
            name: 'Legolas',
            age: 2931,
            items:[
                {itemOne: 'Bow and Arrow'},
                {itemTwo: 'Dagger'},
            ],
        },
        {
            name: 'Gandalf',
            age: 2019,
            items: [
                {itemOne: 'Sword'},
                {itemTwo: 'Staff'},
            ],
        },
    ],
    genre: 'Action & Adventure',
};

console.log(lotrObj.nameOfMovie);
console.log(lotrObj.runTime);
console.log(lotrObj.characters);
console.log(lotrObj.characters[0].name);
console.log(lotrObj.characters[0].items[0]);

*/

// Boolean declaration 
var amIGood = false;

// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts'); // log after
}

checkTwice();

// 2nd promise
var playDate = function (gift) {
    var message = "Salutations, fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

    return Promise.resolve(message);
};

// Promise call
var checkTwice = function () {
    iCanHasGift
    .then(playDate) // chain here
    .then(function (fulfilled) {
        console.log(fulfilled);
        // output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"
    })
    .catch(function (error) {
        // all I got was a lump of coal :(
        console.log(error)
        // output: "You've made Santa's naughty list; enjoy your coal!"
    });
};

checkTwice();