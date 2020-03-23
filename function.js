function name([args,, argn]){
    statements
}
// function name(){
//     console.log('yes')
//     console.log('new')
// }
// name()
// function name (){
//     return 'new disease'
// }
// console.log(name())
// const neww = name
// console.log(neww())
// const newww = {r:name}
// console.log(newww.r())
// const n = {
//     time: 'happy hour',
//     situation:function(){
//         return 'voice mail available'
//     }
// }
// console.log(n.situation())
// console.log(n.time)
const f11 = function(){return 'more javaScript'}
const f1 = ()=> 'new world'
console.log(f1())
//
const f3 = function(a){
    return `value:${a}`

}
const f33 = d=> `value:${d}`
console.log(f33())

//two arguments
const f5 = function(c,d){
    return c*d
}

const f6 = (f,g)=> {
    f*g
    const f20 = 300*333
}
console.log(f6())
const g = {
    property: 'owned',
    why(){return `payed and ${this.property}`}

}
console.log(g.why())

const yes = g.why
console.log(yes===g.why)
console.log(yes())
const o ={
    w1: 'online',
    w2:'lessons',
    w3:'2020'
}
function getSentence({w1,w2,w3}){
    return `${w1} ${w2} ${w3}`


}
console.log(getSentence(o))
 const array = ['now','not','now']
 function getArr([a1,b1,c1]){
     return `${a1} ${b1} ${c1}`
 }
 console.log(getArr(array))
 function now(){
    return `today is ${this.wo}`
}
const obj = {wo:'amaizing'}
const obj2= {wo:'fantastic'}

console.log(now())
console.log(now.call(obj2))
function g (b){
    return b/2
}
console.log(g(1000))
lexical scoping
const now = 'happy'
function x(){
    console.log(now)
    console.log(N)

}
N = 5

x()

const trick ={
    world:'scared',
    why:'corona virus'
}
 
function m(){
    console.log(`the world is ${trick.world} of ${trick.why}`)
}
function n(){
    console.log(`im not ${trick.world} of ${trick.why}`)
}
m()
n()

function n (){
    let v = 0
    return function b(){
        return v++

    }
}
const m = n()
console.log(m())
console.log(m())
console.log(m())
function access(){
    let increment = 5
    return function accessor(){
        return increment --
    }
    }
const incrementation = access()
console.log(incrementation())
console.log(incrementation())
console.log(incrementation())
let now; {
    let today = 'tommorrow'
    now = function  (){
        console.log(today)
    }
}
console.log(now())
let y ;
{
    let x = {name:'boy'}
    y = ()=>{
        return x
    }
}
console.log(y())
const obj = y()
console.log(obj.name)
const now = (function(){
    let y = 5
    return function(){
        return `increment of number:${y++}`
    }
})()
console.log(now())
console.log(now())
console.log(now())
const arr = [1,2,3,4,5]

const arr1= [['one','two'],[1,2,3,4,]]
console.log(arr1[0][1])
const arr2 = [{name:'Barsu'},
[
    {name: 'kenya'},
    {situation: 'crying'}
]]
console.log(arr2[1][1].situation)
const arr3 = [{name:'Kenya'},[
    function(){
        return 'yes bana'
    }
]]
console.log (arr3[1][0]())

const arr1 = [1,2,3,4]

console.log(arr1.shift())
console.log(arr1)
const arr = [1,2,3,4]
console.log(arr.concat(5,6,7,8,9,))
console.log(arr)
const arr3 = [1,2,3,4,
console.log(arr3.slice(2,4))
const arr3 = [1,6,9]
arr3.splice(1,0,2,3,4,5)
console.log(arr3)
arr3.splice(6,1)
console.log(arr3)
const arr = [1,2,3,4,5,6,7,8,9]
arr.copyWithin(5,0,)
console.log(arr)
const arr = [1,2,3,4,5,6,7]
arr.fill('d',1,6 )
console.log(arr)
const arr= [1,2,3,4,5]
map1 = arr.map((function(x){return x*2}))
console.log(arr)
console.log(map1)
const arr = [{name:'laptop', price:100000},{name:'mobile',price:10000}]

const map1 = arr.map(x =>x.name)
const map2 = arr.map(x => x.price)
console.log(map1)
console.log(map2)
let infection = 40
if(infection>50){
console.log('isolate')
if(infection==40)
console.log('care')

else(infection<50)
console.log('kamkunji')

let ans = 5

switch(ans){
    case 1: console.log('kenya')
    break
    case 2:console.log('Uganda')
    break
case 3: console.log('Tanzania')
break
case 4: console.log('Rwanda')
break
default: console.log('no answer')
break
}

let count = 0

while(count<=10){
    console.log(count)
    count++
}
let value = 0
do{
    console.log(`number: ${value}`)
    value++
} while(value<=10)
for (let no=0;no<10;no++){
    console.log(`number: ${no}`)
}
for(let i =9,j=10;i>10,j>5;i++,j--){
    console.log(i)
}
let n = {
    a1:'',
    a2:'',
    a3:'',
}
for(let a in n){
    console.log(a)
}
const obj ={}
const y = obj
y.d = 'fff'
console.log()
class model{
    constructor(){}
}
const obj1 = new model()
const obj2 = new model()
console.log (obj1instancefmodel)
class newModel{
    static method(){
        return 'javaScript is now difficult'
    }
    static namee(){
        return `${this.method()} just see`
    }

}
const d = new newModel()
console.log(newModel.namee())
class s{
    constructor(){
        console.log(s.n())
    }
    static n(){
        return 'work now'
    }
}
const t = new s()

class person {
    constructor(f,l){
        this.f = f
this.l = l
    }
}
class age extends person{
    constructor(age){
        super('Manu','Barsu')
        this.age= age
    }
    showup(){
        console.log(this.f + '' + this.l)
        console.log(this.age)
    }
}
const d = new age(50)
d.showup()

class Employee {
    constructor(name){
        this.name= name
    }
    employName(){
        console.log(`${this.name}`)
    }

}
class Employee extends Wage{
    constructor(name, salary){
        super(name)
        this.name = name
        this.salary = salary
    }
    employName(){
        console.log(`${this.name} and ${this.salary}`)
    }
}
const nm = new Employee('victor' , 100000)
nm.employName() 
const dt = new Date()
console.log(dt)
console.log(dt.toString())

console.log(typeof dt.toString())
console.log(typeof dt)
const map1 = new Map()

let string  = 'string',
obj = {},
func = function(){}

map1.set(string , 'string')
map1.set(obj , 'obj')
map1.set(func , 'func')

console.log(map1.size)

console.log(map1.get(string))
console.log(map1.get(obj))
console.log(map1.get(func))

let st = 'welcome to Africa'

let tm = new RegExp('to')

console.log(st.search(tm))

    return function two (arg1, arg2){
    return fn(arg1, arg2)

}
}
function f(...args){
    console.log(args)
}

let para = document.getElementById('para')
console.log(para)
para.innerHTML = 'this is DOM text'
document.getElementById('para').innerHTML= 'new text in para'
let para = document.querySelector('p')
console.log(para)

para.innerHTML  = 'paragraph'
let para = document.querySelectorAll('.para')
console.log(para)
para[1].innerHTML = 'paragraph'
para[0].innerHTML = 'paragraph'
let sub = document.querySelector('input[type = submit]')
sub.classList.add('submit')

let p1 = document.createElement('p')
p2 = document.createElement('p')

p1.textContent = ' pragraph 1'
p2.textContent = 'paragraph 2'

const a = document.querySelector('.content')
a.appendChild(p1)
a.appendChild(p2)