let current_users : string [] = ["Admin,","Eric","Ali","Faisal","adeel"]
let new_users : string [] = ["Admin","Qasim","Ali","adeel","Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`)
    } else {
        console.log(`yes ${new_user}, is still in available list`)
    }
}