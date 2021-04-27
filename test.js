// let [ a, b = 1 ] = [ '林三心' ]
// console.log(a, b) // a = '林三心'  b = 1

// let [ a, b = 1 ] = [ '林三心', undefined ]
// console.log(a, b) // a = '林三心'  b = 1

// let [ a, b = 1 ] = [ '林三心', '林三心' ]
// console.log(a, b) // a = '林三心'  b = '林三心'

// let [ a, b = 1 ] = [ '林三心', null ]
// console.log(a, b) // a = '林三心'  b = null

// function test (a, ...params) { 
//     console.log(a)
//     console.log(params)
//  }

// test(1) // 1 []
// test(1, 2, 3, 4, 5) // 1 [2, 3, 4, 5]

let test = (...params) => {
    console.log(params)
}

test(1, 2, 3, 4, 5) // [1, 2, 3, 4, 5]

let arr = [
    {
        name: '林三心',
        age: 20,
        special: [
            { id: 1, value: '膜拜' },
            { id: 2, value: '偶像' }
        ]
    },
    {
        name: '林五心',
        age: 20,
        special: [
            { id: 1, value: '膜拜' },
            { id: 2, value: '偶像' }
        ]
    }
]

const fun = (data) => {
    let obj = {}, tempspe
    data.forEach(({ name, age, special }) => {
        tempspe = {}
        special.forEach(({ id, value }) => {
            tempspe[`special_${id}`] = value
        })
        obj[name] = { age, ...tempspe }
    })
    return obj
}

console.log(fun(arr))


