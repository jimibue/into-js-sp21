// WE are not going to be defining promise that much if at all in this, course but
// we will use them a lot

// how to define a promise
// setTimeout(()=>{
//     console.log('here')
// },3000)

// let prom = new Promise((resolve,reject)=>{
//     console.log('in promise')
//   if(Math.random() > .50){
//     resolve('resoleved here')
//   }else{
//     reject('rejected here')
//   }

// })



// how to use (WHAT WE WILL MAINLY DO)

// async/await function ES8
// const x = async () => {
//     // try catch block (has nothing to do with promises something in js)
//     try {
//     let thing = await prom
//     console.log(thing)
//     } catch(err) {
//         console.log(err)
//     }

// }

// x()

// console.log('DONE')

// a function that returns a Promise
const fakeAxiosCall = (url) => {
  
    // return a promise, a promise simply resolves or rejects
    return new Promise(function (resolve, reject) {
     
      // wait 1 sec before return, faking a call that takes one second
      setTimeout(() => {
        
        // if the url is good resolve this obj { data: ['1', '2', '3'] }, or ie this is successful
        if (url === 'good-url') {
          resolve({ data: ['1', '2', '3'] })
        }
  
        // if the url is bad reject and pass this { message: 'bad url' }, ie this is unsuccessful
        reject({ message: '404 - bad url' })
      }, 3000)
    });
  }

  const getData = async()=>{
      try{
        let response = await fakeAxiosCall('bad-url') 
        console.log('worked')
        console.log(response)
      } catch(err) {
        console.log('error ocurred')
        console.log(err)
      }
  }

  console.log('Before call')
  getData()
  console.log('After call')