
const read = require("readline-sync");
const products =[
  { name: "Apple", category: "Fruit", price: "500" },
  { name: "Banana", category: "Fruit", price: "120" },
  { name: "Orange", category: "Fruit", price: "250" },
  { name: "Mango", category: "Fruit", price: "350" },
  { name: "Milk", category: "Dairy", price: "180" },
  { name: "Bread", category: "Bakery", price: "90" },
  { name: "Rice", category: "Grain", price: "1500" },
  { name: "Eggs", category: "Poultry", price: "450" },
  { name: "Chicken", category: "Meat", price: "800" },
  { name: "Coffee", category: "Beverage", price: "650" }
];

// const name = read.question("Enter the category:");

const addItem=()=>{ //to add the items

    console.log("new product details")

    const name = read.question("enter product name")
    const category = read.question("enter product category")
    const price = read.questionFloat("enter product price") //for integerr

    const newProduct = {
        name: name,
        category: category,
        price: price,
    }

    products.push(newProduct)
}

const removeItem=()=>{ //to remove the items
    console.log("delete the products");

    const name = read.question("enter the name of the product")
     const newProdudtAfDelete = products.filter((value)=>{
        return value.name != name;
     })
     products.length = 0;
     products.push(...newProdudtAfDelete) ;
    
}

const showItem=()=>{ //to show the items
    products.forEach((value)=>{
        console.log(`name = ${value.name}`);
        console.log(`catrgory = ${value.category}`);
        console.log(`price = ${value.price}`);
        console.log(`==================`);
    })
}

const filterItem=()=>{// to filter by search

    const categoryName = read.question("enter the name of the category")

    const filteredProducts = products.filter((item,index)=>{
        return item.category.toLowerCase() ==  categoryName.toLowerCase();
    })
    
    console.log("Filtered products are: \n")
    filteredProducts.forEach((item)=>{
        console.log("Name=",item.name)
        console.log("Category=",item.category)
        console.log("Price=",item.price)
         console.log(`==================`);
    })
    
}

const priceLimitItem=()=>{ //to filter by price limitation
        console.log("price limiting products")
        const min = read.questionInt("enter your base budget")
        const max = read.questionInt("enter you max budget")

        const priceProduct = products.filter((value)=>{
            return value.price >= min && value.price <=max;
        })
        priceProduct.forEach((item)=>{
         console.log("Name=",item.name)
        console.log("Category=",item.category)
        console.log("Price=",item.price)
         console.log(`==================`);
        })
}

while(true){
    console.log("Methods menu")
    console.log("1. Add Product ")
    console.log("2. Remove Products ")
    console.log("3. Filter Products ")
    console.log("4. Search Products ")
    console.log("5. View Products")

    const ch = read.questionInt("Enter Your Choice: ")
    switch (ch) {
        case 1:
            addItem();
        break;

        case 2:
            removeItem();
        break;

        case 3:
            priceLimitItem();
        break;

        case 4:
            filterItem();
        break;

        case 5:
            showItem();
        break;
    
        default:
            break;
    }

}
