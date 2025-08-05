const local = {
    charbhadrasan :'Thana',
    postOffice : ' 7810',
    faridpur : 'Zilla'
}
console.log(Array.isArray(local))
console.log(typeof(local));
console.log(typeof(local['faridpur']));
console.log(Object.keys(local));
console.log(Object.values(local));

const nextChallange = ['Abdullah', 'Azad', 'Prince', 'Orange', 'Akkas', 'Ismail', 'Yunus', 'Sohel'];
const secondChallenge = ['Farid', 'Nasir', 'Rifat', 'Ripon']
console.log(nextChallange);
console.log(Array.isArray(nextChallange));
if(nextChallange.includes('Orange')){
    console.log('He is my cousin');
}
console.log(nextChallange.concat(secondChallenge));