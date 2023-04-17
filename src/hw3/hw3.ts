import {MyLinkedList} from './LinkedList'

const list = new MyLinkedList();


list.addEnd(1);
list.addEnd(2);
list.addEnd(3);

console.log(list.head.value);           // 1
console.log(list.tail.value);            // 3
console.log(list.head.next.value);      // 2
console.log(list.head.next.prev.value); // 1

for (const el of list) {
    console.log(el);
}


