import { User,Buyer } from "./users.js";
import { Product,Food, Appliance } from "./products.js";


User.registratedUsers.push(new Buyer('pera','pera123'))

Product.products.push(new Food('Rice',20, 9,'2024-10-20'), new Appliance('Washing Machine',20000,5,5), new Food('Fish',12, 7,'2021-10-20'), new Appliance('Refrigirator',20000,3,5))

Product.products.forEach(product => console.log(product.toString()) )


const divUser = document.querySelector('#user')

const inputUsername = document.querySelector('#username')
const inputPass = document.querySelector('#password')

const divProducts = document.querySelector('.products')
divProducts.append(Product.addProductsToDOM())

const formLogIn = document.querySelector('#form')
formLogIn.addEventListener('submit',(event)=>{
    event.preventDefault()

    let loggedUser =  User.registratedUsers.find(user => user.username == inputUsername.value && user.password == inputPass.value)

    if(loggedUser){

        divUser.append(loggedUser.addUserToDOM())    
        
        divProducts.append(Product.addProductsToDOM(loggedUser))

    }else{

        console.log('Error')
    }
  
})