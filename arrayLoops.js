// CRUD
const person = {id:1, name: "Tony", age:31}
const person1 = {id:2, name: "Sally", age:41}
const person2 = {id:3, name: "Bob", age:51}

const people = [person, person1, person2]

// READ (array of obj to array of html) => MAP
// do axios then
const formatPersonHTML = (personObj) => {
   const {name, age} = personObj 
   return `
    <div>
       <h1>${name}: ${age}</h1>
    </div>
   `
} 



// let badWayToDoThis = [formatPersonHTML(person), formatPersonHTML(person1), formatPersonHTML(person2)]
// console.log(badWayToDoThis)

// define function above and pass it
let htmlARR = people.map(formatPersonHTML)
console.log(people)
console.log(htmlARR)

// or pass as anyomous function

let htmlARR1 = people.map((personObj) => {
    const {name, age} = personObj 
    return `
     <div>
        <h1>${name}: ${age}</h1>
     </div>
    `
 } )

// UPDATE => MAP
// go through each object and update the one/ones that need to be updated
// I want to update id:3 name to changed without changing people array
// ie return a mew array

// do axios call on edit form submit then do this
let updatedPeople = people.map( (person) => {
    if(person.id === 3){
        // want to update name to changed
        return {...person, name:'CHAHNGED'}
    } else {
        return person
    }
})

console.log(updatedPeople)


// DELETE => FILTER
// remove id 3 don't change people array
let filteredArray = people.filter((p)=> p.id !== 3) 
console.log(filteredArray)

// CREATE = [...spread, thingToAdd]
// lets add a new person
newUsers = [...people, {id:4, name:'new user', age:23}]
console.log(newUsers)

console.log(people)