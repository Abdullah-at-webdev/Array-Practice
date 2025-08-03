const fruits = {
    fruitList1 : 'Apple',
    fruitList2 : 'Orange',
    fruitList3 : 'Mangoes',
    fruitList4 : 'Grapes',
    fruitLIst5 : 'Banana'
}

fruits['fruitList2'] = 'Jambura';
console.log(fruits.fruitList2);
console.log(typeof(fruits));
console.log(typeof(fruits['fruitList1']));
console.log(Object.keys(fruits));
console.log(Object.values(fruits));
