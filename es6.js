// Object property shorthand

const name = 'Anay';
const userAge  = 27;

const user = {
    name , // this is euqal to name : name
    age: userAge,
    location : "Rohini"
}

console.log(user)

// object destructuring

const product = {
    label : "Oneplus",
    price : 6,
    item : "he"
}

// Instead of writing const label = product.label , we can write
// to give a diffrent name other than same name we can do like this 
// we can give some default parameters too 

const {label , itemPrice : price , item = "heeloo"} = product
console.log(label)
console.log(item)

const transaction = (type , {label , stock}) => {
    console.log(type , label , stock)
}
transaction('oreder' , product)