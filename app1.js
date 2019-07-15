// callback functionality 

// if we dont use callback

var add = (a,b,callback) => {
    setTimeout(() => {
        const data =10;
       callback(data)
    },2000)
}

const data = add(2,4,(data) => {
    console.log(data)
})
var multiply = () => {
    console.log("hello")
}