function isValidPassword(password, username) {
    const minPasswordLength = 8
    return (
        password.length >= minPasswordLength &&
        password.indexOf("") != -1 &&
        !password.includes(username)
    )    
}

console.log(isValidPassword("89Fjj1nms", "dogLuvr")) // true
console.log(isValidPassword("dogLuvr123!", "dogLuvr")) // false
console.log(isValidPassword("hello1", "dogLuvr")) // false