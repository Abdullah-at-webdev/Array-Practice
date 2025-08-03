const touristSpot = {
    spot1 : 'Cox-Bazar',
    spot2 : 'Quakata',
    spot3 : 'Padma-Shetu'
}
console.log(Object.keys(touristSpot));
console.log(Object.values(touristSpot));
console.log(typeof(touristSpot));
console.log(typeof(touristSpot['spot1', 'spot2', 'spot3']));
Object.assign(touristSpot,{
    spot4 : 'Jaflong',
    spot5 : 'Bandarban'
})
console.log(touristSpot);
touristSpot.spot6 = 'Rangamati';
console.log(touristSpot);
touristSpot['spot7'] = 'Moynamati';
console.log(touristSpot);
// If You want to remove one last key/object
const lastKey = Object.keys(touristSpot).pop();

delete touristSpot[lastKey];
console.log(touristSpot);

// Trying anyther way to do It
const keyLast = Object.keys(touristSpot);
delete touristSpot[keyLast[keyLast.length - 1]];
console.log(touristSpot);