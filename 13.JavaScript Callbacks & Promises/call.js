

const names = ["eqhjf", "ennd", "rrfb", "eiffnn"];


// names.forEach((name)=>console.log(name))

// Custom foreach function
const foreach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
};

// Invoke custom foreach
foreach(names, (name) => {
    console.log(name);
});
