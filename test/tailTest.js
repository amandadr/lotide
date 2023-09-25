const tail = require('../tail');
const assertEqual = require('../assertEqual');
const example1 = tail(["Hello", "Lighthouse", "Labs"]);
const example2 = tail([1, 2, 3])
assertEqual(example1, ["Lighthouse", "Labs"].toString());
assertEqual(example2, '2,3');