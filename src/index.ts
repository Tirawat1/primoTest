import { merge } from "./merge"


const collection1 = [100,99,98,97,96];
const collection2 = [5,4,3,2,1];
const collection3 = [1,2,3,4,5];
const merged = merge(collection1, collection2, collection3);
console.log(merged);