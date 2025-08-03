const books = ['Javascript Passion', 'Learning-Html', 'Learn-Css', 'Good-Web-Development', 'Programming-With-Abdullah'];
console.log(books);
console.log(Array.isArray(books));
console.log(typeof(books));
console.log(Object.keys(books));
console.log(Object.values(books));
console.log(typeof(Object.keys(books)));
console.log(typeof(Object.values(books)));
console.log(typeof(books['0']));
if(books.includes('Javascript-learning')){
    console.log('Yes We Have One, Do You Need One')
}
else if(books.includes('Learn-Css')){
    console.log('Yes! We Have These One In Our Stock.')
}
else{
    console.log('No We Do Not Have One Currently. Contack Us Letter.')
}

const newBookList =[
    {
        Book1 : 'Html-For-Hablu',
        Book2 : 'Css-Learning-With-Tailwind',
        Book3 : 'Next-Level-Javascrpt'
    },
    {
        Book1 : 'How-Sell-This',
        Book2 : 'Where-Is-Customer',
        Book3 : 'The-Best-Process'
    }
]
console.log(newBookList);
console.log(Array.isArray(newBookList));
console.log(typeof(newBookList));
console.log(Object.keys(newBookList['0']));
console.log(Object.values(newBookList['1']));
console.log(typeof(newBookList['0']['Book1']));
console.log(newBookList['0']['Book1'].toUpperCase());