//Question no.1
let items=[
    {Make:"Honda",Model:"Civic", Year:2019},
    {Make:"Toyota",Model:"Camry", Year:2020},
    {Make:"Ford",Model:"Mustang", Year:2018},
];
for(let i=0;i<items.length;i++)
{
    console.log(items[i]);
}
//Question No.2
//Part-01
/* Write a program that prompts the user to enter the details of a book-title,
author and number of pages-and stores the data in an object.Then, output the details of the book to the console.
*/
let detail1=prompt("enter the title of book",(title)=>{
let detail2=prompt("enter the author name",(author)=>{
let detail3=prompt("enter the number of pages",(pages)=>{
    let book={
        title:title,
        author:author,
        pages:parseInt(pages),
    };
    console.log("Book details:");
    console.log("Title:"+book.title);
    console.log("Author"+book.author);
    console.log("Number of pages:"+book.pages);
});
});
});

//Part-02
/*Write a function called findOldestPerson that takes in an array of people as a parameter and returns the name of the oldest
person. */
const findOldestPerson=(people)=>{
    let PersonName=0;
    for(let i=0;i<people.length;i++)
    {
        if(people[i].age>PersonName)
        {
            PersonName=people[i].age;
            people[i].age=people[i].name;
            PersonName=people[i].name;
        }
    }
    
    return PersonName;
};
let people=[
{name:"Ashraf",age:86},
{name:"Asghar",age:46},
{name:"Akbar",age:56},
{name:"Bilal",age:26},
];
let PersonName=findOldestPerson(people);
console.log("Oldest person:"+PersonName);
//Part-04
/*Write a function called calculateTotalPrice that takes in an array of items
and returns the total price of all items in an array */
const findTotalPrice=(array)=>{
    let totalprice=0;
    for(let i=0;i<array.length;i++)
    {
        totalprice=totalprice+array[i].price;
    }
    return totalprice;
};
let array=[
    {name1:"Laptop",price:50000},
    {name1:"headphone",price:5000},
    {name1:"mouse",price:500},
    {name1:"charger",price:2000},
];
let totalprice=findTotalPrice(array);
console.log("Total Price="+totalprice);
