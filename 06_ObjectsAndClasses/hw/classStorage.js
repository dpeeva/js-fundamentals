class Storage {
    constructor(capacity) {
        this.capacity = capacity
        this.storage = []
        this.totalCost = 0
    }

    addProduct(product) {
        this.storage.push(product)
        this.capacity -= product.quantity
        this.totalCost += product.price * product.quantity
    }
    getProducts() {
        const result = this.storage.map(e => JSON.stringify(e))
        return result.join("\n")
    }
}


// Test 1
let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 }
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 }
let productThree = { name: 'Bread', price: 1.10, quantity: 8 }
let storage = new Storage(50)

storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)

console.log(storage.getProducts())
console.log(storage.capacity)
console.log(storage.totalCost)

// Output Test 1
// {"name":"Cucamber","price":1.5,"quantity":15}
// {"name":"Tomato","price":0.9,"quantity":25}
// {"name":"Bread","price":1.1,"quantity":8}
// 2
// 53.8


// Test 2
// let productOne = { name: 'Tomato', price: 0.90, quantity: 19 }
// let productTwo = { name: 'Potato', price: 1.10, quantity: 10 }
// let storage = new Storage(30)

// storage.addProduct(productOne)
// storage.addProduct(productTwo)

// console.log(storage.totalCost)

// Output Test 2
// 28.1