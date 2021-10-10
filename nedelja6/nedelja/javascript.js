class ProductGroup {
    title
    vAT
    constructor(title, vAT) {
        this.title = title
        this.vAT = vAT
    }

    get title() {
        return this.title
    }

    get vAT() {
        return this.vAT
    }

    set title(title) {
        if (typeof title !== 'string' || title == "") {
            console.log("Naziv mora biti string i da ne bude prazan")
            return
        }
        this.title = title
    }

    set vAT(vAT) {
        if (vAT < 0 || vAT > 100) {
            console.log('Pdv mora biti izmedju 0 i 100')
            return
        }
        this.vAT = vAT
    }

}

class Product {
    barcode
    title
    price
    group

    constructor(barcode, title, price, group) {
        this.barcode = barcode
        this.title = title
        this.price = price
        this.group = group
        if(!this.group || !this.barcode || !this.title || !this.price) {
            return
        }
    }

    get barcode() {
        return this.barcode
    }

    get title() {
        return this.title
    }

    get price() {
        return this.price
    }

    get group() {
        return this.group
    }


    set barcode(barcode) {
        if (typeof barcode !== 'number' || barcode < 0 || Math.ceil(barcode) != barcode) {
            console.log("Mora da bude celobrojna vrednost veca od nule!")
            return
        }
        this.barcode = barcode
    }

    set title(title) {
        if (typeof title !== 'string' || title == "") {
            console.log("Naziv mora biti string i da ne bude prazan")
            return
        }
        this.title = title
    }

    set price(price) {
        if (typeof price !== 'number' || price < 0) {
            console.log("Mora da bude celobrojna vrednost veca od nule!")
            return
        }
        this.price = price
    }

    set group(group) {
        if (!group instanceof ProductGroup) {
            console.log("Grupa mora biti instanca klase ProductGroup")
            return
        }
        this.group = group
    }
}

class ShoppingCartItem {
    #product
    #quantity
    constructor(product, quantity = 1) {
        this.product = product
        this.quantity = quantity
        if(!this.quantity || !this.barcode || !this.title || !this.price) {
            return
        }
    }

    get product() {
        return this.#product
    }

    get quantity() {
        return this.#quantity
    }

    set product(product) {
        if (!product instanceof Product) {
            console.log('Product mora biti instanca klase Product')
            return
        }
        this.#product = product
    }

    set quantity(quantity) {
        console.log(quantity)
        if (typeof quantity !== 'number' || quantity < 0) {
            console.log("Mora da bude celobrojna vrednost veca od nule!")
            return
        }
        this.#quantity = quantity
    }
}

class ShoppingCart {
    items
    constructor() {
        this.items = []
    }

    addProduct(product, quantity = 1) {
        let flag = false
        this.items.forEach(item => {
            if (item.product.barcode == product.barcode) {
                console.log(item)   
                item.quantity = item.quantity + quantity
                flag = true
            }
        });
        if (!flag) {
            this.items.push(new ShoppingCartItem(product, quantity))
        }
    }
}

class Checkout {

    printCheck(shoppingCart){
        let total = 0
        let vatTotal = 0

        let tbody = document.querySelector('.tbody')

        shoppingCart.items.forEach(item => {
            let priceWithVat = item.product.price * ((item.product.group.vAT / 100) + 1)
            let subtotal = priceWithVat * item.quantity
            total += subtotal
            vatTotal += item.product.group.vAT

            let tr = document.createElement('tr')
            let dtProdGroup = document.createElement('td')
            dtProdGroup.textContent = item.product.group.title
            let dtProduct = document.createElement('td')
            dtProduct.textContent = item.product.title
            let dtPrice = document.createElement('td')
            dtPrice.textContent = priceWithVat
            let dtQuantity = document.createElement('td')
            dtQuantity.textContent = item.quantity
            let dtVAT = document.createElement('td')
            dtVAT.textContent = item.product.group.vAT
            let dtSubtotal = document.createElement('td')
            dtSubtotal.textContent = subtotal
            tbody.append(tr)
            tr.append(dtProdGroup, dtProduct, dtPrice, dtQuantity, dtVAT, dtSubtotal)
        });

        let tr = document.createElement('tr')
        let tdVatTotal = document.createElement('td')
        tdVatTotal.textContent = "VAT / TOTAL"
        let tdVAT = document.createElement('td')
        tdVAT.textContent = vatTotal
        let tdTotal = document.createElement('td')
        tdTotal.textContent = total
        tbody.append(tr)
        tr.append(tdVatTotal, tdVAT, tdTotal)
    }
}


pg2 = new ProductGroup("Electronic", 20)
pg1 = new ProductGroup("House", 40)
pg3 = new ProductGroup("Food", 20)

p1 = new Product(12345, "Laptop", 100000, pg2)
p2 = new Product(12346, "Smarth phone", 50000, pg2)
p3 = new Product(12347, "LED TV", 70000, pg2)
p4 = new Product(12348, "Table", 20000, pg1)
p5 = new Product(12349, "Window", 5000, pg1)
p6 = new Product(33245, "Cheese", 40, pg3)
p7 = new Product(87899, "Milk", 5, pg3)


cart1 = new ShoppingCart()

cart1.addProduct(p1, 2)
cart1.addProduct(p2)
cart1.addProduct(p3, 9)
cart1.addProduct(p4, 6)
cart1.addProduct(p5, 2)
cart1.addProduct(p6, 4)
cart1.addProduct(p7, 10)

ck = new Checkout()

ck.printCheck(cart1)