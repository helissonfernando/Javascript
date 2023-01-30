// let num = [5,6,6,77,9]

// console.log(num)

// let num = [4,5,6,7,8]
// num.push(1)
// num.sort()

// console.log(num)

/*let valores = [8,1,7,4,2,9]

for(let pos=0; pos <valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Maneira mais facil de fazer isso !

let valores = [8,1,7,4,2,9]

for(let pos  in valores){
    console.log(`A possição ${pos} tem o valor ${valores[pos]}`)
}

//Buscar valores dentro de um vetor

let num = [4,5,6,7,8]
console.log(num.indexOf(7))
