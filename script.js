//your JS code here. If required.
const delay = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function promiseCreator(){
  const condtion = Number(delay.value)
  return   new Promise((resolve,reject)=>{
    if(condtion){
      setTimeout(()=>{
        resolve(condtion)
      },2000)
    }
    else{
      reject("err")
    }
  }).then(data=>{
    output.innerText = `Result: ${data}`;
    return data;
  }).then(data=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        output.innerText = `Result: ${data}`
        resolve(data);
      }, 2000);
    })
  }).then(data=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const mul = data*2;
        output.innerText = `Result: ${mul}`
        resolve(mul);
      }, 1000);
    })
  }).then(data=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const sub = data-3;
        output.innerText = `Result: ${sub}`
        resolve(sub)
      }, 1000); 
    })
  }).then(data=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const dev = data/2;
        output.innerText = `Result: ${dev}`
         resolve(dev)
      }, 1000);
    })
  }).then(data=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const add = data+10;
        output.innerText = `Result: ${add}`
        resolve(add)
      }, 1000);
    })
  }).then(finalResult =>{
    output.innerText = `Final Result: ${finalResult}`
  })
}

btn.addEventListener("click", promiseCreator)
