import { User, Buyer } from "./users.js";

export class Product {
  static products = [];
  name;
  price;
  quantity;
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  toString() {
    return `Product: ${this.name} <br> Price : $${this.price} <br> Quantity:${this.quantity}`;
  }

  static addProductsToDOM(user) {
    const divProducts = document.querySelector(".products");
    divProducts.innerHTML = "";

    const divList = document.createElement("div");

    Product.products.forEach((product) => {
      const divProduct = document.createElement("div");

      const pDesc = document.createElement("p");
      pDesc.innerHTML = product.toString();

      divProduct.append(pDesc);

      if (user instanceof Buyer) {
        const inputQ = document.createElement("input");
        inputQ.type = "number";

        const btnAddToCart = document.createElement("button");
        btnAddToCart.textContent = "Add to Cart";

        btnAddToCart.addEventListener("click", () => {
          if (product.quantity >= Number(inputQ.value)) {
            user.addToCart(product, inputQ.value);
            const divUser = document.querySelector("#user");
            divUser.append(user.addUserToDOM());
            product.quantity -= Number(inputQ.value);
            divProducts.append(Product.addProductsToDOM(user));
          } else {
          }
        });

        divProduct.append(inputQ, btnAddToCart);
      }

      divList.append(divProduct);
    });

    return divList;
  }
}

export class Food extends Product {
  expiryDate;
  constructor(name, price, quantity, expiryDate) {
    super(name, price, quantity);
    this.expiryDate = expiryDate;
  }

  toString() {
    return super.toString() + ` <br> Expires: ${this.expiryDate}`;
  }
}

export class Appliance extends Product {
  warranty;
  constructor(name, price, quantity, warranty) {
    super(name, price, quantity);
    this.warranty = warranty;
  }

  toString() {
    return super.toString() + ` <br> Warranty: ${this.warranty} years`;
  }
}
