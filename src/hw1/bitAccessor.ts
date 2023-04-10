type G = {
    get: (byteIndex: number, bitIndex: number) => number
}

type S = {
    set: (byteIndex: number, bitIndex: number, value: number) => void
}


function createBitGetter (arr: Uint8Array): G {
      const get = (byteIndex: number, bitIndex: number): number => {
          return (arr[byteIndex] & (1 << bitIndex)) !== 0 ? 1 : 0;
    }
    return {get};
}

function createBitAccessor (arr: Uint8Array): S & G {
    const get = createBitGetter(arr).get;
    const set = (byteIndex: number, bitIndex: number, value: number): void => {
        if (value) {
            arr[byteIndex] |= (1 << bitIndex);
        } else {
            arr[byteIndex] &= ~(1 << bitIndex);
        }
    }
    return {get, set};
}

const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

console.log(bitGetter.get(0, 1));
console.log(bitGetter.get(1, 1));


const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

console.log(bitAccessor.set(0, 1, 0));
console.log(bitAccessor.get(0, 1));
