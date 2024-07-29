const functionArray = []


for(let i=0; i < 10; i++){
    functionArray[i] = (function(index){
        return function(){
            console.log(index);
        }
    })(i);
}

functionArray[0](); 
functionArray[1](); // 1
functionArray[2](); // 2
functionArray[3](); // 3
functionArray[4](); // 4
functionArray[5](); // 5
functionArray[6](); // 6
functionArray[7](); // 7
functionArray[8](); // 8
functionArray[9](); // 9



function createCollectionManager() {
    const items = []; // Private array to hold the collection

    return {
        add(item) {
            items.push(item);
            console.log(`Added: ${item}`);
        },
        remove(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`Removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        list() {
            console.log('Current items:', items);
        }
    };
}

// Usage
const manager = createCollectionManager();

manager.add('Apple');    // Output: Added: Apple
manager.add('Banana');   // Output: Added: Banana
manager.add('Orange');   // Output: Added: Orange

manager.list(); // Output: Current items: [ 'Apple', 'Banana', 'Orange' ]

manager.remove('Banana'); // Output: Removed: Banana

manager.list(); // Output: Current items: [ 'Apple', 'Orange' ]
manager.remove('Grapes'); // Output: Item not found: Grapes
