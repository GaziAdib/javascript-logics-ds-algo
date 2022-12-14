// MAP Data Structure

// Collection of unordered of key value pairs
// can be used in for Of Loop
// map keys can be any type
// maps are ordered
// maps are iterables
// maps are just to store the data

console.log('MAP Data Structure');

const map = new Map([['a', 1], ['b', 2]]);
map.set('c', 3);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// has key checking in MAP
console.log(map.has('a'));

// delete from map 

map.delete('c');

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// size of map 

console.log(map.size);

// clear all map 

map.clear();



