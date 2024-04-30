let users : string [] = ["admin","eric","faisal","ali","adeel"]
for (let user of users) {
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report?")
     } else {
        console.log (` hello ${user}, thankyou for logging in again`)
     }
}