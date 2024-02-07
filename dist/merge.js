"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2, collection_3) {
    const sortArray = [];
    // sort the collection_1 and collection_2 from min to max
    for (let i = 0; i < collection_1.length - 1; i++) {
        for (let j = 0; j < collection_1.length - i - 1; j++) {
            if (collection_1[j] > collection_1[j + 1]) {
                const temp = collection_1[j];
                collection_1[j] = collection_1[j + 1];
                collection_1[j + 1] = temp;
            }
        }
    }
    // sort the collection_2 from min to max
    for (let i = 0; i < collection_2.length - 1; i++) {
        for (let j = 0; j < collection_2.length - i - 1; j++) {
            if (collection_2[j] > collection_2[j + 1]) {
                const temp = collection_2[j];
                collection_2[j] = collection_2[j + 1];
                collection_2[j + 1] = temp;
            }
        }
    }
    // sort the collection_3 from min to max
    for (let i = 0; i < collection_3.length - 1; i++) {
        for (let j = 0; j < collection_1.length - i - 1; j++) {
            if (collection_3[j] < collection_3[j + 1]) {
                const temp = collection_3[j];
                collection_3[j] = collection_3[j + 1];
                collection_3[j + 1] = temp;
            }
        }
    }
    // merge the three collections
    sortArray.push(...collection_1, ...collection_2, ...collection_3);
    return sortArray;
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map