let display=document.querySelector('span')
let upercase=document.querySelector('#upercase')
let lowercase=document.querySelector('#lowercase')
let numbers=document.querySelector('#numbers')
let symbols=document.querySelector('#symbols')
let btn=document.querySelector('button')
let total=document.querySelector('#length')


const uperset='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerset='abcdefghijklmnopqrstuvwxyz'
const numberset='1234567890'
const symbolsset='~!@#$%^&*()_+/'



function randpass(dataset){
    // console.log('logic')
    return dataset[Math.floor(Math.random()* dataset.length)]
}

function genpass(password=""){
    
    if(upercase.checked){
      password += randpass(uperset) 
    }
    if(lowercase.checked){
        password += randpass(lowerset)
    }
    if(numbers.checked){
        password += randpass(numberset)
    }
    if(symbols.checked){
        password += randpass(symbolsset)
    }

    if(password.length<total.value)
    {
      return  genpass(password)
    }
    
//  console.log(password)
 show(password)
}

function show(password){
  
    let getpass = password.substring(0,total.value)
    display.innerText=getpass
 

  
}


btn.addEventListener('click',()=>{
    console.log('you clicked')
    genpass()
})

























