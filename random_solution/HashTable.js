console.log('Hash Table');

const createHashTable = (size) => {

    const storage = new Array(size);

    const numBuckets = storage.length;

    const hash = (key) => {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % numBuckets
    };

    const insert = (key, value) => {
        const index = hash(key);

        if (!storage[index]) {
            storage[index] = []
        }

        storage[index].push({ [key]: value });
    };

    // get by key

    const get = key => {
        const index = hash(key);
        if (!storage[index]) return null;
        for (let i = 0; i < storage[index].length; i++) {
            if (storage[index][i][key]) {
                return storage[index][i][key];
            }
        }
        return null;

    }

    // delete a key 
    const remove = key => {
        const index = hash(key);

        if (!storage[index]) return null;

        for (let i = 0; i < storage[index].length; i++) {
            if (storage[index][i][key]) {
                storage[index].splice(i, 1);
                return key;
            }
        }

        return null;

    }

    return { insert, get, remove };

}

// storage[index] // key

// insert 

const myTable = createHashTable(20);
myTable.insert('name', 'Adib');
myTable.insert('age', 25);
myTable.insert('test', 'testing');

console.log(myTable.get('test'));

// remove

myTable.remove("test");





