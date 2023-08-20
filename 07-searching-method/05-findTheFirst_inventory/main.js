const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

const result = inventory.find ( n => n.name === 'cherries')
console.log(result);