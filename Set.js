// SET Data structure

// Unique Collection Of values
// String, Number, Boolean, Objects sam Set
// Dynamically Sized
// Sets do not maintain an insertion order
// Sets are iterables (For Of Loop)
// searching and deleting is faster than array

console.log('SET Data Structure');

const set = new Set([1, 2, 3]);

// add new value
set.add(4);

// loop in sets
for (let item of set) {
    console.log(item);
}

// if value has on set 
console.log(set.has(4));

set.delete(4);

for (let item of set) {
    console.log(item);
}

// size of sets

console.log(set.size)

// clear set 

set.clear();







