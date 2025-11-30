console.log('start')

function greet(name) {
    console.log('Hello ' + name);
}

const name = "Fuad"

greet(name);

console.log('end')

console.log('Start')

setTimeout(()=>{
    console.log('This is asynchrounos execution')
}, 5000)

console.log('end')