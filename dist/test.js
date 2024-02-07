"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
console.log("Hello World!");
const collection1 = [100, 99, 98, 97, 96];
const collection2 = [5, 4, 3, 2, 1];
const collection3 = [1, 2, 3, 4, 5];
const merged = (0, merge_1.merge)(collection1, collection2, collection3);
console.log(merged);
//# sourceMappingURL=test.js.map