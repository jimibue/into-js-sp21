// Objects
const person = {name:'Tony', age:12}

console.log(person.name)

// this mutate the person var
person.name = 'changed'


console.log(person.name)

const personDONTCHANGE = {name:'Tony', age:12, dob:'june'}

// DON"T use
// let x = Object.assign({}, personDONTCHANGE)
// spread out over object{...}
let x = {...personDONTCHANGE, age:13}


console.log(x)

const obj1 = {a:'a', b:'c'}
const obj2 = {c:'c', d:'d'}

const both = {...obj1, ...obj2, e:'e'}

console.log(both)

// arrays

let nums = [1,2,3,4,5]
let chars = ['a','b','c']

//copy an array

let arr_copy = [0, ...nums, 6,7,8, ...chars]

console.log(nums)
console.log(arr_copy)



// carObj looks like this {make,model}
let car = {make:'toyota',model:'truck'}

const { make, model } = car

console.log(make, model)
console.log(car.make, car.model)

const carInfo = (x) => {
  const { make, model } = x
  console.log('---------------')
  console.log(make, model)
  console.log('---------------')
}

const carInfo1 = ({ make, model }) => {
    console.log('---------------')
    console.log(make, model)
    console.log('---------------')
  }

carInfo({make:'Toyota', model:'sd12f'})
carInfo1({make:'Toyota', model:'sd12f'})
carInfo1({make:'Toyota', model:'sd12f'})
carInfo1({make:'Toyota', model:'sd12f'})