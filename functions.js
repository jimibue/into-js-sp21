// functions 
const l = (string) => {
    console.log(string)
}

// es5 syntax and you still see it (HAVE"T SEEN)
function add(num1, num2) {
   return num1 + num2 
}
let a = add(1,1)
console.log(a)


// es5 store in var
const add1 = function(num1, num2){
    return num1 + num2
}
add1(1,1)
let a1 = add(1,1)
console.log(a1)

// es6 arrow function (YOU HAVE SEEN AND WE WILL USE)
const add2 = (num1, num2) => {
    // javascript needs the the return key when using {}
    // if you return something
      return num1 + num2
}



let a2 = add2(1,1)
l(a2)

// so if I don't use {} ie it is short function, i don't use return 
// this is the exact same ass add2, implict return
let add3 = (num1, num2) => num1 + num2

let a3 = add3(1,1)
l(a3)

// paranthesis implictly return as well, this just gives me the option to return
// something that needs multiple line
let add4 = (num1, num2) => (
  `
   <div>
     <h1>header</h1>
   </div>
  `
)



// default
const add5 = (num1, num2 = 0) => {
    console.log(num1 + num2)
}
add5(1)

const logThings =(message, ...things) => {
  for(let i in things){
      console.log(`${message} things[i]`)
  }
}

logThings('message here','asdf','asdfa','sdfsdfs')