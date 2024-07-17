// / Memory Allocation
// 1. Stack (Primitive) --> Stacked --> Last-in , Fist-Out
// 2. Heap (Non-primitive) --> 

// let YTName = 'vish.master.com'
// let AnotherName = YTName
// AnotherName = 'v.user.com'

// console.log(AnotherName)
// console.log(YTName) 

let user = {
    email:'user@gmail.com',
    upi: '627276527157@xdgd.com'
}

let user2 = user
user.email = 'x.user@gmail.com'

console.log(user)
console.log(user2)