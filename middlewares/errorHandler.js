function errorHandler(err, req, res, next) {
    console.log(err)
    if (err.name === "ErrorNotFound") {
        res.status(404).json({message: "Error Not Found"})
    } else if (err.name === "InvalidCredential") {
        res.status(400).json({message: "Invalid email or password"})
    } else if (err.name === "Unauthenticated") {
        res.status(401).json({message: "Unauthenticated"})
    } else if (err.name === "UserNotFound") {
        res.status(404).json({message: "User not found"})
    } else if (err.name === "ErrorAlreadyExist") {
        res.status(409).json({message: "Data already exist"})
    }

    
    
    
    
    
    
    else {
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = errorHandler