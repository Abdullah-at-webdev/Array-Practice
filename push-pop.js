const newTousistGuides = [
    {   Spot1 : 'Coxes-Bazaar',
        spot2 : 'Quakata',
        spot3 : 'Chitagong'
    },
    {
        spot1 : 'Dhaka',
        spot2 : 'Faridpur',
        spot3 : 'Khulna'
    }
];
console.log(newTousistGuides);
console.log(typeof(newTousistGuides));

newTousistGuides.push({
    spot1 : 'Padma-Shetu',
    spot2 : 'Jamuna-Shetu',
    spot3 : 'Burigonga-Shetu',
    spot4 : 'Meghna-Baadh'
});
console.log(newTousistGuides);
//Now If you want to remove the last work use .pop()
newTousistGuides.pop();
console.log(newTousistGuides);
console.log(typeof(newTousistGuides));
console.log(Object.keys(newTousistGuides));
console.log(Object.keys(newTousistGuides['0']));
console.log(Object.values(newTousistGuides['1']));
console.log(typeof(newTousistGuides['0']));
console.log(typeof(Object.keys(newTousistGuides['0'])));
console.log(typeof(Object.values(newTousistGuides['1'])));
console.log(typeof(newTousistGuides['0']['Spot1']));
console.log(Array.isArray(newTousistGuides));