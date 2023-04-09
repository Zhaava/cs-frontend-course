// class BitAccessor {
//     arr : Uint8Array;
//     constructor(arr : Uint8Array) {
//         this.arr = arr;
//     }
//
//     get(el: number, bit: number) {
//
//     }
//
// }
// const arr1 = new BitAccessor(new Uint8Array([0b1110, 0b1101]));
//
// console.log(arr1);

// Написать функцию, которая принимает Uint8Array и позволяет обратиться к биту конкретного элемента
//const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
// console.log(bitGetter.get(0, 1)); // 1
// console.log(bitGetter.get(1, 1)); // 0


// Расширить функцию из прошлого задания возможностью изменять значение конкретного бита


//const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
//console.log(bitAccessor.set(0, 1, 0)); // 
//console.log(bitAccessor.get(0, 1));    // 0
