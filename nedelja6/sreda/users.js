import { Appliance, Food, Product } from "./products.js"


export class User{
    static registratedUsers = []
    username
    password
    constructor(username,password){
        this.username = username
        this.password = password
    }

    addUserToDOM(){

    }
}

export class Buyer extends User{
    #cart 
    constructor(username,password){
        super(username,password)
        this.#cart = []
    }

    get cart(){
        return this.#cart
    }

    addToCart(product,quantity){
        this.#cart.push({product:product, sumquantity:quantity}) 
    }
    deleteCart(item){
        this.#cart.splice(this.#cart.indexOf(item), 1)

    }
    addUserToDOM(){

        const divWrapper = document.querySelector('#user')
        divWrapper.innerHTML = ''

        const divUser = document.createElement('div')

        const name = document.createElement('h4')
        name.innerHTML =`Logged User: ${this.username}`

        const divCart = document.createElement('div')

        this.#cart.forEach(item => {

            const divItem = document.createElement('div')

            const desc = document.createElement('p')
            desc.innerHTML = `Product: ${item.product.name} <br> $${item.product.price} <br> ${item.sumquantity}`

            const btnDeleteItem = document.createElement('button')
            btnDeleteItem.textContent = 'Delete from Cart'
            btnDeleteItem.addEventListener('click',()=>{
                this.deleteCart(item)
                divWrapper.append(this.addUserToDOM())
                const divProducts = document.querySelector(".products");
                item.product.quantity += Number(item.sumquantity)
                divProducts.append(Product.addProductsToDOM(this));
            })

            divItem.append(desc,btnDeleteItem)
            divCart.append(divItem)
        })
        divUser.append(name,divCart)
        return divUser
    }
}

