//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};

let arr = Object.entries(obj)
let newArr = arr.forEach(x => console.log(`${x[0]} is called ${x[1].name} and is ${x[1].age} years old` )) 
console.log(newArr)





// Use Object Methods
//Create an albphabeticl list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};

console.log(Object.keys(documents))

let together = Object.keys(documents).reduce(function(arr, key) {
  return arr.concat(documents[key]);
}, []);

console.log(together);

//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};


let comparison = (book1, book2) => {
let values1 = Object.values(book1);
let values2 = Object.values(book2);
let key1 = Object.keys(book1);
let key2 = Object.keys(book2)
if(values1.length !== values2.length){
return console.log(false)
}
for(let i = 0; i < values1.length;i++){
if(values1[i] !== values2[i] || key1[i] !== key2[i]){
return console.log(false)
}

}
return console.log(true)
}





comparison(book1, book2)







