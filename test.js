
/* console.log(typeof 1)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof [])
console.log(typeof '')
console.log(typeof true)
console.log(typeof Symbol())

console.log(typeof(111)) */

let getType = Object.prototype.toString

console.log(getType.call(null))   //[object Null]
console.log(getType.call({}))     //[object Object]
console.log(getType.call([]))     //[object Array]
console.log(getType.call(1))     //[object Number]
console.log(getType.call(''))     //[object String]
console.log(getType.call(true))     //[object Boolean]
console.log(getType.call(function() {}))     //[object Function]
console.log(getType.call(undefined))     //[object Undefined]

/* const isType = type => target => `[Object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array')
console.log(isArray([])) */

const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

const selfIsArray = isType('Array')

Array.selfIsArray || (Object.defineProperty(Array, 'selfIsArray', {
    value: selfIsArray,
    enumerable: false,
    configurable: true,
    writable: true
}))

console.log(selfIsArray([])); // true